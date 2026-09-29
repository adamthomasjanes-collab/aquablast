export const serviceLocations = [
  { name: 'Bowling Green', lat: 41.3748, lon: -83.6513, note: 'Northwest Ohio', slug: 'bowling-green' },
  { name: 'Catawba Island', lat: 41.5853, lon: -82.8369, note: 'Lake Erie area', slug: 'catawba-island' },
  { name: 'Fremont', lat: 41.3473, lon: -83.1135, note: 'Northwest Ohio', slug: 'fremont' },
  { name: 'Genoa', lat: 41.51811, lon: -83.35909, note: 'Northwest Ohio', slug: 'genoa' },
  { name: 'Johnson’s Island', lat: 41.49505, lon: -82.73685, note: 'Sandusky Bay', slug: 'johnsons-island' },
  { name: 'Kelleys Island', lat: 41.597, lon: -82.7102, note: 'Lake Erie island', slug: 'kelleys-island' },
  { name: 'Lakeside', lat: 41.5447, lon: -82.7501, note: 'Lake Erie shore', slug: 'lakeside' },
  { name: 'Marblehead', lat: 41.5403, lon: -82.7355, note: 'Lake Erie shore', slug: 'marblehead' },
  { name: 'Oak Harbor', lat: 41.5128, lon: -83.1466, note: 'Northwest Ohio', slug: 'oak-harbor' },
  { name: 'Port Clinton', lat: 41.512, lon: -82.9377, note: 'Lake Erie shore', slug: 'port-clinton' },
  { name: 'Put-In-Bay', lat: 41.6519, lon: -82.8187, note: 'Lake Erie island', slug: 'put-in-bay' },
  { name: 'Sandusky', lat: 41.4561, lon: -82.7116, note: 'Lake Erie shore', slug: 'sandusky' },
  { name: 'Tiffin', lat: 41.1145, lon: -83.178, note: 'Northwest Ohio', slug: 'tiffin' },
  { name: 'Toledo', lat: 41.6529, lon: -83.5378, note: 'Northwest Ohio', slug: 'toledo' },
]

export const serviceAreaExtent = serviceLocations.reduce((extent, place) => ({
  north: Math.max(extent.north, place.lat),
  south: Math.min(extent.south, place.lat),
  west: Math.min(extent.west, place.lon),
  east: Math.max(extent.east, place.lon),
}), { north: -90, south: 90, west: 180, east: -180 })

export function getServiceLocation(name) {
  return serviceLocations.find((place) => place.name === name)
}
