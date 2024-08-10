export const searchResult = [
  {
    poi_id: 108,
    poi_name: '왕십리역1',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 37.561,  // Approximate latitude of Wangsimni Station
    lon: 127.038  // Approximate longitude of Wangsimni Station
  },
  {
    poi_id: 109,
    poi_name: '왕십리역2',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 37.5615,
    lon: 127.0385
  },
  {
    poi_id: 110,
    poi_name: '왕십리역3',
    poi_address: '서울시 성동구 왕십리로 33',
    lat: 37.5605,
    lon: 127.0375
  },
  {
    poi_id: 111,
    poi_name: '왕십리역4',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 37.562,
    lon: 127.039
  },
  {
    poi_id: 112,
    poi_name: '왕십리역5',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 37.5613,
    lon: 127.0382
  },
  {
    poi_id: 113,
    poi_name: '왕십리역6',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 37.5617,
    lon: 127.0387
  },
  {
    poi_id: 114,
    poi_name: '왕십리역7',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 37.5619,
    lon: 127.0389
  },
  {
    poi_id: 115,
    poi_name: '왕십리역8',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 37.5621,
    lon: 127.0391
  },
  {
    address: '서울시 성동구 왕십리로 123',
    lat: 37.5608,
    lon: 127.0378
  },
  {
    address: '서울시 성동구 왕십리로 234',
    lat: 37.5612,
    lon: 127.0381
  }
];


export const getRandomSearchResult = () => {
  const firstRandomIdx = Math.floor(Math.random() * searchResult.length);
  const secondRandomIdx = Math.floor(Math.random() * searchResult.length);

  return firstRandomIdx <= secondRandomIdx
    ? searchResult.slice(firstRandomIdx, secondRandomIdx)
    : searchResult.slice(secondRandomIdx, firstRandomIdx);
};
