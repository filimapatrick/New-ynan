import React from 'react';
import styled from 'styled-components';
import A1 from '../image/main-home/sample.jpg';
import AnimatedButton from './AnimatedButton';

function HomeSubsection4() {
    const HomeSubsectionStyle = styled.div ` 
               @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
    background-color:gray;
    padding-top:4rem;
    padding-bottom:4rem;
    background-color:rgb(243,244,246);
    

    .header{
        text-align:center;
    }
    h2{
        padding-top:2rem;
        padding-bottom:2rem;
    }
    .wrapper{
        display: flex;
        flex-wrap: wrap;
    }

    .container{
        height: 40rem;
        width:25rem;
    }

    .image{
        height:30rem;
        width:25rem;
        object-fit: cover;
    }

    .image img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .title{
        height:3rem;
        width:25rem;
        text-align: center;
        color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
    }

    p{
        text-align: center;

    }

    h2{
    color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;

}

.light-header{
 
 color:#aaaaaa;
 font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;

}
    `
  return (
    <HomeSubsectionStyle>
          <div className='header'> 
    <p className='light-header'>MEET OUR LEADERSHIP TEAM</p>
    <h2>YNAN Leadership</h2>
    </div>
   <div className="wrapper">
  
<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>


<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>


<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='light-header'>Who Are You</div>
</div>
<AnimatedButton text={'See Our Advisory Board Members'} />
   </div>
 
    </HomeSubsectionStyle>
  )
}

export default HomeSubsection4