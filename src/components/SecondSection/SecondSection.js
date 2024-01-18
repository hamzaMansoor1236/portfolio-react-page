import "./SecondSection.css";
import img from "./Vector 1.svg";
function SecondSection() {
    return (
        <div className=" parent-div mb-5 mt-5"
         
        >
             {/*Hello button and vector starts*/ }
            <div
                style={{
                    height: "64px",
                    position: "relative",
                    width: "127.49px",
                }}>
                <div className="button-style">
                    <div className="word-hello">
                        Hello!
                    </div>
                </div>


                <div className="vector-styling">
                    <img src={img} alt="pic of vector"></img>
                </div>


            </div>
            {/*Hello button and vector  ends*/ }

            <div style={{ textAlign: "center", maxWidth: "913px",}}>
                <span className="wording-black">I’m{" "}</span>
                <span className="wording-orange">Jenny<span className="wording-black">,</span></span>
                <br></br>
                <span className="wording-black">Product Designer</span>
            </div>
        </div>
    );
}
export default SecondSection;
