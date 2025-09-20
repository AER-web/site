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
                    <p> <b>Green tea</b> contains bioactive compounds, notably polyphenols. These plant-based compounds are known for their
                    antioxidant properties. Green tea compounds, particularly epigallocatechin gallate (EGCG), may influence cancer development
                    and progression through several biological mechanisms. One primary mechanism involves their antioxidant activity, helping
                    neutralise free radicals that can cause cellular damage, including DNA mutations. </p>
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Bush tea</b> is a combination of 7 different plants and water, preferably distilled. These plants
                    are <b>soursop leaves, moringa, spirit weed, guinean, bissy, sarsaparilla and vervain.</b> These should be boiled in a pot of water
                    for 30 minutes and left overnight to cool. Then transfer to a glass and refrigerate. Drink this daily for 2-3 months, taking
                    1-2 month breaks at a time.  </p>
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> Regularly consume <b>distilled water using a water distiller</b> not bottled water neither tap water, as these contain unwanted chemicals.
                    Add a pinch of <b>celtic grey sea salt</b> to the distilled water to add back the vitamins and minerals taken out during the distilling
                    process. This type of salt serves as a natural electrolyte, containing up to 82 minerals. Alternatively, you can add potassium powder,
                    magnesium powder and zinc to the distilled water. </p>
                    </div>

                    <div className='row images-only'>
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
