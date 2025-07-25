import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PyLingoPage from './pages/CodeCobraPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pylingo" element={<PyLingoPage />} />
      </Routes>
    </Router>
  );
}

export default App;