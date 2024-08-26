import create from 'zustand'

export type MyLatlng = L.LatLng | null;

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



}

export const useLocationStore = create<LocationStates>((set) => ({
    myLocation: null,
    setMyLocation: (location: MyLatlng) => set({ myLocation: location }),
    lt: null,
    rb: null,
    setLt: (lt: MyLatlng) => set({ lt: lt }),
    setRb: (rb: MyLatlng) => set({ rb: rb }),
    view_move: false,
    setViewMove: (move: boolean) => set({ view_move: move })
}))