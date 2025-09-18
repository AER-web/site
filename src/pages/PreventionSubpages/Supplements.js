import { Link } from 'react-router-dom';
import T1image from '../../assets/treatment/T1.HEIC';
import T2image from '../../assets/treatment/T2.HEIC';
import T3image from '../../assets/treatment/T3.HEIC';
import T7image from '../../assets/treatment/T7.HEIC';
import './Supplements.css';

export default function Supplements() {
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
            <h2>Supplements</h2>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Lugols Iodine, 15%</b>. This has many benefits such as may aid in cancer prevention; kills bacteria, viruses & fungi; boost thyroid function; detoxifies fluoride, bromide & chlorine; strengthens the immune system; natural antihistamine; supports brain health; promotes hair, skin & nail growth; protects against radiation exposure. </p>
                    <img src={T1image} alt="T1" className="vitandmins-img" />
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Himalayan bitter apricot kernal oil - </b> These have many benefits such as it has [seeds] Amygdalin for cancer and tumour treatment; rich in essential fatty acids, vitamins [E & A], and antioxidants; it has anti-inflammatory properties; skin hydration. </p>
                    </div>

                    <div className='row-images-only'>
                        <img src={T2image} alt="T2" className="vitandmins-img" />
                        <img src={T3image} alt="T3" className="vitandmins-img" />
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Black seed oil -</b> This has many health benefits but for cancer it can slow the growth of cancer and division of cancer cells; Antioxidant properties: Black seed oil’s potent antioxidants may shield cells from oxidative harm and lower cancer risk; Black seed oil may boost immune function, supporting the body’s ability to detect and destroy cancer cells; it has anti diabetic properties; its compounds help reduce inflammation and oxidative stress, which are central to cancer progression; anti-inflammatory and antimicrobial properties make it effective for skin conditions like eczema and psoriasis; support liver and kidney function. </p>
                    <img src={T7image} alt="T7" className="vitandmins-img" />
                    </div>
            </div>


    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
