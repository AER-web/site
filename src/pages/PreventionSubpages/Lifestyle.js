import { Link } from 'react-router-dom';
import './Lifestyle.css';

export default function Lifestyle() {
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
            <h2>Lifestyle</h2>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                        <p> <b>Intermittent Fasting -</b> Once a month 2 to 3 days. </p>
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                        <p>Eat <b>organic foods</b> where possible and check with a scanner what are the ingredients within the foods you buy; see “Yuka” from the app store or on Android/Goggle app store. </p>
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                        <p><b>Meditation and Exercise.</b></p>
                    </div>
            </div>


            
    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
