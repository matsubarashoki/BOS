import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./route/routeAuthHooks";
import { RouterConfig } from "./route/RouteConfig";
import { colorTheme } from "./theme/colorTheme";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <CssBaseline />
        <ThemeProvider theme={colorTheme}>
          <RouterConfig />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
