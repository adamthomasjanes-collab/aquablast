import { useCallback, useEffect, useRef, useState } from 'react'
import { Map, NavigationControl, setWorkerUrl } from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import 'maplibre-gl/dist/maplibre-gl.css'
import './ServiceArea.css'
import { getServiceLocation, serviceAreaExtent, serviceLocations } from '../data/serviceArea'
import { canonicalRoutes, locationCanonicalPath } from '../data/migrationRoutes'

setWorkerUrl(workerUrl)

const mapStyle = {
  version: 8,
  sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap contributors' } },
  layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
}

function fitServiceArea(map, mobile = false, duration = 0) {
  map.fitBounds([[serviceAreaExtent.west, serviceAreaExtent.south], [serviceAreaExtent.east, serviceAreaExtent.north]], { padding: mobile ? 28 : 54, maxZoom: mobile ? 7.25 : 7.5, duration })
}

function ServiceAreaMap({ activePlace, onSelect, mapRef, onReadyChange }) {
  const containerRef = useRef(null)
  const activePlaceRef = useRef(activePlace)
  const [status, setStatus] = useState('loading')

  useEffect(() => { activePlaceRef.current = activePlace }, [activePlace])

  useEffect(() => {
    if (!containerRef.current) return undefined
    let disposed = false
    const map = new Map({ container: containerRef.current, style: mapStyle, center: [-83.12, 41.43], zoom: 7.15, minZoom: 6.2, maxZoom: 11.5, renderWorldCopies: false, maxBounds: [[-84.15, 40.72], [-82.12, 42.05]], attributionControl: true })
    mapRef.current = map
    map.addControl(new NavigationControl({ showCompass: false }), 'top-right')

    map.once('load', () => {
      if (disposed) return
      map.addSource('aquablast-service-locations', { type: 'geojson', data: { type: 'FeatureCollection', features: serviceLocations.map((place, index) => ({ id: index, type: 'Feature', geometry: { type: 'Point', coordinates: [place.lon, place.lat] }, properties: { name: place.name } })) } })
      map.addLayer({ id: 'service-point-halo', type: 'circle', source: 'aquablast-service-locations', paint: {
        'circle-radius': ['case', ['boolean', ['feature-state', 'hover'], false], 14, ['boolean', ['feature-state', 'active'], false], 15, 10],
        'circle-color': ['case', ['boolean', ['feature-state', 'active'], false], 'rgba(191,217,91,.26)', ['boolean', ['feature-state', 'hover'], false], 'rgba(40,203,230,.24)', 'rgba(3,39,52,.18)'],
        'circle-stroke-color': ['case', ['boolean', ['feature-state', 'active'], false], '#bfd95b', ['boolean', ['feature-state', 'hover'], false], '#28cbe6', 'rgba(8,118,141,.45)'],
        'circle-stroke-width': ['case', ['boolean', ['feature-state', 'active'], false], 3, ['boolean', ['feature-state', 'hover'], false], 2, 1],
      } })
      map.addLayer({ id: 'service-point-selection-ring', type: 'circle', source: 'aquablast-service-locations', paint: {
        'circle-radius': ['case', ['boolean', ['feature-state', 'active'], false], 19, 0],
        'circle-color': 'rgba(191,217,91,.08)',
        'circle-opacity': ['case', ['boolean', ['feature-state', 'active'], false], 1, 0],
        'circle-stroke-color': '#bfd95b',
        'circle-stroke-opacity': ['case', ['boolean', ['feature-state', 'active'], false], 1, 0],
        'circle-stroke-width': 3,
        'circle-blur': .06,
      } })
      map.addLayer({ id: 'service-point', type: 'circle', source: 'aquablast-service-locations', paint: {
        'circle-radius': ['case', ['boolean', ['feature-state', 'hover'], false], 8, ['boolean', ['feature-state', 'active'], false], 7, 6],
        'circle-color': ['case', ['boolean', ['feature-state', 'active'], false], '#bfd95b', ['boolean', ['feature-state', 'hover'], false], '#28cbe6', '#08768d'],
        'circle-stroke-color': ['case', ['boolean', ['feature-state', 'active'], false], '#062735', '#f4f7f3'],
        'circle-stroke-width': ['case', ['boolean', ['feature-state', 'hover'], false], 3, 2],
      } })
      let hoveredId = null
      map.on('click', 'service-point', (event) => { const name = event.features?.[0]?.properties?.name; if (name) onSelect(name) })
      map.on('mouseenter', 'service-point', (event) => {
        map.getCanvas().style.cursor = 'pointer'
        const nextId = event.features?.[0]?.id
        if (hoveredId !== null && hoveredId !== nextId) map.setFeatureState({ source: 'aquablast-service-locations', id: hoveredId }, { hover: false })
        if (nextId !== undefined && nextId !== null) {
          hoveredId = nextId
          map.setFeatureState({ source: 'aquablast-service-locations', id: hoveredId }, { hover: true })
        }
      })
      map.on('mouseleave', 'service-point', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredId !== null) map.setFeatureState({ source: 'aquablast-service-locations', id: hoveredId }, { hover: false })
        hoveredId = null
      })
      serviceLocations.forEach((candidate, index) => {
        map.setFeatureState({ source: 'aquablast-service-locations', id: index }, { active: candidate.name === activePlaceRef.current })
      })
      fitServiceArea(map, window.matchMedia('(max-width: 700px)').matches)
      setStatus('ready'); onReadyChange(true)
    })
    map.on('error', (event) => { if (!disposed && !map.isStyleLoaded()) { console.warn('AquaBlast service map error:', event.error); setStatus('error'); onReadyChange(false) } })
    return () => { disposed = true; onReadyChange(false); mapRef.current = null; map.remove() }
  }, [mapRef, onReadyChange, onSelect])

  useEffect(() => {
    const map = mapRef.current
    if (!map?.isStyleLoaded()) return
    serviceLocations.forEach((candidate, index) => {
      map.setFeatureState({ source: 'aquablast-service-locations', id: index }, { active: candidate.name === activePlace })
    })
    if (!getServiceLocation(activePlace)) return
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    fitServiceArea(map, window.matchMedia('(max-width: 700px)').matches, reduced ? 0 : 320)
  }, [activePlace, mapRef])

  return <div className={`service-map-canvas maplibre-map-shell is-${status}`} role="group" aria-label="Interactive map of AquaBlast service-area communities"><div ref={containerRef} className="maplibre-map" />{status === 'loading' && <div className="service-map-status" role="status">Loading service-area map…</div>}{status === 'error' && <div className="service-map-status service-map-error" role="status">Map unavailable. The complete service-area list remains available below.</div>}<div className="service-map-depth" aria-hidden="true" /></div>
}

const defaultIntro = {
  kicker: 'Northwest Ohio + Lake Erie',
  title: 'Serving the lake towns, islands, and inland communities around them.',
  body: ['From Marblehead and Port Clinton to Sandusky, Toledo, Tiffin, the islands, and lake towns in between, we serve communities across Northwest Ohio and the Lake Erie area.'],
  featured: [
    ['marblehead', 'Marblehead'],
    ['port-clinton', 'Port Clinton'],
    ['sandusky', 'Sandusky'],
    ['oak-harbor', 'Oak Harbor'],
  ],
}

export function ServiceArea({ intro = defaultIntro, showActions = true, className = '' }) {
  const [activePlace, setActivePlace] = useState('')
  const [mapReady, setMapReady] = useState(false)
  const mapRef = useRef(null)
  const active = getServiceLocation(activePlace)
  const selectPlace = useCallback((name) => setActivePlace(name), [])
  const resetMap = () => { setActivePlace(''); if (mapRef.current && mapReady) fitServiceArea(mapRef.current, window.matchMedia('(max-width: 700px)').matches, window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 0 : 320) }
  const rootClassName = ['area', 'local-area', className].filter(Boolean).join(' ')

  return <section className={rootClassName} id="areas"><div className="local-area-intro"><p className="kicker">{intro.kicker}</p><h2>{intro.title}</h2>{intro.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{intro.steps?.length ? <ol className="local-area-plan" aria-label="How to use the service-area map">{intro.steps.map(([number, label]) => <li key={number}><b>{number}</b><span>{label}</span></li>)}</ol> : null}{intro.featured?.length ? <p className="local-area-featured"><span>Popular service areas:</span> {intro.featured.map(([slug, label], index) => <span key={slug}>{index > 0 && <span aria-hidden="true">·</span>} <a href={locationCanonicalPath(slug)}>{label}</a>{' '}</span>)}</p> : null}{showActions && <div className="local-area-actions"><a className="secondary local-area-link" href={canonicalRoutes.locations}>See all service areas <span aria-hidden="true">→</span></a><a className="cta local-area-estimate" href="/estimate?source=home%3Aareas">Get an estimate <span aria-hidden="true">→</span></a></div>}</div><div className="service-map-wrap"><div className="service-map-copy" aria-live="polite"><p className="local-area-label">Current service areas</p><strong>{active ? active.name : 'Northwest Ohio + Lake Erie'}</strong><span>{active ? active.note : `${serviceLocations.length} listed communities`}</span><small>{active ? `Selected service area · ${active.name}` : 'Choose a community below, or select a map marker, to view its local service page.'}</small>{active?.slug && <a className="service-map-page-link" href={locationCanonicalPath(active.slug)}>See {active.name} services <span aria-hidden="true">→</span></a>}<button type="button" className="service-map-reset" onClick={resetMap} disabled={!mapReady || !activePlace}>View full service area</button></div><ServiceAreaMap activePlace={activePlace} onSelect={selectPlace} mapRef={mapRef} onReadyChange={setMapReady} /><div className="service-map-list" aria-label="AquaBlast service-area communities">{serviceLocations.map((place) => <button type="button" key={place.name} onClick={() => selectPlace(place.name)} className={place.name === activePlace ? 'is-active' : ''} aria-pressed={place.name === activePlace}>{place.name}</button>)}</div></div></section>
}
