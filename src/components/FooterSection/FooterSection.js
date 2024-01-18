import './FooterSection.css'
import facebook from './facebook.svg'
import youtube from './youtube.svg'
import whatsapp from './whatsapp.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import svg from "../NavBar/svg";
import svgSendIcon from './sendIcon.svg'
function FooterSection() {
    return (

        <div style={{ backgroundColor: "#272727", borderTopLeftRadius: '15px', borderTopRightRadius: "15px" }} className=' pb-3'>

            <div className='container '>
                <div className='row pt-5 '>
                    <div className='col-12 col-sm-6 text-white text-start '><h1>Let's Connect There</h1></div>
                    <div className='col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end' >
                        <button className='btn rounded-5 px-3 px-sm-5 font-12px ' style={{ backgroundColor: "#FD853A", color: 'white', fontWeight: '500' }}> Hire Me</button>
                    </div>
                </div>


                <hr style={{ backgroundColor: 'grey', height: '3px' }} className='mt-5'></hr>

                <div className='row  ' style={{ color: 'white' }}>
                    <div className=' col-md-6  gap-2 gap-sm-0 justify-content-sm-between' style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', minHeight: '180px'
                    }}>
                        <div style={{ marginLeft: '-45px' }} >{svg}</div>
                        <div className='text-start font-12px' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
                            ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed lobortis orci elementum egestas lobortis.
                        </div>
                        <div className=' d-flex gap-1 align-items-center '>
                            <img className='cursor-pointer' style={{ height: '16px' }} alt='pic of fb ' src={facebook} />
                            <img className='cursor-pointer' style={{ height: '21px' }} alt='pic of yt ' src={youtube} />
                            <img className='cursor-pointer' style={{ height: '17px' }} alt='pic of whatsapp ' src={whatsapp} />
                            <img className='cursor-pointer' style={{ height: '15px' }} alt='pic of yt ' src={instagram} />
                            <img className='cursor-pointer' style={{ height: '15px' }} alt='pic of yt ' src={twitter} />

                        </div>
                    </div>

                    <div className=' col-md-6'>
                        <div className='row d-flex pt-4 pt-sm-0'>

                            <div className='col-6 col-sm-6 text-start pt-sm-3' >
                                <h6 className='font-12px fw-bold orange-text text-start'>Navigation</h6>
                                <p className='font-12px cursor'><span className='cursor-pointer'>Contact</span></p>
                                <p className='font-12px'><span className='cursor-pointer'>About Us</span></p>
                                <p className='font-12px'><span className='cursor-pointer'>Service</span></p>
                                <p className='font-12px'><span className='cursor-pointer'>Resume</span></p>
                                <p className='font-12px'><span className='cursor-pointer'>Project</span></p>
                            </div>

                            <div className='d-flex-col col-6 col-xs-6 text-start pt-2 pt-sm-3'  >
                                <h6 className='font-12px fw-bold orange-text ms-0'>Contact</h6>
                                <p className='font-12px'>+91 7738443636</p>
                                <p style={{textWrap:"wrap"}} className='font-12px'><span className='cursor-pointer'>Jaycrea36@gmail.com</span></p>
                                <p className='font-12px'><span className='cursor-pointer'>Portfolio-jcrea.com</span></p>
                            </div>

                            <div className='col-12 col-sm-6 text-start pt-2 pt-sm-3' >
                                <h6 className='font-12px fw-bold orange-text' >Get the latest information</h6>
                                <div className='d-flex flex-inline justify-content-start border-0 align-items-start'

                                >
                                    <input className='mt-1 justify-content-center font-12px rounded-0' style={{ outline: "none", height: 31 }}
                                        type="text" placeholder="Email Address" aria-label="Username" >
                                    </input>

                                    <div> </div>        
                                    <div className='mt-1 div-send-button'
                                        style={{
                                            
                                            width: "auto",
                                            height: 29,
                                            paddingLeft: 16,
                                            paddingRight: 16,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            background: "#FD853A",
                                            borderTopRightRadius: 5,
                                            borderBottomRightRadius: 5,
                                            overflow: "hidden",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: 10,
                                            display: "flex"
                                        }}
                                    >
                                        <div >
                                            <div
                                            >
                                                <img src={svgSendIcon} alt='pic of send icon' ></img>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <hr style={{ backgroundColor: 'grey', height: '3px' }} className='mt-5'></hr>


                <div className='row  text-white align-item-baseline '>
                    <div className='col-12 col-sm-6 pt-3 text-center text-sm-start font-12px'>Copyright© 2023 Jayesh. All Rights Reserved.</div>
                    <div className='col-12 col-sm-6 pt-3 text-center text-sm-end font-12px'>User Terms & Conditions | Privacy Policy</div>

                </div>

            </div>

        </div>);
}

export default FooterSection;

