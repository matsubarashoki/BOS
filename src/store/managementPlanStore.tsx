import { create } from "zustand";
import { ManagementPlan } from "../utils/type/type";

type managementPlanState = {
  managementPlan: ManagementPlan;
  updateManagementPlan: (managementPlan: Partial<ManagementPlan>) => void;
};

// ストアの作成
const useManagementPlanStore = create<managementPlanState>((set) => ({
  managementPlan: {
    term: null,
    managementPhilosophy: null,
    mission: null,
    guidingPrinciple: null,
    managementVision: null,
    kpi: [
      {
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

  updateManagementPlan: (newManagementPlan) =>
    set((state) => ({ ...state, ...newManagementPlan })),
}));

export default useManagementPlanStore;
