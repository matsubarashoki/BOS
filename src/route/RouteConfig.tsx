import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Master from "../components/Master/Master";
import UserManagement from "../components/Master/UserManagement";
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
          path="/bos"
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
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
