import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/create" element={<FormPage />} />
      </Routes>
    </>
  )
}

export default App
