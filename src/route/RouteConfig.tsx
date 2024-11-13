import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Master from "../components/Master/Master";
import OrgManagement from "../components/Master/OrgManagement/OrgManagement";
import UserManagement from "../components/Master/UserManagement/UserManagement";
import BookReport from "../components/Report/BookReport";
import BookReportList from "../components/Report/BookReportList";
import DairyReport from "../components/Report/DairyReport";
import Report from "../components/Report/Report";
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
            <Route index={true} element={<Report />} />
            <Route path="bookReport" element={<BookReportList />} />
          </Route>

          <Route path="wiki">
            <Route index={true} element={<WikiTop />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
