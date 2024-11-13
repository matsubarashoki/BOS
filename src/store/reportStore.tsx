import { create } from "zustand";
import { ReportFormSchema } from "../utils/zodSchema/reportForm";

type ReportStoreState = {
  reports: ReportFormSchema[];
  addReport: (report: ReportFormSchema) => void;
  updateReport: (id: string, updatedReport: Partial<ReportFormSchema>) => void;
  removeReport: (id: string) => void;
};

// ストアの作成
const useReportStore = create<ReportStoreState>((set) => ({
  reports: [],

  addReport: (report) =>
    set((state) => ({
      reports: [...state.reports, report],
    })),

  updateReport: (id, updatedReport) =>
    set((state) => ({
      reports: state.reports.map((report) =>
        report.reportId === id ? { ...report, ...updatedReport } : report
      ),
    })),

  removeReport: (id) =>
    set((state) => ({
      reports: state.reports.filter((report) => report.reportId !== id),
    })),
}));

export default useReportStore;
