import { Link } from 'react-router-dom';

export default function Powders() {
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
            <h2>Powders</h2>
            <p>Information about powders and their effect on cancer and tumour reduction/elimination.</p>
        </section>
        
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
