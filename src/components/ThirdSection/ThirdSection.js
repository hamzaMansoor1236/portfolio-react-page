import "./ThirdSection.css";
import backGroundImage from "./young.png"
import svgQuote from './quote-up.svg'

import svgStar from './Star.svg'

function ThirdSection() {
    return (
        <div className="container third-section-container rounded-5" style={{ backgroundImage: `url(${backGroundImage})`, borderRadius:"30px" }}>


            <div className="row g-0 custom-styling-third-section" >
                <div className="col-4 g-0 align-center styling-column-1" >
                    <img className="svg-quote-styling" src={svgQuote} alt="quotation marks pic"></img>
                    <p className="text-jenny text-start">Jenny’s Exceptional product design ensured our website’s success. Highly Recommended</p>
                </div>
                <div className="col-4 g-0" ></div>


                <div className="col-4 g-0 styling-column-3"  >
                    <div className="star-image-section" >
                        <img className="svg-star" src={svgStar} alt="quotation marks pic"></img>
                        <img className="svg-star" src={svgStar} alt="quotation marks pic"></img>
                        <img className="svg-star" src={svgStar} alt="quotation marks pic"></img>
                        <img className="svg-star" src={svgStar} alt="quotation marks pic"></img>
                        <img className="svg-star" src={svgStar} alt="quotation marks pic"></img>

                    </div>
                    <div>
                        <p className="text-10-years">10 YEARS</p>
                    </div>
                    <div >
                        <p className="text-experience text-end">Experience</p>
                    </div>

                </div>
            </div>



        </div>
    );
}
export default ThirdSection;
