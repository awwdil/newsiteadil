import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Path to Home
import ValidationPage from './pages/ValidationPage'; // Path to ValidationPage
import ThanksPage from './pages/ThanksPage'; // Path to ThanksPage

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
