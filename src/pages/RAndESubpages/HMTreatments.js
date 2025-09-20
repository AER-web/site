import { Link } from 'react-router-dom';
import T1image from '../../assets/treatment/T1.HEIC';
import T11image from '../../assets/treatment/T11.HEIC';
import T12image from '../../assets/treatment/T12.HEIC';
import T13image from '../../assets/treatment/T13.png';
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
                        <p> Use a few drops of <b>Lugois Iodine</b> (15% strength) and massage this onto the affected area. Do this with another person’s help if necessary.</p>
                        <img src={T1image} alt="T1" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p>Use a few drops of <b>Black Seed oil</b> and massage this onto the affected area. Do this with another person’s help if necessary. </p>
                        <img src={T7image} alt="T7" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> Use a few drops of <b>Himalayan Bitter Apricot Kernel oil</b> and massage this onto the affected area. Do this with another
                        person’s help if necessary.</p>
                        <img src={T2image} alt="T2" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p>Mix 2x drops of <b>Ravintsara oil</b>, 2x drops of <b>Niaouli oil</b>, 2x drops of <b>Elemi oil</b>, 3x drops of <b>Himalayan Bitter Apricot oil</b> and
                        4x drops of <b>Milk Thistle oil</b> in a glass jar or glass pipette bottle. Massage this onto the affected area with another
                        person’s help if necessary. Benefits of each ingredient alongside pictures are shown below.</p>
                    </div>

                    <div className='row images-only'>
                        <img src={T15image} alt="T15" className="hmtreatments-img" />
                        <img src={T16image} alt="T16" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p> The main benefit of <b>Ravintsara essential oil</b> is its high content of 1,8-cineole, also known as eucalyptol. This compound has been shown to have powerful
                        antiviral, antibacterial, and anti-inflammatory properties with its ability to fight off viruses and bacteria. It has a powerful effect on the respiratory system,
                        making it a great choice for those suffering from respiratory conditions such as coughs, colds, and asthma - a great tool for the immune system. It can help to
                        strengthen the body’s defences against viruses and bacteria, which is essential during times of illness. Other uses of Ravintsara can be to combat stress and
                        anxiety, to improve ones mood and enhance mental clarity.</p>
                        <img src={T11image} alt="T11" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p> <b>Niaouli oil</b> can help boost the immune system and improve respiratory health. It also provides antibacterial properties, can aid with
                        pain relief and wound healing.</p>
                        <img src={T12image} alt="T12" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p> <b>Elemi oil</b> has antibacterial and anti-fungal properties. It is a good form of pain relief and helps the digestive system. As well as this, it can support the immune system, respiratory system, and skin health.</p>
                        <img src={T13image} alt="T13" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p> <b>Himalayan Bitter Apricot Kernel oil</b> is rich in essential fatty acids, vitamins (E & A), and antioxidants. It also has anti-inflammatory properties and promotes skin hydration.</p>
                        <img src={T2image} alt="T2" className="hmtreatments-img" />
                    </div>

                    <div className='row'>
                        <p> <b>Milk Thistle oil</b> has antioxidant and anti-inflammatory properties. It helps with liver health cleansing, improving diabetes, lowering cholesterol levels and is therefore good for the heart.</p>
                        <img src={T14image} alt="T14" className="hmtreatments-img" />
                    </div>

                    
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> Mix <b>Raw Organic Coconut oil </b>, <b>Monmorillonite Nutri 100% Pure Naturally Dried Clay</b> and <b>Lugols Iodine</b> (15% strength) together until it forms a paste. Apply this to affected areas when necessary.</p>
                    </div>

                    <div className='row images-only'>
                        <img src={T1image} alt="T1" className="hmtreatments-img" />
                        <img src={T17image} alt="T17" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> <b>Dimethyl Sulfoxide [DMSO]</b> (99.99%) may inhibit cancer growth. Use this in a glass spray bottle with distilled water and spray over the affected area. This must be diluted with distilled water as it is very potent.</p>
                        <img src={T19image} alt="T19" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p> Mix <b>Milk Thistle oil, Black Seed oil</b> and <b>Himalayan Bitter Apricot Kernel oil</b>   together and massage this onto the affected area with another person’s help if necessary.</p>
                    </div>

                    <div className='row images-only'>
                        <img src={T14image} alt="T14" className="hmtreatments-img" />
                        <img src={T7image} alt="T7" className="hmtreatments-img" />
                        <img src={T2image} alt="T2" className="hmtreatments-img" />
                    </div>
            </div>

            <div className="hmtreatments-item big-card">
                    <div className='row'>
                        <p>Use <b>Castor oil</b> to reduce inflammation, cancer and shrink tumours. Massage this over the affected area with another person’s help if necessary. Castor oil contains ricinoleic 
                        acid, which has shown to be a promising anti-cancer property. It can shrink tumours, boost the immune system and help the lymphatic system to stay healthy. The oil also contains 
                        anti-fungal and anti-inflammatory properties, and helps with healing wounds.</p>
                        <img src={T26image} alt="T26" className="hmtreatments-img" />
                    </div>
            </div>

    </section>
        
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>


    );
}
