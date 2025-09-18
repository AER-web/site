import { Link } from 'react-router-dom';
import T1image from '../../assets/treatment/T1.HEIC';
import T11image from '../../assets/treatment/T11.HEIC';
import T12image from '../../assets/treatment/T12.HEIC';
//import T13image from '../../assets/treatment/T13.HEIC';
import T14image from '../../assets/treatment/T14.HEIC';
import T15image from '../../assets/treatment/T15.HEIC';
import T16image from '../../assets/treatment/T16.HEIC';
import T17image from '../../assets/treatment/T17.HEIC';
import T19image from '../../assets/treatment/T19.HEIC';
import T2image from '../../assets/treatment/T2.HEIC';
import T26image from '../../assets/treatment/T26.HEIC';
import T7image from '../../assets/treatment/T7.HEIC';
import './HMTreatments.css';

export default function HMTreatments() {
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
            <h2>Home Made Treatments</h2>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> <b>Lugois Iodine</b> 15% strength dropped and massaged onto the affected area; massage over the back and front of your body [affected area] with another persons help.</p>
                        <img src={T1image} alt="T1" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> <b>Blackseed oil</b> massaged over the back and front of your body [affected area] with another persons help.</p>
                        <img src={T7image} alt="T7" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> <b>Himalayan bitter apricot kernal oil</b> massaged over the back and front of your body [affected area] with another persons help.</p>
                        <img src={T2image} alt="T2" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> <b>Ravintsara oil - </b> the main benefit of Ravintsara essential oil is its high content of 1,8-cineole, also known as eucalyptol. This compound
                            has been shown to have powerful antiviral, antibacterial, and anti-inflammatory properties with its ability to fight off viruses and bacteria; It has a 
                            powerful effect on the respiratory system, making it a great choice for those suffering from respiratory conditions such as coughs, colds, and asthma; great 
                            tool to support the immune system. It can help to strengthen the body’s defences against viruses and bacteria, which is especially important during times of 
                            illness It can help to reduce stress and anxiety, improve mood, and enhance mental clarity. <b>Use 2x drops of this.</b></p>
                        <img src={T11image} alt="T11" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p> <b>Niaouli oil - </b> Boosts the immune system health; antibacterial, pain relief, wound healing; respiratory health. <b>Use 2x drops of this.</b></p>
                        <img src={T12image} alt="T12" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p> <b>Elemi oil - </b>Has antibacterial and anti-fungal properties; pain relief; the respiratory system; helps the digestive system; immune system health and skin health.<b>Use 2x drops of this.</b> [see photo T13]</p>
                    </div>

                    <div className='row'>
                        <p> <b>Bitter apricot oil</b>  Use x 3 drops of this.</p>
                        <img src={T2image} alt="T2" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p> <b>Milk thistle oil</b> has antioxidant and anti-inflammatory properties; liver health cleansing; improve diabetes; lowers cholesterol levels and is therefore good for the heart. <b>Use 4x drops of this.</b></p>
                        <img src={T14image} alt="T14" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p>Mix all above ingredients in a glass jar or pipette bottle. Massage over the back and front of your body [affected area] with another persons help.</p>
                    </div>

                    <div className='row-images-only'>
                        <img src={T15image} alt="T15" className="hmtreatments-img" />
                        <img src={T16image} alt="T16" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> <b>Raw organic Coconut oil </b> mixed with <b>Monmorillonite Nutri 100% pure naturally dried clay</b> and <b>Lugols Iodine, 15%</b>.</p>
                    </div>

                    <div className='row-images-only'>
                        <img src={T1image} alt="T1" className="hmtreatments-img" />
                        <img src={T17image} alt="T17" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> <b>Dimethyl Sulfoxide [DMSO] 99.99%</b>  in a spray bottle. Spray over the affected area, but it must be diluted with distilled water as it is very potent.	</p>
                        <img src={T19image} alt="T19" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> <b>Milk Thistle oil, Black seed oil and Bitter apricot oil</b> massaged mixed together onto the affected area massage over the back and front of the body [affected area] with another person help.</p>
                    </div>

                    <div className='row-images-only'>
                        <img src={T14image} alt="T14" className="hmtreatments-img" />
                        <img src={T7image} alt="T7" className="hmtreatments-img" />
                        <img src={T2image} alt="T2" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p>Use <b>castor oil</b> to reduce inflammation, cancer and shrink tumours. Massage this over the affected area.
                        <b> Castor oil benefits - </b>It contains ricinoleic acid, which has shown promising anti-cancer properties; 
                        it can shrink tumours; boosts the immune system; helps the lymphatic stay healthy; anti-fungal and anti-inflammatory properties; 
                        helps wound healing;  </p>
                        <img src={T26image} alt="T26" className="hmtreatments-img" />
                    </div>
            </div>

    </section>
        
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>


    );
}
