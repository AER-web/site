import { Link } from 'react-router-dom';
import './ReductionAndElimination.css';

export default function ReductionAndElimination() {
    return (
    <>
        <header>
        <h1>In Loving Memory of A. E. R</h1>
        </header>

<section id="reductionandelimination">
        <h2>Cancer & Tumour Reduction/Elimination</h2>
        
        <br></br>

        <Link to="/sunlight" className="reductionandelimination-item">
            <h3>Sunlight</h3>
        </Link>

        <Link to="/powders" className="reductionandelimination-item">
            <h3>Powders</h3>
        </Link>

        <Link to="/liquids" className="reductionandelimination-item">
            <h3>Liquids</h3>
        </Link>

        <Link to="/hmtreatments" className="reductionandelimination-item">
            <h3>Home-made Treatments</h3>
        </Link>

        <Link to="/techniques" className="reductionandelimination-item">
            <h3>Techniques</h3>
        </Link>
</section>

<footer>
        <p>© 2025 All rights reserved.</p>
</footer>
    </>
);
}