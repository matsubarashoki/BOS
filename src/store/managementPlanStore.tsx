import { create } from "zustand";
import { ManagementPlan } from "../utils/type/type";

type managementPlanState = {
  managementPlan: ManagementPlan;
  updateManagementPlan: (managementPlan: ManagementPlan) => void;
};

// ストアの作成
const useManagementPlanStore = create<managementPlanState>((set) => ({
  managementPlan: {
    term: null,
    managementPhilosophy: null,
    mission: null,
    guidingPrinciple: null,
    managementVision: null,
    strategy: null,
    circumstance: null,
    kpi: [
      {
        No: 0,
        target_qualitative_category: "",
        target_qualitative: "",
        target_quantitative_category: "",
        target_quantitative: "",
      },
    ],
    actionPlan: [
      {
        No: "",
        contents: "",
        period: "",
        remarks: "",
      },
    ],
  },

  updateManagementPlan: (managementPlan) => set({ managementPlan }),
}));

export default useManagementPlanStore;
