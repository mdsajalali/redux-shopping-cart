import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
