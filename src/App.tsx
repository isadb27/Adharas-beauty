import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
