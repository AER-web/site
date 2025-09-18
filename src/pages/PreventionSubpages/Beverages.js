import { Link } from 'react-router-dom';
import E1image from '../../assets/equipment/E1.HEIC';
import E2image from '../../assets/equipment/E2.HEIC';
import T30image from '../../assets/treatment/T30.HEIC';
import './Beverages.css';

export default function Beverages() {
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
            <h2>Beverages</h2>
            
            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Green tea  -</b> This type of tea contains bioactive compounds, notably polyphenols. These plant-based compounds are known for their antioxidant properties; Green tea compounds, particularly EGCG, may influence cancer development and progression through several biological mechanisms. One primary mechanism involves their antioxidant activity, helping neutralize free radicals that can cause cellular damage, including DNA mutations. </p>
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Bush tea  -</b> Sowa sap leaves, moringa, spirit weed, guinean and vervain boiled for 30 minutes and left for 12 hours then refrigerate and drink daily. </p>
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Distilled water using a water distiller -</b> not bottled water neither tap water. To the distilled water add Celtic Grey Sea salt to add back the vitamins and minerals taken out during the distilling process. Or you can add potassium, magnesium and zinc to the distilled water. </p>
                    </div>

                    <div className='row-images-only'>
                        <img src={E1image} alt="E1" className="beverages-img" />
                        <img src={E2image} alt="E2" className="beverages-img" />
                        <img src={T30image} alt="T30" className="beverages-img" />
                    </div>
            </div>

    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
