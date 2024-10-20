import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
