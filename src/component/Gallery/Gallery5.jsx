import React from 'react';
import styled from 'styled-components';

import S1 from '../../image/Soot/S1.jpg'
import S2 from '../../image/Soot/S2.jpg'
import S3 from '../../image/Soot/S3.jpg'
import S4 from '../../image/Soot/S4.jpg'


function Gallery5() {
  const GalleryStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata|Source+Sans+Pro:200,300,400,600');

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 padding-top: 2rem;
 /* padding-bottom: 2rem; */
  overflow: hidden;

  h1 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 22px;
  color: #151E3F;
  font-weight: 300;
  letter-spacing: 2px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
    flex-wrap: wrap;
  > * {
    margin: 5px;
  }
}

.media {
  width: 300px;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  img {
      max-width: 100%;
      height: auto;
      object-fit: fill;
    }
}

.layer {
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 90%;
  background: #FFF;
  color: #151E3F;
  transition: all 0.9s ease;
  p {
    transition: all 0.9s ease;
    transform: scale(0.1)
  }
}

p {
  font-family: 'Inconsolata', monospace;
  text-align: center;
  font-size: 15px;
  letter-spacing:1px;
}

.media:hover .layer {
  opacity: 0.8;
  width: 90%;
  transition: all 0.5s ease;
  p {
    transform: scale(1);
    transition: all 0.9s ease;
  }
}

@media width and  (max-width: 800px){
  body {
    transform: scale(0.6);
  }
  margin-top: 2rem;
  padding-left: 3rem;
}


@media width and (max-width: 600px) {
    .wrapper {
    display: block;
    > * {
      margin: 10px;
    }
  }

  .media {
  width: 500px;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
      max-width: 100%;
      height: 100%;
      object-fit:contain;
    }
}

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


  `;
  return (
    <GalleryStyle>
      <h2>Black Soot Sensitization</h2>
      <p className='light-header'>University Of Port-Harcourt</p>
     
<div class="wrapper">
  
<div class="media">
<div class="layer">
    <p>Addressing the soot incidence and its impact on the residence of People in Port Harcourt, Rivers State.</p>
  </div>
  <img src={S1} alt="" />
</div>


 <div class="media">
<div class="layer">
    <p>Addressing the soot incidence and its impact on the residence of People in Port Harcourt, Rivers State.</p>
  </div>
  <img src={S2} alt="" />
</div>

 <div class="media">
<div class="layer">
    <p>Addressing the soot incidence and its impact on the residence of People in Port Harcourt, Rivers State.</p>
  </div>
  <img src={S3} alt="" />
</div>


 <div class="media">
<div class="layer">
    <p>Addressing the soot incidence and its impact on the residence of People in Port Harcourt, Rivers State.</p>
  </div>

  <img src={S4} alt="" />
</div>
 <div class="media">




  {/* <img src={A11} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>Stapple Chase sessin with the students</p>
  </div>

  <img src={A12} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>Award Given session By Dr.Mrs Orish and Dr.Ebere</p>
  </div>

  
<img src={A14} alt="" />
</div>
   <div class="media">
<div class="layer">
    <p>Brain perfusion session with Dr.Mrs Orish</p>
  </div>
<img src={A15} alt="" /> */}
</div>
</div>
      </GalleryStyle>
  )
}

export default Gallery5















