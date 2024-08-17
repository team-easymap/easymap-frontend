export type SearchResult = {
  address?: string;
  poi_id?: number;
  poi_name?: string;
  poi_address?: string;
  lat: number;
  lng: number;
};

export type SearchRoutesResult = {
  type: 'string';
  distance: number;
  slope: number;
  time_required: string;
  list: { lat: number; lng: number }[];
}[];

export type POI = {
  poi_id: number;
  poi_name: string;
  poi_address: string;
  user_id: number;
  poi_point_avg: number;
  poi_point_count: number;
  poi_point_ally: number;
  poi_category: {
    category_id: number;
    category_name: string;
    detailed_category: string;
  };
  tags_on_poi: {
    tag_id: number;
    tag_name: string;
  }[];
  imgs_on_poi: {
    img_id: number;
    s3_url: string;
  }[];
  lat: number;
  lng: number;
};
