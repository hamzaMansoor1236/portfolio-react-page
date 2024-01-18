import './SixthSection.css'
import img from './Mask group.png'

function SixthSection() {
    return (<div  style={{ backgroundColor: '#F2F4F7' }}>

        <div className='container d-flex d-flex-wrap mt-5 pb-5'>
            <div className='div-picture col-6 d-flex align-items-center'>
                <img alt='why hire me pic' className='img-fluid' src={img}></img>
            </div>


            <div className='div-text col-6 d-flex flex-column justify-content-center' >
                <div><p className='text-start wording-black mb-0'>Why <span className='wording-orange'>Hire Me ?</span></p></div>
                <div><p className='text-start text-styling-small text-black mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc </p></div>
                <div>
                    <p className='text-start wording-black mb-0'>450+  </p>
                </div>
                <div>
                    <p className='text-start text-muted '>Projects Completed </p>
                </div>
                <button type="button" className="btn btn-sm btn-outline-dark px-3 py-2 mb-0" style={{width:'max-content',}}>Hire Me</button>


            </div>
        </div>

    </div>);
}

export default SixthSection;