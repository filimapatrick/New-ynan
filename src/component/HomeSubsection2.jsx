import React from 'react';
import styled from 'styled-components';
import M4 from '../image/main-home/M4.jpg';
function HomeSubsection2() {
    const HomeSubsection2 = styled.div ` 
       @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
    display: flex;
    flex-wrap: wrap;
    padding-top:4rem;
    justify-content:center;
    

.left-image{
    width:28rem;
    height:32rem;
    padding-top:3rem;
    padding-bottom:5rem;
}

    .left-image img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }


.right-text{
    width:40rem;
    height:30rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    text-align:center;
    padding-top:4rem;
    padding-left:1rem;
    padding-right:2rem;
}

p{
    text-align:center;
    color:#aaaaaa;
  font-size:20px;

    
}


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

@media screen and (max-width: 375px) {
    .right-text{
        height:40rem;
    }
  }
    `
  return (
    <HomeSubsection2>
   <div className="left-image" >
    <img src={M4} alt="Avatar"/>
   </div>


<div className="right-text" >
<p className='light-header'>Youth Neuroscience Association Of Nigeria</p>
    <h2>Why Youth Neuroscience, Nigeria?</h2>
    <p>Youths are underrepresented in neuroscience fields and are less engaged in them. We need more energetic young people at the table. To that end, a formal and impact-oriented structure that provides much-needed guidance for aspiring young neuroscientists is required.</p>
{/* <a class="btn btn--lg-3 btn-primary text-white shadow--primary-2 rounded-50" href="#">Learn More</a> */}
</div>
    </HomeSubsection2>
  )
}

export default HomeSubsection2