import DefaultLayout from "./layouts/defaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<h1>Homepage</h1>}></Route>
          <Route path="/movies/:id" element={<h1>Dettaglio pagina</h1>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );

};

export default App;
