import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar"; 
import Video from "./components/Video"; 

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif' 
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Video />
    </ThemeProvider>
  );
}

export default App;
