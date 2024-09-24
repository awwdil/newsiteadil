import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Ensure correct path for Home component
import ValidationPage from './pages/ValidationPage';  // Ensure correct path for ValidationPage component
import ThanksPage from './pages/ThanksPage';  // Ensure correct path for ThanksPage component

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
