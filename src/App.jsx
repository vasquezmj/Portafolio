import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Certificates from './pages/Certificates';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <div id="main-content" className="main-content">
          <div className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certificados" element={<Certificates />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
