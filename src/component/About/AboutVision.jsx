import React from 'react';
// import B4 from '../../src/image/Brain-Awareness-Week/Bawarenes11.jpg';
import B4 from '../../image/activities/e8.jpg';

function AboutVision() {
  return (
    <div>
      {/* <!-- Content One Area --> */}
    <div class="content-section bg-default">
      <div class="container">
        <div class="content-section--l5-1">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-4 col-md-9 col-xs-11">
              {/* <!-- Section Title --> */}
              <div class="section-title section-title--l5 mb-6 mb-md-0 text-center text-lg-start" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                <h6 class="section-title__sub-heading">Our Vision</h6>
                <h2 class="section-title__heading"> A unique experience</h2>
                {/* <p class="section-title__description">To ensure that neuroscience is familiar and <br class="d-none d-xxl-block"/> accessible to all who hope for a future <br class="d-none d-xxl-block"/> In neuroscience and its related field.</p> */}
                <p className='section-title__description'>To educate youth/ understudents on  brain <br class="d-none d-xxl-block"/>and to motivate them to pursue careers in neuroscience <br class="d-none d-xxl-block"/>  in order to fight  neurological diseases. </p>
                {/* <a class="btn btn--lg-3 btn-primary text-white shadow--primary-2 rounded-50" href="#">Learn More</a> */}
              </div>
              {/* <!--/ .Section Title --> */}
            </div>
            <div class="col-xxl-5 col-lg-4 col-md-6 col-xs-9" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
              <div class="content-img text-center">
                <img class="w-100" src={B4} alt=""/>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-xs-9 order-3" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              <div class="content-right">
                {/* <!-- Single Services --> */}
                <div class="widgets widgets--content-1-l5">
                  <h5 class="widgets__title">Our Target</h5>
                  <p class="widgets__content">Young and vibrant Nigerian youths including marginalized groups</p>
                </div>
                {/* <!--/ .Single Services --> */}
                {/* <!-- Single Services --> */}
                <div class="widgets widgets--content-1-l5">
                  <h5 class="widgets__title">what we teach</h5>
                  <p class="widgets__content">
 Topics in neuroscience, Career development and Journal writing 
                    </p>
                </div>
                {/* <!--/ .Single Services --> */}
                {/* <!-- Single Services --> */}
                <div class="widgets widgets--content-1-l5">
                  <h5 class="widgets__title">How we teach</h5>
                  <p class="widgets__content">We reach out to youths through campaigns, sensitizations, webinars, workshops and brainbees.</p>
                </div>
                {/* <!--/ .Single Services --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--/ .Content One Area --> */}
    </div>  
   
  )
}

export default AboutVision