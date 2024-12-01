import { create } from "zustand";

// Zustandのストアを作成
type headerHeightStoreState = {
  headerHeight: number;
  setHeaderHeight: (newHeaderHeight: number) => void;
};

export const headerHeightStore = create<headerHeightStoreState>()((set) => ({
  headerHeight: 0, // 初期値
  setHeaderHeight: (newHeaderHeight: number) =>
    set({ headerHeight: newHeaderHeight }),
}));
