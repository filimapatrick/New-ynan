import React from 'react';
import styled from 'styled-components';

function AboutActivities() {
    const Gallery2 = styled.div` 

@media screen and (max-width: 1280px) {

    .wrapper{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(35rem,1fr));
       
       /* grid-gap:3rem; */
     
    }

    .container {
  /* position: relative; */
  width: 35rem;
  margin-bottom:2rem;
  /* gap:2rem; */
}

.image {
  display: block;
  width: 35rem;
  height: 35rem;
}

.image img{
    height:100%;
    width:100%;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: lightblue;
  overflow: hidden;
  width: 26rem;
  height: 25rem;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: .3s ease;
  transition: .3s ease;
}

.container:hover .overlay {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.text {
  color: white;
  font-size: 15px;
  position: absolute;
   top: 50%;
  left: 50%; 
   -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); 
  text-align: center;
}

h2,p{
    text-align:center;
}


.light-header{
  padding-bottom:2rem;
  color:#aaaaaa;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;
}

h2{
  color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
}

}




@media screen and (max-width: 912px) {

.wrapper{
    display:grid;
    grid-template-columns:1fr;
   
   /* grid-gap:3rem; */
 
}

.container {
/* position: relative; */
width: 30rem;
margin-bottom:2rem;
/* gap:2rem; */
}

.image {
display: block;
width: 30rem;
height: 30rem;
}

.image img{
height:100%;
width:100%;
}

.overlay {
position: absolute;
bottom: 0;
left: 0;
right: 0;
background-color: lightblue;
overflow: hidden;
width: 26rem;
height: 25rem;
-webkit-transform: scale(0);
-ms-transform: scale(0);
transform: scale(0);
-webkit-transition: .3s ease;
transition: .3s ease;
}

.container:hover .overlay {
-webkit-transform: scale(1);
-ms-transform: scale(1);
transform: scale(1);
}

.text {
color: white;
font-size: 15px;
position: absolute;
top: 50%;
left: 50%; 
-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%); 
text-align: center;
}

h2,p{
text-align:center;
}


.light-header{
padding-bottom:2rem;
color:#aaaaaa;
font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;
}

h2{
color:black;
font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
}

}




    

@media screen and (min-width: 880px) {

    .wrapper{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));
        padding-left:2rem;
        padding-right:2rem;
       /* grid-gap:3rem; */
     
    }

    .container {
  /* position: relative; */
  width: 100%;
  margin-bottom:2rem;
  /* gap:2rem; */
}

.image {
  display: block;
  width: 25rem;
  height: 25rem;
}

.image img{
    height:100%;
    width:100%;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: lightblue;
  overflow: hidden;
  width: 26rem;
  height: 25rem;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: .3s ease;
  transition: .3s ease;
}

.container:hover .overlay {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.text {
  color: white;
  font-size: 15px;
  position: absolute;
   top: 50%;
  left: 50%; 
   -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); 
  text-align: center;
}

h2,p{
    text-align:center;
}


.light-header{
  padding-bottom:2rem;
  color:#aaaaaa;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;
}

h2{
  color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
}
}



@media width and (max-width: 880px) {

    .wrapper{
        display:grid;
        grid-template-columns:1fr 1fr;
        /* padding-left:2rem;
        padding-right:2rem; */
        /* width:50rem;
        height:50rem; */

       /* grid-gap:3rem; */
     
    }

   .image{
    padding:2rem;
    width:50rem;
    height:50rem;
   }
  } 

   .container {
   display:grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  
  align-items: center;
  img {
      max-width: 100%;
      height: 100%;
      object-fit:contain;
    }
}




    `
  return (
    <Gallery2>

       
<h2>Autism Outreach</h2>
<p className='light-header'>University Of Port-Harcourt Chapter.</p>


<div className='wrapper'> 
<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
        <h2> OUTREACHES</h2>
        <p> At Youth Neuroscience Association of Nigeria, We carry out sensitizations outreaches to communities to remind them about their Mental health and other conditions related to their Neuro-health.</p>
    </div>
  </div>
</div>

<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
        <h2>SENSITIZATIONS IN ELEMENTARY AND HIGH SCHOOLS </h2>
        <p>With this initiative, our goal is to promote great opportunities for those who seek a career in Neuroscience,by educating them early and providing enlightenment for them about Neuroscience and opportunities available for them. </p>
    </div>
  </div>
</div>

<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
        <h2>BRAINBEE COMPETITIONS</h2>
        <p>With our organization’s mission always in mind, we strive every year to sensitize and prepare high school students for the annual brainbee competitions for eligibility at international competitions.</p>
    </div>
  </div>
</div>

<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
        <h2>WEBINARS</h2>
        <p>At Youth Neuroscience Association of Nigeria, we are dedicated to stepping up our efforts in addressing issues of knowledge gap in Neuroscience across various fields. We conduct bi-monthly webinars with experts presenting Lectures for young Undergraduates across various fields of interest.</p>
    </div>
  </div>
</div>

<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
        <h2>BRAIN AWARENESS WEEK CAMPAIGN</h2>
        <p>We join the global community with Dana Foundation to promote the importance of the brain and and Mental health.</p>
    </div>
  </div>
</div>

<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
        <h2>JOURNAL CLUB MEETINGS</h2>
        <p>Our Undergraduates create time to get to get very familiar with Neuroscience through a bi-weekly Journal club meeting.</p>
    </div>
  </div>
</div>

</div>
    </Gallery2>
  )
}

export default AboutActivities