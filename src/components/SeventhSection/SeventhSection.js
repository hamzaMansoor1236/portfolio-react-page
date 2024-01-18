import img1 from './Frame 26.png'

function SeventhSection() {
    return (
        <div className="container ">
            <div className="row ">
                <div className="col-12 col-sm-10 pt-5 ">
                    <p className="text-start wording-black"> Lets have a look at <br></br><span className='wording-orange'>my Portfolio</span> </p>
                </div>
                <div className="col12 col-sm-2 pt-5 d-flex justify-content-end align-items-center">
                    <button className="btn rounded-pill" style={{ width: '100px', height: '50px', backgroundColor: '#fd853a', color: "white", fontWeight: "500" }}> See all</button>
                </div>
            </div>
            <div className="row d-flex  flex-xs-column mt-4">
                <div className="col-6  ">
                    <img className='img-fluid' alt={"pic of the "} src={img1}></img>
                </div>

                <div className="col-6 ">
                    <img className='img-fluid' alt={"pic of the "} src={img1}></img>
                </div>
            </div>
            <div className='row d-flex-wrap mt-5 align-items-center justify-content-center'>
                <button className="btn btn-secondary mx-2 my-2 py-1 px-4 rounded-pill border-0" style={{ width: 'auto', backgroundColor: ' #F2F4F7', height: '40px', fontWeight: "500", color: 'black' }}> Landing Page</button>
                <button className="btn btn-secondary mx-2 my-2 py-1 px-4 rounded-pill border-0" style={{ width: 'auto', backgroundColor: ' #F2F4F7', height: '40px', fontWeight: "500", color: 'black' }}> Product Design</button>
                <button className="btn btn-secondary mx-2 my-2 py-1 px-4 rounded-pill border-0" style={{ width: 'auto', backgroundColor: ' #F2F4F7', height: '40px', fontWeight: "500", color: 'black' }}> Animation</button>
                <button className="btn btn-secondary mx-2 my-2 py-1 px-4 rounded-pill border-0" style={{ width: 'auto', backgroundColor: ' #F2F4F7', height: '40px', fontWeight: "500", color: 'black' }}> Glassmorphism</button>
                <button className="btn btn-secondary mx-2 my-2 py-1 px-4 rounded-pill border-0" style={{ width: 'auto', backgroundColor: ' #F2F4F7', height: '40px', fontWeight: "500", color: 'black' }}> Cards</button>

            </div>

            <div className='mt-3' style={{alignContent:"center"}}>
                <h2 className='wording-black' style={{ color:"#344054"}}>Lirante - Food Delivery Solution</h2>
                <p className='text-styling-small text-black' style={{maxWidth:'500px' , marginLeft:"auto" , marginRight:"auto"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
            </div>

        </div>
    );
}

export default SeventhSection;