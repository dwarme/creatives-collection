import "./styles/theme.css";
import "./styles/main.css";
import AppContext from "./context/app-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import SuspenseFallbackPages from "./components/FallbaksSuspense/FallbackSuspensePages";

const Pages = {
  About: React.lazy(
    () => import(/* webpackChunkName: "account" */ "./pages/AboutPage")
  ),
  Posts: React.lazy(
    () => import(/* webpackChunkName: "posts" */ "./pages/PostsPage")
  ),
};

function App() {
  return (
    <React.StrictMode>
      <AppContext.Provider value={{ userLogged: true, currentPage: "posts" }}>
        <BrowserRouter>
          <Suspense fallback={<SuspenseFallbackPages />}>
            <Routes>
              <Route path="/" element={<Pages.Posts />} />
              <Route path="/account" element={<Pages.About />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppContext.Provider>
    </React.StrictMode>
  );
}

export default App;
