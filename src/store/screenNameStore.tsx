import { create } from "zustand";

// Zustandのストアを作成
type useScreenNameStoreState = {
  screenName: string;
  setScreenName: (newScreenName: string) => void;
};

export const useScreenNameStore = create<useScreenNameStoreState>()((set) => ({
  screenName: "", // 初期値
  setScreenName: (newScreenName: string) => set({ screenName: newScreenName }),
}));
