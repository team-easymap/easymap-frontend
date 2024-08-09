export const searchResult = [
  {
    poi_id: 108,
    poi_name: '왕십리역1',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    poi_id: 109,
    poi_name: '왕십리역2',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    poi_id: 110,
    poi_name: '왕십리역3',
    poi_address: '서울시 성동구 왕십리로 33',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    poi_id: 111,
    poi_name: '왕십리역4',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    poi_id: 112,
    poi_name: '왕십리역5',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    poi_id: 113,
    poi_name: '왕십리역6',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    poi_id: 114,
    poi_name: '왕십리역7',
    poi_address: '서울시 성동구 왕십리로 345',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    poi_id: 115,
    poi_name: '왕십리역8',
    poi_address: '서울시 성동구 왕십리로 456',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    address: '서울시 성동구 왕십리로 123',
    lat: 35.3535353,
    lon: -128.2828282
  },
  {
    address: '서울시 성동구 왕십리로 234',
    lat: 35.3535353,
    lon: -128.2828282
  }
];

export const getRandomSearchResult = () => {
  const firstRandomIdx = Math.floor(Math.random() * searchResult.length);
  const secondRandomIdx = Math.floor(Math.random() * searchResult.length);

  return firstRandomIdx <= secondRandomIdx
    ? searchResult.slice(firstRandomIdx, secondRandomIdx)
    : searchResult.slice(secondRandomIdx, firstRandomIdx);
};
