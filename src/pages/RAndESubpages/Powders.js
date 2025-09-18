import { Link } from 'react-router-dom';
import E10image from '../../assets/equipment/E10.HEIC';
import E10aimage from '../../assets/equipment/E10a.HEIC';
import E9image from '../../assets/equipment/E9.HEIC';
import T23image from '../../assets/treatment/T23.HEIC';
import T8image from '../../assets/treatment/T8.HEIC';
import T9image from '../../assets/treatment/T9.HEIC';
import './Powders.css';

export default function Powders() {
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
            <h2>Powders</h2>

            <div className="powders-item big-card">
                        <div className='row'>
                            <p><b>Fenbendazole powder</b> {'>'} 99% purity; taken in a vegetarian capsule with a capsule machine.</p>
                        <img src={T8image} alt="T8" className="powders-img" />
                        </div>

                        <div className='row images-only'>
                        <img src={E10image} alt="E10" className="powders-img" />
                        <img src={E10aimage} alt="E10a" className="powders-img" />
                        <img src={T23image} alt="T23" className="powders-img" />
                        </div>

                        <div className='row'>
                            <p> <b>CAUTION:</b> The amount to take depends upon your body mass. Visit the website <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12215191/">here</a> for more information on dosages and the powder.</p>
                        <img src={E9image} alt="E9" className="powders-img" />
                        </div>
            </div>

            <div className="powders-item big-card">
                        <div className='row'>
                            <p><b>Methylsulfonylmethane [MSM] </b> taken in a vegetarian capsule with a capsule machine.</p>
                        <img src={T9image} alt="T9" className="powders-img" />
                        </div>

                        <div className='row images-only'>
                        <img src={E10image} alt="E10" className="powders-img" />
                        <img src={E10aimage} alt="E10a" className="powders-img" />
                        <img src={T23image} alt="T23" className="powders-img" />
                        </div>

                        <div className='row'>
                            <p> <b>CAUTION:</b> The amount to take depends upon your body mass. Visit the website <a href="https://www.cancertutor.com/msm/">here</a> for more information on dosages and the powder.</p>
                        <img src={E9image} alt="E9" className="powders-img" />
                        </div>
            </div>

            

    </section>
        
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
