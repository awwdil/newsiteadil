import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Updated path for Home
import ValidationPage from './pages/ValidationPage'; // Updated path for ValidationPage
import ThanksPage from './pages/ThanksPage'; // Updated path for ThanksPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validation" element={<ValidationPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
