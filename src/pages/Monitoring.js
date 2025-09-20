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
            <p>Check your blood/sugar levels regularly using a <b>blood sugar test kit</b> like the one shown in the image below.</p>
            <img src={E21image} alt="E21" className="monitoring-img" />
        </div>

        <div className="monitoring-item">
            <p>Check your heart rate and pulse regularly using a <b>blood monitoring kit</b> like the one shown in the image below.</p>
            <img src={E22image} alt="E22" className="monitoring-img" />
        </div>

        <div className="monitoring-item">
            <p>Check your body temperature with an <b>electronic body temperature machine</b>.</p>
        </div>
        </section>

        <footer>
        <p>© 2025 All rights reserved.</p>
        </footer>
    </>
    );
}
