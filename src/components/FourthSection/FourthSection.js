import "./FourthSection.css";
import backgroundImage from './backgroundImage.png'
import uiux from './ui_ux_tech_designing_banner.png'
function FourthSection() {
    return (
        <div className="negative-margin" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            
        
        <div className="container fourth-section-container px-3  py-5 round-border " >
                <div className="d-flex fourth-section-text-container pt-2 pt-md-4 pt-xl-4  " >
                    <p><span className="col-12  col-md-8 col-lg-6 fourth-section-white-words text-center text-lg-start "><span className="wording-black text-white">My</span> <span className="fourth-section-orange-words wording-orange ">services</span></span></p>
                    <p className="col-12 col-md-8  col-lg-6 fourth-section-white-words text-styling-small text-center text-lg-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
                </div>
                
                <div className="fourth-section-card-container pt-2 pt-lg-5  d-flex flex-wrap gap-4" >
                    <div className="custom-card">
                        <p className="custom-card-text-style pt-3 ps-3 ">UI/UX Design</p>
                        <hr style={{ color: 'rgb(255, 255, 255 )' }}></hr>
                        <img alt={"pic of the "} className="card-image-styling" />
                        

                    </div>
                    <div className="custom-card">
                        <p className="custom-card-text-style pt-3 ps-3 " >Web Design</p>
                        <hr style={{ color: 'rgb(255, 255, 255 )' }}></hr>
                        <img alt={"pic of the "} className="card-image-styling" />
                    </div>
                    <div className="custom-card">
                        <p className="custom-card-text-style pt-3 ps-3" >Landing Page</p>
                        <hr style={{ color: 'rgb(255, 255, 255 )' }}></hr>
                        <img alt={"pic of the "} className="card-image-styling" />
                    </div>

                </div>
            </div>

            
        </div>
    );
}
export default FourthSection;