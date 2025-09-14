import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CancerPrevention from './pages/CancerPrevention';
import Home from './pages/Home';
import Monitoring from './pages/Monitoring';
import OtherRemedies from './pages/OtherRemedies';
import PainRelief from './pages/PainRelief';
import ReductionAndElimination from './pages/ReductionAndElimination';
import Story from './pages/Story';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'letmein';

  const handleLogin = (e) => {
    e.preventDefault();
    const input = e.target.elements.password.value;
    if (input === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>This is a Private Page <h2>
        </h2>Please Enter The Password:</h2>
        <form onSubmit={handleLogin}>
          <input type="password" name="password" />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px' }}>Story</Link>
        <Link to="/cancerprevention" style={{ margin: '0 10px' }}>Cancer Prevention</Link>
        <Link to="/reductionandelimination" style={{ margin: '0 10px' }}>Cancer & Tumour Reduction/Elimination</Link>
        <Link to="/painrelief" style={{ margin: '0 10px' }}>Pain Relief</Link>
        <Link to="/monitoring" style={{ margin: '0 10px' }}>Monitoring</Link>
        <Link to="/otherremedies" style={{ margin: '0 10px' }}>Remedies For Other Ailments</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Story />} />
        <Route path="/cancerprevention" element={<CancerPrevention />} />
        <Route path="/reductionandelimination" element={<ReductionAndElimination />} />
        <Route path="/painrelief" element={<PainRelief />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/otherremedies" element={<OtherRemedies />} />
      </Routes>
    </Router>
  );
}

export default App;
