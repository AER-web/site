import { Link } from 'react-router-dom';
import E1image from '../../assets/equipment/E1.HEIC';
import E15image from '../../assets/equipment/E15.HEIC';
import E16image from '../../assets/equipment/E16.HEIC';
import E2image from '../../assets/equipment/E2.HEIC';
import './OtherPractices.css';

export default function OtherPractices() {
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
            <h2>Other Practices</h2>

            <div className="otherpractices-item big-card">
                    <div className='row'>
                    <p> Limit your <b>radiation exposure</b>, including x-ray and CT scans if possible. Instead, opt for MRI
                        or ultrasounds instead, to reduce your risk of exposure. </p>
                    </div>
            </div>

            <div className="otherpractices-item big-card">
                    <div className='row'>
                    <p> Homemade <b>magnesium oil</b> can be made using pure magnesium oxide crystals (epsom salt), dissolved in distilled water. This can be stored in a spray bottle and massaged on the body improving muscle soreness, stress relief, and sleep quality. The images below show a water distiller.  </p>
                    </div>

                    <div className='row-images-only'>
                        <img src={E1image} alt="E1" className="otherpractices-img" />
                        <img src={E2image} alt="E2" className="otherpractices-img" />
                    </div>
            </div>
            <div className="otherpractices-item big-card">
                    <div className='row'>
                    <p>Mix <b>magnesium oxide and sodium bicarbonate</b> together, and sprinkle some in the bath, or a tub of hot water for relaxation and detoxification. See the image below of a tub for this use.</p>
                    </div>

                    <div className='row-images-only'>
                        <img src={E15image} alt="E15" className="otherpractices-img" />
                        <img src={E16image} alt="E16" className="otherpractices-img" />
                    </div>
            </div>


    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
