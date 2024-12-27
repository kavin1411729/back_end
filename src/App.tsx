import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ChartComponent from "./pages/Chart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/chart" element={<ChartComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
