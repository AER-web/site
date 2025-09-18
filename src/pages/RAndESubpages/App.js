import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CancerPrevention from './pages/CancerPrevention';
import Home from './pages/Home';
import Monitoring from './pages/Monitoring';
import OtherRemedies from './pages/OtherRemedies';
import PainRelief from './pages/PainRelief';
import Beverages from './pages/PreventionSubpages/Beverages';
import Lifestyle from './pages/PreventionSubpages/Lifestyle';
import OtherPractices from './pages/PreventionSubpages/OtherPractices';
import Supplements from './pages/PreventionSubpages/Supplements';
import VitaminsAndMinerals from './pages/PreventionSubpages/VitaminsAndMinerals';
import HMTechniques from './pages/RAndESubpages/HMTechiques';
import HMTreatments from './pages/RAndESubpages/HMTreatments';
import Liquids from './pages/RAndESubpages/Liquids';
import Powders from './pages/RAndESubpages/Powders';
import Sunlight from './pages/RAndESubpages/Sunlight';
import ReductionAndElimination from './pages/ReductionAndElimination';
import Story from './pages/Story';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
        <h2>This is a Private Page</h2>
        <p>Please Enter The Password:</p>
        <form onSubmit={handleLogin}>
          <input type="password" name="password" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <Router>
      <nav>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Story</Link></li>

          <li
            className={`dropdown ${dropdownOpen ? 'open' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Cancer Prevention ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/cancerprevention">Overview</Link></li>
              <li><Link to="/vitaminsandminerals">Vitamins And Minerals</Link></li>
              <li><Link to="/lifestyle">Lifestyle</Link></li>
              <li><Link to="/supplements">Supplements</Link></li>
              <li><Link to="/beverages">Beverages</Link></li>
              <li><Link to="/otherpractices">Other Practices</Link></li>
            </ul>
          </li>

          <li
            className={`dropdown ${dropdownOpen ? 'open' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Cancer & Tumour Reduction/Elimination ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/reductionandelimination">Overview</Link></li>
              <li><Link to="/sunlight">Sunlight</Link></li>
              <li><Link to="/powders">Powders</Link></li>
              <li><Link to="/liquids">Liquids</Link></li>
              <li><Link to="/hmtreatments">Home-made Treatments</Link></li>
              <li><Link to="/hmtechniques">Home-made Techniques</Link></li>
            </ul>
          </li>

          <li><Link to="/painrelief">Pain Relief</Link></li>
          <li><Link to="/monitoring">Monitoring</Link></li>
          <li><Link to="/otherremedies">Remedies For Other Ailments</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Story />} />

        <Route path="/cancerprevention" element={<CancerPrevention />} />
        <Route path="/vitaminsandminerals" element={<VitaminsAndMinerals />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/otherpractices" element={<OtherPractices />} />

        <Route path="/reductionandelimination" element={<ReductionAndElimination />} />
        <Route path="/sunlight" element={<Sunlight />} />
        <Route path="/powders" element={<Powders />} />
        <Route path="/liquids" element={<Liquids />} />
        <Route path="/hmtreatments" element={<HMTreatments />} />
        <Route path="/hmtechniques" element={<HMTechniques />} />

        <Route path="/painrelief" element={<PainRelief />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/otherremedies" element={<OtherRemedies />} />
      </Routes>
    </Router>
  );
}

export default App;
