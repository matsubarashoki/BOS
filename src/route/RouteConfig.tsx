import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Master from "../components/Master/Master";
import OrgManagement from "../components/Master/OrgManagement/OrgManagement";
import UserManagement from "../components/Master/UserManagement/UserManagement";
import BookReport from "../components/Report/BookReport";

import Board from "../components/Board/Board";
import BoardList from "../components/Board/BoardList";
import Calendar from "../components/Calender/Calendar";
import ManagementPlanAnalyze from "../components/ManagementPlan/ManagementPlanAnalyze";
import ManagementPlanAssessment from "../components/ManagementPlan/ManagementPlanAssessment";
import ManagementPlanCreate from "../components/ManagementPlan/ManagementPlanCreate";
import ManagementPlanHistory from "../components/ManagementPlan/ManagementPlanHistory";
import ManagementPlanTop from "../components/ManagementPlan/ManagementPlanTop";
import DairyReport from "../components/Report/DairyReport";
import Report from "../components/Report/Report";
import ReportList from "../components/Report/ReportList";
import UserSettings from "../components/UserSettings/UserSettings";
import WikiTop from "../components/Wiki/WikiTop";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import LoginPage from "../pages/Login/LoginPage";
import { NotFound } from "../pages/NotFound";
import ProtectedRoute from "./protectedRoute";
import { useAuth } from "./routeAuthHooks";

export const RouterConfig = () => {
  const { user } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute isLogin={!!user}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="master">
            <Route index={true} element={<Master />} />
            <Route path="userManagement" element={<UserManagement />} />
            <Route path="orgManagement" element={<OrgManagement />} />
          </Route>
          <Route path="report">
            <Route index={true} element={<Report />} />
            <Route path="dairyReport" element={<DairyReport />} />
            <Route path="bookReport" element={<BookReport />} />
          </Route>

          <Route path="reportList">
            <Route index={true} element={<ReportList />} />
          </Route>

          <Route path="wiki">
            <Route index={true} element={<WikiTop />} />
          </Route>

          <Route path="userSettings">
            <Route index={true} element={<UserSettings />} />
          </Route>

          <Route path="managementPlan">
            <Route index={true} element={<ManagementPlanTop />} />
            <Route path="create" element={<ManagementPlanCreate />} />
            <Route path="analyze" element={<ManagementPlanAnalyze />} />
            <Route path="assessment" element={<ManagementPlanAssessment />} />
            <Route path="history" element={<ManagementPlanHistory />} />
          </Route>

          <Route path="calender">
            <Route index={true} element={<Calendar />} />
          </Route>

          <Route path="board">
            <Route index={true} element={<BoardList />} />
            <Route path=":id" element={<Board />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
