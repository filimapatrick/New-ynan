import React from 'react';
import styled from 'styled-components';

function Gallery2() {
    const Gallery2 = styled.div` 

   
    
    .wrapper{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(18rem,1fr));
     
    }

    .container {
  position: relative;
  width: 100%;
  margin-bottom:2rem;
}

.image {
  display: block;
  width: 18rem;
  height: 15rem;
}

.image img{
    height:100%;
    width:100%;
}

.overlay {
  position: absolute;
  bottom: 0;
  /* left: 0;
  right: 0; */
  background-color: lightblue;
  overflow: hidden;
  width: 18rem;
  height: 15rem;
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
  font-size: 20px;
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





@media width and (min-width: 280px) {
   .image{
    padding:2rem;
    width:100%;
    height:100%;
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


@media width and (max-width: 760px) {

.image{
    padding:2rem;
    width:100%;
    height:100%;
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


@media width and (min-width:540px){
    .image{
    padding:2rem;
    width:100%;
    height:100%;
   }
  } 

   .container {
   display:grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display:flex;
  justify-content:center;
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

       
<h2>Image Hover Fullscreen Zoom</h2>
<p>Hover over the image to see the zoom effect.</p>


<div className='wrapper'> 
<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>

<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>

<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>

<div class="container">
  <img src="sample.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>

</div>
    </Gallery2>
  )
}

export default Gallery2