import { create } from "zustand";
import { userType } from "../utils/type/type";

type userStoreState = {
  user: userType | null;
  setLoginUser: (loginUser: userType) => void;
};
// ストアの作成
const loginStore = create<userStoreState>()((set) => ({
  user: null,
  setLoginUser: (loginUser: userType) => set({ user: loginUser }),
}));

export default loginStore;
