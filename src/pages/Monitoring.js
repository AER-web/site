import E21image from '../assets/equipment/E21.HEIC';
import E22image from '../assets/equipment/E22.HEIC';
import './Monitoring.css';

export default function Monitoring() {
    return (
    <>
        <header>
        <h1>In Loving Memory of A. E. R</h1>
        </header>

        <section id="monitoring">
        <h2>Monitoring</h2>

        <div className="monitoring-item">
            <h3>Step 1</h3>
            <p>Check blood/sugar levels regularly using a test kit.</p>
            <img src={E21image} alt="E21" className="monitoring-img" />
        </div>

        <div className="monitoring-item">
            <h3>Step 2</h3>
            <p>Check heart rate and pulse regularly using a monitoring kit.</p>
            <img src={E22image} alt="E22" className="monitoring-img" />
        </div>

        <div className="monitoring-item">
            <h3>Step 2</h3>
            <p>Check your body temperature with an electronic body temperature machine.</p>
        </div>
        </section>

        <footer>
        <p>© 2025 A S Crawford. All rights reserved.</p>
        </footer>
    </>
    );
}
