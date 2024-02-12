import React from 'react'
import sideone from '../image/homeone.png'
import sidetwo from '../image/homesecond.png'

const Home = () => {
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <a href="#"><img src={sideone} className="img-fluid" alt="" /></a>
    </div>
    <div class="carousel-item">
    <a href="#"><img src={sidetwo} className="img-fluid" alt="" /></a>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        {/* <a href="#"><img src={sideone} className="img-fluid" alt="" /></a> */}
    </>
  )
}

export default Home