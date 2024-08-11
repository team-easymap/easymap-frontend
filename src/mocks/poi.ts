export const mockPOI = {
  poi_id: 109,
  poi_name: '모모 식당',
  poi_address: '서울시 강남구 강남대로 145-13',
  user_id: 1,
  poi_point_avg: 8,
  poi_point_count: 10,
  poi_point_ally: 13,
  poi_category: {
    category_id: 19,
    category_name: '식음료 및 생활시설',
    detailed_category: '음식점'
  },
  tags_on_poi: [
    {
      tag_id: 21,
      tag_name: '출입구 경사로'
    },
    {
      tag_id: 24,
      tag_name: '장애인 화장실'
    },
    {
      tag_id: 25,
      tag_name: '직원 서빙'
    }
  ],
  imgs_on_poi: [
    {
      img_id: 1,
      s3_url: 'https://bucket-name.s3.amazonaws.com/key-name.png'
    },
    {
      img_id: 2,
      s3_url: 'https://bucket-name.s3.amazonaws.com/key-name.jpg'
    }
  ],
  lat: 37.5512,
  lng: 126.9882
};
