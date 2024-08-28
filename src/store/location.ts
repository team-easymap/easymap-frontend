import create from 'zustand'

export type MyLatlng = L.LatLng | null;

type PoiData = {
    poi_id: number;      // POI ID
    poi_name: string;    // POI 이름
    type: string;       // POI 타입 (obstacle 또는 place)
    lat: number;         // 위도
    lng: number;         // 경도
};
//state
export interface LocationStates {
    myLocation: MyLatlng
    setMyLocation: (location: MyLatlng) => void;
    lt: MyLatlng,
    rb: MyLatlng,
    setLt: (lt: MyLatlng) => void;
    setRb: (rb: MyLatlng) => void;

    view_move: boolean;
    setViewMove: (move: boolean) => void;
    view_poi: PoiData[];
    setViewPoi: (data: PoiData[]) => void;


}

export const useLocationStore = create<LocationStates>((set) => ({
    myLocation: null,
    setMyLocation: (location: MyLatlng) => set({ myLocation: location }),
    lt: null,
    rb: null,
    setLt: (lt: MyLatlng) => set({ lt: lt }),
    setRb: (rb: MyLatlng) => set({ rb: rb }),
    view_move: false,
    setViewMove: (move: boolean) => set({ view_move: move }),
    view_poi: [],
    setViewPoi: (data: PoiData[]) => set({
        view_poi: data.length > 0 ? data : [] // Conditionally update view_poi based on data length
    })
}))