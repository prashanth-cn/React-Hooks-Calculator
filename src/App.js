import React from "react";
import "./App.css";
import Calculator from "./Calculator";
import Zoom from "@material-ui/core/Zoom";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      TransitionComponent={Zoom}
    >
      <Calculator />
    </SnackbarProvider>
  );
}

export default App;
