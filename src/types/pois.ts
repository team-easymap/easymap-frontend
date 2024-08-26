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

  imgs_on_poi: {
    img_id: number;
    s3_url: string;
  }[];
  lat: number;
  lng: number;
} & Category;

export type Category = {
  category_id: number;
  category_name: string;
  detailed_category_list: DetailedCategory[];
  tag_response_dtolist: Tag[];
};

type DetailedCategory = {
  detailed_category_id: number;
  detailed_category_name: string;
};

type Tag = {
  tag_id: number;
  tag_name: string;
  tag_accessibility_point?: number;
};
