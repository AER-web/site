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
                    <p> Limit X-ray and cat scan exposure (<b>radiation</b>). Opt for MRI or ultrasound to reduce the radiation. </p>
                    </div>
            </div>

            <div className="otherpractices-item big-card">
                    <div className='row'>
                    <p> Massage <b>magnesium oil</b> into the body with distilled water using a water distiller. </p>
                    </div>

                    <div className='row-images-only'>
                        <img src={E1image} alt="E1" className="otherpractices-img" />
                        <img src={E2image} alt="E2" className="otherpractices-img" />
                    </div>
            </div>
            <div className="otherpractices-item big-card">
                    <div className='row'>
                    <p> <b>Magnesium oxide and sodium bicarbonate</b> in the bath or tub with hot water for relaxation and detoxification. </p>
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
