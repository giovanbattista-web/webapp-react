import DefaultLayout from "./layouts/defaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/films/:id" element={<MoviePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );

};

export default App;
