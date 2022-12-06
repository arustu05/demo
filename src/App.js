import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/pages/Navbar';
import RegForm from './components/pages/Form';
import Home from './components/pages/Home'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/navbar" element={<RegForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
