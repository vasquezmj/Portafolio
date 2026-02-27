import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Certificates from './pages/Certificates';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificados" element={<Certificates />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
