import React from 'react';
import styled from 'styled-components';
import E1 from '../image/Escos/Samuel.jpg';
import E2 from '../image/Escos/Es1.jpg';
import E3 from '../image/Escos/Es3.jpg';
import E4 from '../image/Escos/Es4.jpg';
import E5 from '../image/Escos/Es5.jpg';
import E6 from '../image/Escos/Es6.jpg';
import E7 from '../image/Escos/Es7.jpg';
import E8 from '../image/Escos/Es8.jpg';

function Excos2() {
  return (
    <Excos2Stle>
      <div className='wrapper'>
        <h1 className='light-header'>Meet Our Leadership Team</h1>
           <h2>YNAN Leadership</h2>
      <div className='container'>
        <div className="card">
  <img src={E1} className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>Mountain Trips</h3>
      <p>Plan your next adventure</p>
      {/* <a href="#" className="button">View Trips</a> */}
    </div>
  </div>
</div>

<div className="card">
  <img src={E2} className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>Ogboda Rhoda</h3>
      <p>Plan your next adventure</p>
      <a href="#" className="button">View Trips</a>
    </div>
  </div>
</div>

<div className="card">
  <img src={E3} className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3> Alerah Happiness N</h3>
      <p>Plan your next adventure</p>
      <a href="#" className="button">View Trips</a>
    </div>
  </div>
</div>


<div className="card">
  <img src={E4} className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>Okoli Obinna</h3>
      <p>Provost 4</p>
      <a href="#" className="button">View Trips</a>
    </div>
  </div>
</div>


<div className="card">
  <img src={E5} className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3> Paul Maigari</h3>
      <p>Provost 3</p>
      <a href="#" className="button">View Trips</a>
    </div>
  </div>
</div>


<div className="card">
  <img src={E6} className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>Muhammad.Bashir</h3>
      <p>Provost1</p>
      <a href="#" className="button">View Trips</a>
    </div>
  </div>
</div>


<div className="card">
  <img src={E7} className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>Emmanuel Gabriel</h3>
      <p>Provost2</p>
      <a href="#" className="button">View Trips</a>
    </div>
  </div>
</div>

<div className="card">
  <img src={E8} className="card__image"/>
  <div className="card__overlay">
    <div className="overlay__text">
      <h3>Nnabugwu Jessica</h3>
      <p>Social Media Manager</p>
      <a href="#" className="button">View Trips</a>
    </div>
  </div>
</div>

        </div>
    
  
    

      </div>
        
    
        
    </Excos2Stle>
  )
}

export default Excos2;

const Excos2Stle = styled.div` 
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
padding-top:2rem;
  /* .light-header{
 
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
  } */

  h3{
    color:black;
  }
@media screen and (min-width: 1025px) {
  .light-header{
 
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
  h1,h2{
    text-align:center;
  }
 
 
.container{
    display:flex !important;

flex-wrap:wrap;
justify-content:center;

}

h3{
    margin-top:-10rem;
}

* {
	box-sizing: border-box;
}



.card {
	position: relative;
  transition: all .5s ease-in;
  width:20rem !important;
  height: 25rem !important;
  margin:2rem;
 
}


.card__image {

  width: 100%;
  height: 25rem;
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
  height: 25rem;
  width:20rem;
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
}


}




@media screen and (max-width: 1025px) {
  .light-header{
 
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
  /* display: block; */
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





@media screen and (max-width: 375px) {
  .light-header{
 
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
  width: 18rem;
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




@media screen and (max-width: 280px) {
  .light-header{
 
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
  width: 12rem;
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