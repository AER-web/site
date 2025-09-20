import { Link } from 'react-router-dom';
import T10image from '../../assets/treatment/T10.HEIC';
import './Liquids.css';

export default function Liquids() {
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
            <h2>Liquids</h2>

            <div className="liquids-item big-card">
                <div className='row'>
                    <p> <b>Dimethyl Sulfoxide [DMSO]</b> (99.99%) may inhibit cancer growth. You should take this with distilled water. See website <a href="https://www.cancerdefeated.com/the-truth-about-dmso-and-cancer	">here</a> for more information. <b>Be careful with the dose as it is very potent.</b></p>
                    <img src={T10image} alt="T10" className="liquids-img" />
                </div>
            </div>

    </section>
        
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>

    );
}
