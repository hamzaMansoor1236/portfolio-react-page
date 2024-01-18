import imgBackGround from '../FourthSection/backgroundImage.png'

import imgNine from './Component 9.png'

function EighthSection() {
   

    return (
        <div className='container rounded-5 pb-5'  style={{ backgroundImage: `url(${imgBackGround})`, height: "auto", backgroundSize: 'cover' }} >
            <div className='mt-5'>
                <h2 className='text-white'>Testimonials That<br></br>Speak to My Results</h2>
                <p className='mx-2 mx-sm-1 justify-text-center text-white' style={{maxWidth:"400px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
            </div>
      
        
        <div id=" carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel" data-mdb-carousel-init>
          <div class="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={imgNine} class="d-block w-100" alt="Sunset Over the City"/>
              
            </div>
            <div class="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh"/>
             
            </div>
            <div class="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="Cliff Above a Stormy Sea"/>
              
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

       
        </div>

        


    );
}

export default EighthSection;
