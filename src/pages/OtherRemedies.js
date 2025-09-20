import E10image from '../assets/equipment/E10.HEIC';
import E10aimage from '../assets/equipment/E10a.HEIC';
import E23image from '../assets/equipment/E23.HEIC';
import E9image from '../assets/equipment/E9.HEIC';
import T11image from '../assets/treatment/T11.HEIC';
import T12image from '../assets/treatment/T12.HEIC';
import T24image from '../assets/treatment/T24.HEIC';
import T25image from '../assets/treatment/T25.HEIC';
import T28image from '../assets/treatment/T28.HEIC';
import T29image from '../assets/treatment/T29.HEIC';
import './OtherRemedies.css';

export default function OtherRemedies() {
    return (
    <>
        <header>
        <h1>In Loving Memory of A. E. R</h1>
        </header>

<section id="otherremedies">
        <h2>Remedies For Other Ailments</h2>

        <div className="otherremedies-item big-card">
            <div className='row'>
            <p>For <b>colds, flu and chest infections</b> use organic Oregano liquid. Dilute this with olive oil with a minimum a ratio of 30/70, as the oregano oil is very potent. Fill capsule sizes 0 or 00 with this liquid by hand, or using a capsule machine. See photos for example of capsule machine.</p>
            <img src={T24image} alt="T24" className="otherremedies-img" />
            </div>
        <div className='row'>
            <p><b>Oregano oil</b> has anti bacterial, anti fungal and antioxidant properties. It's a great alternative to antibiotics, helps to fight pneumonia and bronchitis. It also fights MRSA and staph infections, intestinal worms and parasites.</p>
        </div>
        <div className='row images-only'>
            <img src={E9image} alt="E9" className="otherremedies-img" />
            <img src={E10image} alt="E10" className="otherremedies-img" />
            <img src={E10aimage} alt="E10a" className="otherremedies-img" />
        </div>
        </div>

        <div className="otherremedies-item big-card">
            <div className='row'>
                <p>To clear the throat and chest for <b>chest infections</b>, use a Nebulizer with Colloidal silver. See image examples of these below.</p>
            </div>

            <div className='row images-only'>
            <img src={E23image} alt="E23" className="otherremedies-img" />
            <img src={T25image} alt="T25" className="otherremedies-img" />
        </div>
        </div>

        <div className="otherremedies-item big-card">
            <div className='row'>
            <p>Take organic Chlorella powder in capsule sizes 0 or 00 capsule using a capsule machine.</p>
            <img src={T28image} alt="T28" className="otherremedies-img" />
            </div>
        <div className='row'>
            <p> <b>Chlorella</b> has many benefits like preventing cancer, detoxifying the body and boosting the immune system. It is used for reducing
            high blood pressure, lowering cholesterol levels, improving blood sugar levels and aiding in weight loss. Other uses of this are to support
            eye health and support health during chemotherapy.</p>
        </div>
        <div className='row images-only'>
            <img src={E10image} alt="E10" className="otherremedies-img" />
            <img src={E10aimage} alt="E10a" className="otherremedies-img" />
            <img src={E9image} alt="E9" className="otherremedies-img" />
        </div>
        </div>

        <div className="otherremedies-item big-card">
            <div className='row'>
                <p>Inhale Ravintsara oil or Niaouli oil for <b>colds, flus and chest infections.</b> Use a few drops in hot water with a towel over your head.</p>
            </div>

            <div className='row images-only'>
            <img src={T11image} alt="T11" className="otherremedies-img" />
            <img src={T12image} alt="T12" className="otherremedies-img" />
        </div>
        </div>

        <div className="otherremedies-item big-card">
            <div className='row'>
            <p>Take organic Spirulina powder in capsule sizes 0 or 00 capsule using a capsule machine.</p>
            <img src={T29image} alt="T29" className="otherremedies-img" />
            </div>
        <div className='row'>
            <p> <b>Spirulina</b> increases the production of antibodies, contains infection-fighting proteins, and other cells that improve immunity and help ward off
            infection and chronic illnesses such as cancer. It is useful for detoxifying heavy metals, reducing high blood pressure and may lower cholesterol levels. 
            Other uses of this are to boost exercise performance, protect eye health and aid in weight loss.</p>
        </div>
        <div className='row images-only'>
            <img src={E10image} alt="E10" className="otherremedies-img" />
            <img src={E10aimage} alt="E10a" className="otherremedies-img" />
            <img src={E9image} alt="E9" className="otherremedies-img" />
        </div>
        </div>
</section>

<footer>
        <p>© 2025 All rights reserved.</p>
</footer>
    </>
);
}