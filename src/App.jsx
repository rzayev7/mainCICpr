import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Impersonation from "./scenes/impersonation";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider, createTheme, styled } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import React from 'react';
import { Container, TextField, Button, Typography } from "@mui/material";
import Typosquatting from "./scenes/typosquatting";
import Leaks from "./scenes/leaks";

const ContainerStyled = styled(Container)({
  marginTop: theme => theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FormStyled = styled('form')({
  width: "100%",
  marginTop: theme => theme.spacing(1),
});

const SubmitButtonStyled = styled(Button)({
  margin: theme => theme.spacing(3, 0, 2),
});



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <div className="app">
            <>
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/impersonation" element={<Impersonation/>} />
                  <Route path="/leaks" element={<Leaks/>} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/typosquatting" element={<Typosquatting/>} />
                </Routes>
              </main>
            </>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
