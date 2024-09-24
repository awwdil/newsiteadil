import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Ensure the correct path
import ValidationPage from './ValidationPage'; // Ensure the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validation" element={<ValidationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
