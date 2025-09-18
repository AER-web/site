import { Link } from 'react-router-dom';
import T4image from '../../assets/treatment/T4.HEIC';
import T5image from '../../assets/treatment/T5.HEIC';
import T6image from '../../assets/treatment/T6.HEIC';
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
                    <p> Take <b>vitamin D3</b>, in doses of <b>5,000IU, 10,000IU or 20,000IU</b> at your own discretion. Pair this with <b>vitamin K2 (200ug)</b> for maximum absorption and to allow the body to break down the D3. D3 may reduce metastatic cancer and cancer mortality. When taken with K2, it provides an anti tumour agent, with the ability to inhibit the growth of various cancer cells. </p>
                </div>

                <div className='row-images-only'>
                    <img src={T4image} alt="T4" className="vitandmins-img" />
                    <img src={T5image} alt="T5" className="vitandmins-img" />
                </div>
            </div>

            <div className="vitandmins-item big-card">
                <div className='row'>
                    <p>Take <b>magnesium glycinate</b> with vitamins D3 and K2. The magnesium is most effective when taken at night. This can lower high blood pressure, reduce the risk of heart disease, and help with bone growth and maintenance. Magnesium is also needed to repair damaged cells and ensure enough antioxidants are in the body.</p>
                    <img src={T6image} alt="T6" className="vitandmins-img" />
                </div>
            </div>

            <div className="vitandmins-item big-card">
                <div className='row'>
                    <p>Take <b>folate</b>, also known as <b>vitamin B9</b>. B9 plays a crucial role in cell growth and function. Insufficient levels of folate have been linked to an increased risk of breast and ovarian cancer.</p>
                </div>
            </div>


    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
