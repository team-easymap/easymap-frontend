export const searchResult = [
  {
    poi_id: 108,
    poi_name: '왕십리역1',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 37.561, // Approximate latitude of Wangsimni Station
    lng: 127.038 // Approximate longitude of Wangsimni Station
  },
  {
    poi_id: 109,
    poi_name: '왕십리역2',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 37.5615,
    lng: 127.0385
  },
  {
    poi_id: 110,
    poi_name: '왕십리역3',
    poi_address: '서울시 성동구 왕십리로 33',
    lat: 37.5605,
    lng: 127.0375
  },
  {
    poi_id: 111,
    poi_name: '왕십리역4',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 37.562,
    lng: 127.039
  },
  {
    poi_id: 112,
    poi_name: '왕십리역5',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 37.5613,
    lng: 127.0382
  },
  {
    poi_id: 113,
    poi_name: '왕십리역6',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 37.5617,
    lng: 127.0387
  },
  {
    poi_id: 114,
    poi_name: '왕십리역7',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 37.5619,
    lng: 127.0389
  },
  {
    poi_id: 115,
    poi_name: '왕십리역8',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 37.5621,
    lng: 127.0391
  },
  {
    address: '서울시 성동구 왕십리로 123',
    lat: 37.5608,
    lng: 127.0378
  },
  {
    address: '서울시 성동구 왕십리로 234',
    lat: 37.5612,
    lng: 127.0381
  },
  {
    address: '서울시 성동구 왕십리로 24',
    lat: 37.5612,
    lng: 127.0381
  },
  {
    address: '서울시 성동구 왕십리로 222',
    lat: 37.5612,
    lng: 127.0381
  }
];

export const searchRoutesResult = [
  {
    type: 'fastest',
    distance: 1812,
    slope: 1.2,
    time_required: '01:13:00',
    list: [
      { lat: 37.5665, lng: 126.978 },
      { lat: 37.57, lng: 126.9769 },
      { lat: 37.5786, lng: 126.9769 },
      { lat: 37.5704, lng: 126.988 },
      { lat: 37.5512, lng: 126.9882 }
    ]
  },
  {
    type: 'fastest2',
    distance: 1812,
    slope: 1.2,
    time_required: '0:14:30',
    list: [
      { lat: 37.5665, lng: 126.978 },
      { lat: 37.57, lng: 126.9769 },
      { lat: 37.5786, lng: 126.9769 },
      { lat: 37.5704, lng: 126.988 },
      { lat: 37.5512, lng: 126.9882 }
    ]
  },
  {
    type: 'fastest3',
    distance: 1812,
    slope: 1.2,
    time_required: '02:00:08',
    list: [
      { lat: 37.5665, lng: 126.978 },
      { lat: 37.57, lng: 126.9769 },
      { lat: 37.5786, lng: 126.9769 },
      { lat: 37.5704, lng: 126.988 },
      { lat: 37.5512, lng: 126.9882 }
    ]
  }
];

export const getRandomSearchResult = () => {
  const firstRandomIdx = Math.floor(Math.random() * searchResult.length);
  const secondRandomIdx = Math.floor(Math.random() * searchResult.length);

  return firstRandomIdx <= secondRandomIdx
    ? searchResult.slice(firstRandomIdx, secondRandomIdx)
    : searchResult.slice(secondRandomIdx, firstRandomIdx);
};
