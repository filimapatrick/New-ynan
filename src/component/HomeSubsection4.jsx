import React from 'react';
import styled from 'styled-components';
import A1 from '../image/Lecturers/Lekpa.jpg';

function HomeSubsection4() {
    const HomeSubsectionStyle = styled.div ` 
    background-color:gray;
    padding-top:4rem;
    padding-bottom:4rem;
    background-color:rgb(243,244,246);
    

    .header{
        text-align:center;
    }
    h4{
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
        font-size: 1.5rem;
        font-weight: bold;
    }

    p{
        text-align: center;

    }
    `
  return (
    <HomeSubsectionStyle>
          <div className='header'> 
    <i>MEET OUR LEADERSHIP TEAM</i>
    <h4>WIN Leadership</h4>
    </div>
   <div className="wrapper">
  
<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>


<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>

<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>


<div className='container'> 
<div className='image'>
<img src={A1} alt=""/>
</div>

<div className='title'>Name</div>
<div className='text'>Who Are You</div>
</div>
   </div>
    </HomeSubsectionStyle>
  )
}

export default HomeSubsection4