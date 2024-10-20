import { ReactNode } from "react";

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
  // if (!isLogin) {
  //   return <Navigate to={redirectPath} replace />;
  // }

  return <>{children}</>;
};

export default ProtectedRoute;
