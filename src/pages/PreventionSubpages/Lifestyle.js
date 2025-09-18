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
                        <p> Practice <b>intermittent fasting. </b>This is a term for an eating pattern that includes voluntary periods of fasting. 
                        It typically takes time for the body to become accustomed to this, and gradually changing your eating schedules over time. 
                        The most optimal schedule is fasting for 2-3 days, once a month. Visit the website link <a href="https://healthreporter.com/intermittent-fasting-types/">here</a> for more information on intermittent 
                        fasting types and regimes. </p>
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                        <p>Try to eat as many <b>organic foods</b> as possible, gradually making the swap with what you currently have at home. 
                        Regularly check ingredient labels on the food you buy, and pay close attention to potential carcinogens. Some of these ingredients 
                        are <b>Aspartame (E951) and Nitrites / Nitrates (E249, E250, E251, E252). </b> Download the <b>'Yuka'</b> app for free, to scan barcodes 
                        of products. You will be able to see full breakdowns of their ingredients and potential risks.  
                        <a href="https://healthreporter.com/intermittent-fasting-types/"> Click here</a> to visit their website. </p>
                    </div>
            </div>

            <div className="lifestyle-item big-card">
                    <div className='row'>
                        <p>Regularly practice <b>meditation and exercise.</b> If you are new to meditation, you can start by taking part in ‘guided meditation’ videos online for introductions. </p>
                    </div>
            </div>


            
    </section>
    
        <footer>
            <p>© 2025 All rights reserved.</p>
        </footer></>
    );
}
