import E10image from '../assets/equipment/E10.HEIC';
import E10aimage from '../assets/equipment/E10a.HEIC';
import E9image from '../assets/equipment/E9.HEIC';
import T24image from '../assets/treatment/T24.HEIC';
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
            <p>For <b>colds, flu and chest infections</b> use Organic Oregano liquid.</p>
            <img src={T24image} alt="T24" className="otherremedies-img" />
            </div>
        
        <div className='row'>
            <p>Dilute this with olive oil made 70/30 in a capsule size 0 or 00 capsules using a capsule machine. See photos for example of capsule machine.</p>
            <img src={E9image} alt="E9" className="otherremedies-img" />
        </div>
        <div className='row images-only'>
            <img src={E10image} alt="E10" className="otherremedies-img" />
            <img src={E10aimage} alt="E10a" className="otherremedies-img" />
        </div>
        </div>


        <div className="container">
            <div className="otherremedies-text">
            <p>ENTER Othe rRemedies INFO HERE</p>
        </div>
        </div>
</section>

<footer>
        <p>© 2025 A S Crawford. All rights reserved.</p>
</footer>
    </>
);
}