import React from 'react';
import styled from 'styled-components';
import E1 from '../../image/activities/E1.jpg';
import E2 from '../../image/activities/E2.jpg';
import E3 from '../../image/activities/e3.jpg';
import E4 from '../../image/activities/e4.jpg';
import E5 from '../../image/activities/e5.jpg';
import E6 from '../../image/activities/e6.jpg';
import E7 from '../../image/activities/e7.jpg';
import E8 from '../../image/activities/e8.jpg';

function Activities() {
  return (
    <ActivitiesStle>
      <div className='container'>
        <div className="card">
  <img src={E1} alt ='' className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>OUTREACHES</h3>
      <p>At Youth Neuroscience Association of Nigeria, We carry out sensitizations outreaches to communities to remind them about their Mental health and other conditions related to their Neuro-health.</p>
      {/* <a href="#" className="button">View Trips</a> */}
    </div>
  </div>
</div>

<div className="card">
  <img src={E2} alt ='' className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>SENSITIZATIONS IN ELEMENTARY AND HIGH SCHOOLS</h3>
      <p>With this initiative, our goal is to promote great opportunities for those who seek a career in Neuroscience,by educating them early and providing enlightenment for them about Neuroscience and opportunities available for them.</p>
      {/* <a href="#" className="button">View Trips</a> */}
    </div>
  </div>
</div>

<div className="card">
  <img src={E3} alt ='' className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>BRAINBEE COMPETITIONS</h3>
      <p>With our organization’s mission always in mind, we strive every year to sensitize and prepare high school students for the annual brainbee competitions for eligibility at international competitions.</p>
      {/* <a href="#" className="button">View Trips</a> */}
    </div>
  </div>
</div>


<div className="card">
  <img src={E4} alt ='' className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>JOURNAL CLUB MEETINGS</h3>
      <p>Our Undergraduates create time to get to get very familiar with Neuroscience through a bi-weekly Journal club meeting.</p>
      {/* <a href="#" className="button">View Trips</a> */}
    </div>
  </div>
</div>


<div className="card">
  <img src={E5} alt ='' className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>WEBINARS</h3>
      <p>At Youth Neuroscience Association of Nigeria, we are dedicated to stepping up our efforts in addressing issues of knowledge gap in Neuroscience across various fields. We conduct bi-monthly webinars with experts presenting Lectures for young Undergraduates across various fields of interest.</p>
      {/* <a href="#" className="button">View Trips</a> */}
    </div>
  </div>
</div>


<div className="card">
  <img src={E6} alt ='' className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>BRAIN AWARENESS WEEK CAMPAIGN</h3>
      <p>We join the global community with Dana Foundation to promote the importance of the brain and and Mental health.</p>
      {/* <a href="#" className="button">View Trips</a> */}
    </div>
  </div>
</div>


<div className="card">
  <img src={E7} alt ='' className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>ECO AWARDS</h3>
      <p>We award Academic excellence amongst undergraduates who are best at Neuroscience across institutions in Nigeria.</p>
      {/* <a href="#" className="button">View Trips</a> */}
    </div>
  </div>
</div>

<div className="card">
  <img src={E8}  alt ='' className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>Mountain Trips</h3>
      <p>Plan your next adventure</p>
     
    </div>
  </div>
</div>

        </div>
    
  
    
        
    
        
    </ActivitiesStle>
  )
}

export default Activities;

const ActivitiesStle = styled.div` 
margin-top:-33rem;


@media screen and (min-width: 1025px) {
.container{
    display:flex;

flex-wrap:wrap;
justify-content:center;

}

h3{
    margin-top:-10rem;
    color:white;
    font-size:1.5rem;
    text-align:center;
}

* {
	box-sizing: border-box;
}



.card {
	position: relative;
  transition: all .5s ease-in;
  width:30rem;
  height: 30rem;
  margin:2rem;
 
}


.card__image {
  /* display: block; */
  width: 100%;
  height: 30rem;
  /* margin-bottom:6rem; */
}

.card__image img{
    height:100%;
    width:100%;
}

.card__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30rem;
  width: 30rem;
  opacity: 0;
  visibility: none;
  transition: .5s ease;
  background-color: #393839;
}

.card:hover .card__overlay {
  opacity: 1;
}

.overlay__text {
  color: white;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  padding-top:4rem;
}


}




@media screen and (max-width: 1025px) {
.container{
    display:flex;

flex-wrap:wrap;
justify-content:center;
padding-bottom:4rem;
}



* {
	box-sizing: border-box;
}



.card {
	position: relative;
  transition: all .5s ease-in;
  width:20rem;
  height: 24rem;
  margin:2rem;

}


.card__image {
  display: block;
  width: 100%;
  height: 24rem;
}

.card__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 24rem;
  width: 20rem;
  opacity: 0;
  visibility: none;
  transition: .5s ease;
  background-color: #393839;
}

.card:hover .card__overlay {
  opacity: 1;
}

.overlay__text {
  color: white;
  font-size: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}


}

`