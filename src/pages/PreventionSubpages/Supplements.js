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
                    <p> <b>Lugols Iodine (15% strength)</b> has many benefits such as possibly aiding in cancer prevention, and killing bacteria,
                    viruses & fungi. It is known to be able to boost thyroid function;,detoxify fluoride, bromide & chlorine and strengthen
                    your immune system. It can also be used as a natural antihistamine, to supports brain health, promote healthy hair, skin
                    & nail growth. In other cases, it can help to protect against radiation exposure. </p>
                    <img src={T1image} alt="T1" className="vitandmins-img" />
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Himalayan bitter apricot kernel oil</b> can be found in a concentrated oil form, or as seeds. Its seeds contain amygdalin (B17)
                    , which can be used for cancer and tumour treatments. The amygdalin is toxic in higher doses, so proceed with caution. 
                    Bitter apricot kernel in both oil and seed forms are rich in essential fatty acids, vitamins (E & A), and antioxidants. It also has anti-inflammatory properties and promotes 
                    skin hydration. </p>
                    </div>

                    <div className='row-images-only'>
                        <img src={T2image} alt="T2" className="vitandmins-img" />
                        <img src={T3image} alt="T3" className="vitandmins-img" />
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                    <p> <b>Black seed oil</b> has many health benefits but for cancer it can slow the growth of cancer and division of cancer cells. Its potent
                    antioxidants may shield cells from oxidative harm and lower cancer risk, whilst boosting immune function, supporting the body’s ability to 
                    detect and destroy cancer cells. The oil also has anti diabetic properties - Its compounds help reduce inflammation and oxidative stress, which
                    are central to cancer progression. Anti-inflammatory and antimicrobial properties make it effective for skin conditions like eczema and psoriasis, 
                    and to support liver and kidney function. </p>
                    <img src={T7image} alt="T7" className="vitandmins-img" />
                    </div>
            </div>


    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
