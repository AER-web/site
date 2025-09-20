import E10image from '../assets/equipment/E10.HEIC';
import E10aimage from '../assets/equipment/E10a.HEIC';
import E19image from '../assets/equipment/E19.HEIC';
import E20image from '../assets/equipment/E20.HEIC';
import E3image from '../assets/equipment/E3.HEIC';
import E4image from '../assets/equipment/E4.HEIC';
import E5image from '../assets/equipment/E5.HEIC';
import E6image from '../assets/equipment/E6.HEIC';
import E7image from '../assets/equipment/E7.HEIC';
import E8image from '../assets/equipment/E8.HEIC';
import E9image from '../assets/equipment/E9.HEIC';
import T20image from '../assets/treatment/T20.HEIC';
import T21image from '../assets/treatment/T21.HEIC';
import T23image from '../assets/treatment/T23.HEIC';
import './PainRelief.css';

export default function PainRelief() {
    return (
    <>
        <header>
        <h1>In Loving Memory of A. E. R</h1>
        </header>

<section id="painrelief">
        <h2>Pain Relief</h2>
        <div className="container">
            <div className="painrelief-text">
            <p>These are examples of alternative pain relief methods to known medication such as Ibuprofen and  paracetamol.
                These common medications are mixed with other chemicals and over time, your body builds up resistance to them,
                so it is useful to use alternative methods of pain relief where possible.</p>
        </div>
        </div>

        <br></br>

        <div className="painrelief-item big-card">
            <div className='row'>
                <p>Combine organic <b>turmeric</b> powder, <b>ginger</b> powder and <b>black pepper</b> powder in self made capsules.</p>
            </div>

            <div className='row images-only'>
            <img src={T20image} alt="T20" className="painrelief-img" />
            <img src={T21image} alt="T21" className="painrelief-img" />
            <img src={E9image} alt="E9" className="painrelief-img" />
        </div>

        <div className='row'>
                <p>Mix turmeric in a ratio of 4:1:1 with 1 black pepper and 1 ginger in a vegetarian size 0 or 00 capsule using a capsule machine. Take as and when needed to relieve the pain.</p>
        </div>

            <div className='row images-only'>
            <img src={E10image} alt="E10" className="painrelief-img" />
            <img src={E10aimage} alt="E10a" className="painrelief-img" />
            <img src={T23image} alt="T23" className="painrelief-img" />

            </div>
        </div>

        <div className="painrelief-item big-card">
            <div className='row'>
                <p>You can use <b>heat lamps</b> such as Beurer to ease pain. To visit the Beurer website, <a href="https://www.beurer.com/uk/c/wellbeing/light-therapy/infrared-lamp/">click here</a></p>
            </div>

            <div className='row images-only'>
            <img src={E3image} alt="E3" className="painrelief-img" />
            <img src={E4image} alt="E4" className="painrelief-img" />
            </div>

            <div className='row'>
                <p>See below for examples of other heat lamps.</p>
            </div>

            <div className='row images-only'>
            <img src={E5image} alt="E5" className="painrelief-img" />
            <img src={E6image} alt="E6" className="painrelief-img" />
            </div>

            <div className='row images-only'>
            <img src={E7image} alt="E7" className="painrelief-img" />
            <img src={E8image} alt="E8" className="painrelief-img" />
            </div>
        </div>

        <div className="painrelief-item big-card">
            <div className='row'>
                <p>Use an <b>electromagnetic muscle stimulator machine</b> for pain relief.</p>
                <img src={E19image} alt="E19" className="painrelief-img" />
            </div>
        </div>

        <div className="painrelief-item big-card">
            <div className='row'>
                <p>Use a <b>Rife machine</b> for pain relief.</p>
            <img src={E20image} alt="E20" className="painrelief-img" />
            </div>
        </div>

</section>

<footer>
        <p>© 2025 All rights reserved.</p>
</footer>
    </>
);
}