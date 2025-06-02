import DefaultLayout from "./layouts/defaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailMovie from "./pages/DetailMovie";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies/:id" element={<DetailMovie />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );

};

export default App;
