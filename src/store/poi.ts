import { create, } from "zustand"
interface Tag {
    tag_id: number;
}

interface PoiInfo {
    poi_name: string;
    poi_address: string;
    detailed_catetory_id: number;
    lat: number;
    lng: number;
    poi_code: string;
    tag_list: Tag[];
    images: File[];

    setPoiName: (poiName: string) => void;
    setPoiAddress: (poiAddress: string) => void;
    setDetailedCategoryId: (categoryId: number) => void;
    setLat: (lat: number) => void;
    setLng: (lng: number) => void;
    setPoiCode: (poiCode: string) => void;
    setTagList: (tag: Tag) => void;
    setImages: (images: File[]) => void;

}

export const usePoiStore = create<PoiInfo>((set) => ({
    poi_name: '',
    poi_address: '',
    detailed_catetory_id: 0,
    lat: 0,
    lng: 0,
    poi_code: '',
    tag_list: [],
    images: [],
    setPoiName: (poiName: string) => set({
        poi_name: poiName
    }),
    setPoiAddress: (poiAddress: string) => set({
        poi_address: poiAddress
    }),
    setDetailedCategoryId: (categoryId: number) => set({
        detailed_catetory_id: categoryId
    }),
    setLat: (lat: number) => set({
        lat: lat
    }),
    setLng: (lng: number) => set({
        lng: lng
    }),
    setPoiCode: (poiCode: string) => set({
        poi_code: poiCode
    }),
    setTagList: (tag: Tag) => set(state => {
        // Check if the tag exists
        const tagExists = state.tag_list.some(t => t.tag_id === tag.tag_id);
        return {
            tag_list: tagExists
                ? state.tag_list.filter(t => t.tag_id !== tag.tag_id) // Remove tag if it exists
                : [...state.tag_list, tag] // Add tag if it does not exist
        };
    }),
    setImages: (images: File[]) => set({
        images: images

    }),
}))

