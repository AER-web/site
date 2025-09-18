import { Link } from 'react-router-dom';
import T4image from '../../assets/treatment/T4.HEIC';
import T5image from '../../assets/treatment/T5.HEIC';
import './VitaminsAndMinerals.css';

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
            
            <div className="vitandmins-item big-card">
                <div className='row'>
                    <p> Vitamin D3, 5,000, 10,000 or 20,000 and K2 200ug. D3 has the benefit of  may reduce metastatic cancer and cancer mortality, taken with K2 that provides an anti tumour agent.</p>
                </div>

                <div className='row-images-only'>
                    <img src={T4image} alt="T4" className="vitandmins-img" />
                    <img src={T5image} alt="T5" className="vitandmins-img" />
                </div>
            </div>


    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
