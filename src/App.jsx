import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
