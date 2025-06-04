import DefaultLayout from "./layouts/defaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/films/:id" element={<DetailPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );

};

export default App;
