import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { store } from "./toolkit/store";
import { Theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  redirect,
} from "react-router-dom";
import One from "./components/Home/One";
import Two from "./components/Home/Two";
import Three from "./components/Three";
import Four from "./components/Four";
import Six from "./components/Six";
import Five from "./components/Five";
import Logins from "./components/Logins";



const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />

        <Router>
            <Routes>
              <Route path="/" element={<Logins />} />

              <Route path="/tracker" element={<Home />}>
                <Route path="" element={<One />} />
                <Route path="two" element={<Two />} />
                <Route path="three" element={<Three />} />
                <Route path="four" element={<Four />} />
                <Route path="five" element={<Five />} />
                <Route path="six" element={<Six />} />
              </Route>
            </Routes>
        </Router>
        {/* {isSignedIn && redirect("/tracker")} */}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
