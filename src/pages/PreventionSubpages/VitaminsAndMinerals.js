import { Link } from 'react-router-dom';

export default function VitaminsAndMinerals() {
    return (
    <>
    <header>
        <h1>In Loving Memory of A. E. R</h1>
    </header>

<div className="back-button-container">
        <Link to="/cancerprevention" className="back-button">
            ⬅ To Overview Page
        </Link>
</div>

    <section>
            <h2>Vitamins And Minerals</h2>
            <p>INSERT INFO HERE</p>
    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
