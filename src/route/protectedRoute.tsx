import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  isLogin: boolean;
  redirectPath?: string;
}

// ログインしてなければリダイレクトさせるためのコンポーネント
const ProtectedRoute = ({
  children,
  isLogin,
  redirectPath = "/login",
}: ProtectedRouteProps) => {
  if (!isLogin) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
