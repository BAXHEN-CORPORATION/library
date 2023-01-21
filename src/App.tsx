import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "@baxhen/theme";
import Typing from "@baxhen/typing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        I' am a{" "}
        <Typing texts={["Youtuber", "Designer", "Programmer"]} speed={200} />
      </div>
    </ThemeProvider>
  );
}

export default App;
