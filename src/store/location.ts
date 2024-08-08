import create from 'zustand'

export type MyLatlng = L.LatLng | null;

//state
export interface LocationStates {
    myLocation: MyLatlng
    setMyLocation: (location: MyLatlng) => void;
}

export const useLocationStore = create<LocationStates>((set) => ({
    myLocation: null,
    setMyLocation: (location: MyLatlng) => set({ myLocation: location }),
}))