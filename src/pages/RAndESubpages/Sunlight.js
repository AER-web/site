import { Link } from 'react-router-dom';
import './Sunlight.css';

export default function Sunlight() {
    return (
    <>
    <header>
        <h1>In Loving Memory of A. E. R</h1>
    </header>

<div className="back-button-container">
        <Link to="/reductionandelimination" className="back-button">
            ⬅ To Overview Page
        </Link>
</div>

    <section>
            <h2>Sunlight</h2>
            <p>The natural sun is a powerful healer for cancer. When possible, expose the area that is affected by the cancer to the direct sunlight.</p>
    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
