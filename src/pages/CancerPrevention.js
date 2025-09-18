import { Link } from 'react-router-dom';
import './CancerPrevention.css';

export default function CancerPrevention() {
    return (
    <>
        <header>
        <h1>In Loving Memory of A. E. R</h1>
        </header>

<section id="cancerprevention">
        <h2>Cancer Prevention</h2>

        <br></br>

        <Link to="/vitandmins" className="cancerprevention-item">
            <h3>Vitamins And Minerals</h3>
        </Link>

        <Link to="/lifestyle" className="cancerprevention-item">
            <h3>Lifestyle</h3>
        </Link>

        <Link to="/supplements" className="cancerprevention-item">
            <h3>Supplements</h3>
        </Link>

        <Link to="/beverages" className="cancerprevention-item">
            <h3>Beverages</h3>
        </Link>

        <Link to="/otherpractices" className="cancerprevention-item">
            <h3>Other Practices</h3>
        </Link>
</section>

<footer>
        <p>© 2025 All rights reserved.</p>
</footer>
    </>
);
}