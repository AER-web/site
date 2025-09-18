import { Link } from 'react-router-dom';
import E11image from '../../assets/equipment/E11.HEIC';
import E12image from '../../assets/equipment/E12.HEIC';
import E13image from '../../assets/equipment/E13.HEIC';
import E14image from '../../assets/equipment/E14.HEIC';
import E18image from '../../assets/equipment/E18.HEIC';
import T18image from '../../assets/treatment/T18.HEIC';
import T27image from '../../assets/treatment/T27.HEIC';
import './Techniques.css';

export default function Techniques() {
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
            <h2>Techniques</h2>

            <div className="techniques-item big-card">
                    <div className='row'>
                        <p> <b>Lymphatic drainage massage</b>; study the lymphatic gland locations and massage these areas and another person can massage these areas better with their hands and oil treatments.</p>
                        <img src={T18image} alt="T18" className="techniques-img" />
                    </div>
            </div>

            <div className="techniques-item big-card">
                    <div className='row'>
                        <p> Lymphatic massage with a <b>specialist machine</b>, around 10 to 20 minutes day. </p>
                        <img src={E11image} alt="E11" className="techniques-img" />
                    </div>
            </div>

            <div className="techniques-item big-card">
                    <div className='row'>
                        <p> Massage the body with a <b>massage gun</b> and hands to improve circulation and eliminate inflammation. You can use some of the oil treatments in the <b>'Home-made Treatments'</b> section first and then use the massage gun afterwards. </p>
                        
                    </div>

                    <div className='row-images-only'>
                        <img src={E12image} alt="E12" className="techniques-img" />
                        <img src={E13image} alt="E13" className="techniques-img" />
                    </div>
            </div>

            <div className="techniques-item big-card">
                    <div className='row'>
                        <p> <b>Steam treatment</b> over the body and affected area using a steamer in an enclosed space. </p>
                        <img src={E14image} alt="E14" className="techniques-img" />
                    </div>
            </div>

            <div className="techniques-item big-card">
                    <div className='row'>
                        <p> Use a <b>back massage machine</b>. You can use some of the oil treatments in the <b>'Home-made Treatments'</b> section first and then use the back massage machine afterwards. </p>
                        <img src={E18image} alt="E18" className="techniques-img" />
                    </div>
            </div>

            <div className="techniques-item big-card">
                    <div className='row'>
                        <p> To maintain movement of the lymphatic gland during the day, apply <b>Kinesiology tape</b>. </p>
                        <img src={T27image} alt="T27" className="techniques-img" />
                    </div>
            </div>

    </section>
        
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>


    );
}
