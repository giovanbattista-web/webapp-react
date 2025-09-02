import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import GlobalContext from "./context/globalContext";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/films/:id" element={<MoviePage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );

};

export default App;
