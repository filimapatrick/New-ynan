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

  const Excos2 = styled.div` 
  body
{
  background-color:#f2f2f2;
  font-family: 'RobotoDraft', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

*
{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h5
{
  margin:0px;
  font-size:1.4em;
  font-weight:700;
}

p
{
  font-size:12px;
}
.container{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  flex-direction:row;
}

.team{
 margin-left:45%;
}
.center
{

  display: flex;
  justify-content: center;
  align-items: center;
  margin:2rem;
}

/* End Non-Essential  */

.property-card
{
  height:24em;
  width:19em;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  position:relative;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius:16px;
  overflow:hidden;
  -webkit-box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
}
/* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

/* Top Half of card, image. */

.property-image
{
  height:25em;
  width:20em;
  /* padding:1em 2em; */
  position:Absolute;
  top:0px;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-size:cover;
  background-repeat:no-repeat;
}

.property-image img{
  height:100%;
  width:100%;
  border-radius:10px;
}

/* Bottom Card Section */

.property-description
{
  background-color: #FAFAFC;
  height:6em;
  width:19em;
  position:absolute;
  bottom:0em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align:center;
}

/* Social Icons */



/* Property Cards Hover States */

.property-card:hover .property-description
{
  height:0em;
  padding:0px 1em;
}
.property-card:hover .property-image
{
  height:24em;
}

.property-card:hover .property-social-icons
{
  background-color:white;
}

.property-card:hover .property-social-icons:hover
{
  background-color:blue;
  cursor:pointer;
}


/* Optional

.property-image-title
{
text-align:center;
position:Relative;
top:30%;
opacity:0;
transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
color:black;
font-size:1.2em;
}

.property-card:hover .property-image-title
{
opacity:1;
}

*/
  `
  return (
    <Excos2>
        <div className='team'>MEET OUR STUDENT TEAM</div>
      <div className='container'> 
   
       <div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
      <img src ={E1} alt='' />
      </div></a>
    <div class="property-description">
      <h5> Samuel </h5>
      <p>President</p>
    </div>
    
  </div>
</div>




<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
      <img src ={E2} alt='' />
      </div></a>
    <div class="property-description">
      <h5> Rhoda </h5>
      <p>Treasurer</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
      </div>
    </a>
  </div>
</div>




<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
      <img src ={E3} alt='' />
      </div></a>
    <div class="property-description">
      <h5> ALera </h5>
      <p>Secretary</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
      </div>
    </a>
  </div>
</div>


<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <img src ={E4} alt='' />
      </div></a>
    <div class="property-description">
      <h5>Okoli Obinna </h5>
      <p>PR</p>
    </div>
    
  </div>
</div>



<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <img src ={E5} alt='' />
      </div></a>
    <div class="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum </p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
      </div>
    </a>
  </div>
</div>

<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <img src ={E6} alt='' />
      </div></a>
    <div class="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
      </div>
    </a>
  </div>
</div>

<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <img src ={E7} alt='' />
      </div></a>
    <div class="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata.</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
      </div>
    </a>
  </div>
</div>


<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <img src ={E8} alt='' />
      </div></a>
    <div class="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata.</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
      </div>
    </a>
  </div>
</div>




</div>

    </Excos2>
  )
}


export default Excos2
















// function Excos2() {
//   return (
//     <Excos2Stle>
//       <div className='wrapper'>
//         <h1 className='light-header'>Meet Our Leadership Team</h1>
//            <h2>YNAN Leadership</h2>
//       <div className='container'>
//         <div className="card">
//   <img src={E1} className="card__image"/>
//   <div className="card__overlay">
//     <div className="overlay__text">
//       <h3>Mountain Trips</h3>
//       <p>Plan your next adventure</p>
//       {/* <a href="#" className="button">View Trips</a> */}
//     </div>
//   </div>
// </div>

// <div className="card">
//   <img src={E2} className="card__image"/>
//   <div className="card__overlay">
//     <div className="overlay__text">
//       <h3>Ogboda Rhoda</h3>
//       <p>Plan your next adventure</p>
//       <a href="#" className="button">View Trips</a>
//     </div>
//   </div>
// </div>

// <div className="card">
//   <img src={E3} className="card__image"/>
//   <div className="card__overlay">
//     <div className="overlay__text">
//       <h3> Alerah Happiness N</h3>
//       <p>Plan your next adventure</p>
//       <a href="#" className="button">View Trips</a>
//     </div>
//   </div>
// </div>


// <div className="card">
//   <img src={E4} className="card__image"/>
//   <div className="card__overlay">
//     <div className="overlay__text">
//       <h3>Okoli Obinna</h3>
//       <p>Provost 4</p>
//       <a href="#" className="button">View Trips</a>
//     </div>
//   </div>
// </div>


// <div className="card">
//   <img src={E5} className="card__image"/>
//   <div className="card__overlay">
//     <div className="overlay__text">
//       <h3> Paul Maigari</h3>
//       <p>Provost 3</p>
//       <a href="#" className="button">View Trips</a>
//     </div>
//   </div>
// </div>


// <div className="card">
//   <img src={E6} className="card__image"/>
//   <div className="card__overlay">
//     <div className="overlay__text">
//       <h3>Muhammad.Bashir</h3>
//       <p>Provost1</p>
//       <a href="#" className="button">View Trips</a>
//     </div>
//   </div>
// </div>


// <div className="card">
//   <img src={E7} className="card__image"/>
//   <div className="card__overlay">
//     <div className="overlay__text">
//       <h3>Emmanuel Gabriel</h3>
//       <p>Provost2</p>
//       <a href="#" className="button">View Trips</a>
//     </div>
//   </div>
// </div>

// <div className="card">
//   <img src={E8} className="card__image"/>
//   <div className="card__overlay">
//     <div className="overlay__text">
//       <h3>Nnabugwu Jessica</h3>
//       <p>Social Media Manager</p>
//       <a href="#" className="button">View Trips</a>
//     </div>
//   </div>
// </div>

//         </div>
    
  
    

//       </div>
        
    
        
//     </Excos2Stle>
//   )
// }

// export default Excos2;

// const Excos2Stle = styled.div` 
//   @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
// padding-top:2rem;
//   /* .light-header{
 
//  color:#aaaaaa;
//  font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:1.5rem;

// } 

// h2{
//     color:black;
//   font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:2rem;
//   } */

//   h3{
//     color:black;
//   }
// @media screen and (min-width: 1025px) {
//   .light-header{
 
//  color:#aaaaaa;
//  font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:1.5rem;


// } 

// h2{
//     color:black;
//   font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:2rem;
//   }
//   h1,h2{
//     text-align:center;
//   }
 
 
// .container{
//     display:flex !important;

// flex-wrap:wrap;
// justify-content:center;

// }

// h3{
//     margin-top:-10rem;
// }

// * {
// 	box-sizing: border-box;
// }



// .card {
// 	position: relative;
//   transition: all .5s ease-in;
//   width:20rem !important;
//   height: 25rem !important;
//   margin:2rem;
 
// }


// .card__image {

//   width: 100%;
//   height: 25rem;
//   /* margin-bottom:6rem; */
// }

// .card__image img{
//     height:100%;
//     width:100%;
// }

// .card__overlay {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 25rem;
//   width:20rem;
//   opacity: 0;
//   visibility: none;
//   transition: .5s ease;
//   background-color: #393839;
// }

// .card:hover .card__overlay {
//   opacity: 1;
// }

// .overlay__text {
//   color: white;
//   font-size: 16px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   text-align: center;
// }


// }




// @media screen and (max-width: 1025px) {
//   .light-header{
 
//  color:#aaaaaa;
//  font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:1.5rem;

// } 

// h2{
//     color:black;
//   font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:2rem;
//   }
// .container{
//     display:flex;

// flex-wrap:wrap;
// justify-content:center;
// padding-bottom:4rem;
// }



// * {
// 	box-sizing: border-box;
// }



// .card {
// 	position: relative;
//   transition: all .5s ease-in;
//   width:20rem;
//   height: 24rem;
//   margin:2rem;

// }


// .card__image {
//   /* display: block; */
//   width: 100%;
//   height: 24rem;
// }

// .card__overlay {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 24rem;
//   width: 20rem;
//   opacity: 0;
//   visibility: none;
//   transition: .5s ease;
//   background-color: #393839;
// }

// .card:hover .card__overlay {
//   opacity: 1;
// }

// .overlay__text {
//   color: white;
//   font-size: 10px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   text-align: center;
// }


// }





// @media screen and (max-width: 375px) {
//   .light-header{
 
//  color:#aaaaaa;
//  font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:1.5rem;

// } 

// h2{
//     color:black;
//   font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:2rem;
//   }
// .container{
//     display:flex;

// flex-wrap:wrap;
// justify-content:center;
// padding-bottom:4rem;
// }



// * {
// 	box-sizing: border-box;
// }



// .card {
// 	position: relative;
//   transition: all .5s ease-in;
//   width:20rem;
//   height: 24rem;
//   margin:2rem;

// }


// .card__image {
//   display: block;
//   width: 100%;
//   height: 24rem;
// }

// .card__overlay {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 24rem;
//   width: 18rem;
//   opacity: 0;
//   visibility: none;
//   transition: .5s ease;
//   background-color: #393839;
// }

// .card:hover .card__overlay {
//   opacity: 1;
// }

// .overlay__text {
//   color: white;
//   font-size: 10px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   text-align: center;
// }


// }




// @media screen and (max-width: 280px) {
//   .light-header{
 
//  color:#aaaaaa;
//  font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:1.5rem;

// } 

// h2{
//     color:black;
//   font-family: 'Bodoni Moda', serif;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Playfair Display', serif;
// font-size:2rem;
//   }
// .container{
//     display:flex;

// flex-wrap:wrap;
// justify-content:center;
// padding-bottom:4rem;
// }



// * {
// 	box-sizing: border-box;
// }



// .card {
// 	position: relative;
//   transition: all .5s ease-in;
//   width:20rem;
//   height: 24rem;
//   margin:2rem;

// }


// .card__image {
//   display: block;
//   width: 100%;
//   height: 24rem;
// }

// .card__overlay {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 24rem;
//   width: 12rem;
//   opacity: 0;
//   visibility: none;
//   transition: .5s ease;
//   background-color: #393839;
// }

// .card:hover .card__overlay {
//   opacity: 1;
// }

// .overlay__text {
//   color: white;
//   font-size: 10px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   text-align: center;
// }


// }

// `