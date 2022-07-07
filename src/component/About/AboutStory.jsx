import React from 'react';
import B3 from '../../../src/image/pamo/pamo4.jpg';

function AboutStory() {
  return (
    <>
 {/* <!-- Services Area --> */}
    <div class="feature-section feature-section--l3 bg-default-3" style={{marginTop:'-35rem'}}>
      <div class="container">
        {/* <!-- Section Title --> */}
        <div class="row">
          <div class="col-xl-8 col-lg-10">
            <div class="section-title section-title--l3">
              <h6 class="section-title__sub-heading" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">About us</h6>
              <h2 class="section-title__heading" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">
                Our short<br class="d-none d-xs-block" />
            story!
              </h2>
            </div>
          </div>
        </div>
        <div class="row mb-5 mb-lg-7">
          <div class="col-lg-6 col-md-12">
            <div class="section-title section-title--l3">
              <p class="section-title__description me-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
              YNAN is an association that provides a platform for interaction, innovation, creativity and career opportunities
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="section-title section-title--l3">
              <p class="section-title__description me-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
              to explore into areas related to the nervous system. Our objectives are to:

              </p>
            </div>
          </div>
        </div>
        {/* <!--/ .Section Title --> */}
        {/* <!-- Feature Content --> */}
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 col-md-12">
            <div class="feature-content--l3__image mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
              <img class="w-100" src={B3} alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="feature-right" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              {/* <!-- Feature List --> */}
              <h6 class="section-title__sub-heading" data-aos="fade-up" data-aos-duration="500" data-aos-once="true" style={{color:'green'}}>Our Mission</h6>
              <ul class="feature-content--l3__list list-unstyled">
                <li>To run a journal club</li>
                <li>To Encourage participation in outreaches and creating awareness on neurological conditions and approaches to deal with them.</li>
                <li>Allow students to cultivate their interest in Neuroscience in an informal environment, without the pressure of being graded.</li>

                <li>Encouraging them to attain high levels of professional achievement by organizing lectures, seminars, outdoor presentations and workshops,</li>
                <li>To encourage and impact  primary  and high school students the knowledge of neuroscience by organizing outreaches, seminars, and other educative activities which can enlighten them more about neuroscience.</li>
                <li>To develop and advance collaboration between young scientist, neuro-practitioners and international organizations. </li>
                <li>To encourage excellence through ECO awards for outstanding students.</li>
                <li>To encourage youth participation in Brain Awareness Week programs. </li>
              </ul>
              
            </div>
          </div>
        </div>
        {/* <!--/ .Feature Content --> */}
      </div>
    </div>
    {/* <!--/ .Services Area --> */}
    </>
  )
}

export default AboutStory