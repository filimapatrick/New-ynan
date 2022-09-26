import React from 'react';
import styled from 'styled-components';
import E1 from '../../image/activities/E1.jpg';
import E2 from '../../image/activities/E2.jpg';
import E3 from '../../image/activities/e3.jpg';
import E4 from '../../image/activities/e4.jpg';
import E5 from '../../image/activities/e5.jpg';
import E6 from '../../image/activities/e6.jpg';
import E7 from '../../image/activities/e7.jpg';
// import E8 from '../../image/activities/e8.jpg';


function Activities() {
  const ActivitiesStle = styled.div` 
margin-top:-33rem;

 @media screen and (min-width: 1025px) {
 .container{
    display:flex;

 flex-wrap:wrap;
 justify-content:center;
 }
  .card {
 	position: relative;
   transition: all .5s ease-in;
  width:30rem;
   height: 30rem;
   margin:2rem;
   background:grey;
   color:black;
   
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

 .light-header{
 
 color:#aaaaaa;
 font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;
text-align:center;
margin-top:2rem;
}

h2{
   color:black;
 font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
text-align:center;
margin-top:5rem;

}

 }


 @media screen and (max-width: 1025px) {
 .container{
     display:flex;

 flex-wrap:wrap;
 justify-content:center;
 padding-bottom:4rem;
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

 }
 
`

  return (
    <ActivitiesStle>
<div className='container'>
        <div className="card">
  <img src={E1} alt ='' className="card__image"/>
 
</div>


<div className="card">
  <h2>OUTREACHES</h2>
 <p className='light-header'> At Youth Neuroscience Association of Nigeria, We carry out sensitizations outreaches to communities to remind them about their Mental health and other conditions related to their </p>
</div>


<div className="card">
  <img src={E2} alt ='' className="card__image"/>
 
</div>

<div className="card">
  <h2>SENSITIZATIONS IN ELEMENTARY AND HIGH SCHOOLS</h2>
 <p className='light-header'> With this initiative, our goal is to promote great opportunities for those who seek a career in Neuroscience,by educating them early and providing enlightenment for them about Neuroscience and opportunities available for them.</p>
</div>

<div className="card">
  <img src={E3} alt ='' className="card__image"/>
 
</div>

<div className="card">
  <h2>BRAINBEE COMPETITIONS</h2>
 <p className='light-header'>With our organization’s mission always in mind, we strive every year to sensitize and prepare high school students for the annual brainbee competitions for eligibility at international competitions.</p>
</div>

<div className="card">
  <img src={E4} alt ='' className="card__image"/>
 
</div>

<div className="card">
  <h2>JOURNAL CLUB MEETINGS</h2>
 <p className='light-header'>Our Undergraduates create time to get to get very familiar with Neuroscience through a bi-weekly Journal club meeting. </p>
</div>


<div className="card">
  <img src={E5} alt ='' className="card__image"/>
 
</div>

<div className="card">
  <h2>WEBINARS</h2>
 <p className='light-header'>At Youth Neuroscience Association of Nigeria, we are dedicated to stepping up our efforts in addressing issues of knowledge gap in Neuroscience across various fields. We conduct bi-monthly webinars with experts presenting Lectures for young Undergraduates across various fields of interest. </p>
</div>

<div className="card">
  <img src={E6} alt ='' className="card__image"/>
 
</div>

<div className="card">
  <h2>BRAIN AWARENESS WEEK CAMPAIGN</h2>
 <p className='light-header'>We join the global community with Dana Foundation to promote the importance of the brain and and Mental health. </p>
</div>


<div className="card">
  <img src={E7} alt ='' className="card__image"/>
 
</div>

<div className="card">
  <h2>ECO AWARDS</h2>
 <p className='light-header'>We award Academic excellence amongst undergraduates who are best at Neuroscience across institutions in Nigeria. </p>
</div>

</div>
    </ActivitiesStle>
  )
}

export default Activities


