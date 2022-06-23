import React from 'react';
import styled from 'styled-components';
// import A1 from '../../image/Lecturers/Lekpa.jpg';
// import InvolvedSubsection1 from './InvolvedSubsection1';
import m10 from '../../image/main-home/m10.jpg';
import m11 from '../../image/main-home/m11.jpg';
import m12 from '../../image/main-home/m12.jpg';
function InvolvedSubsection3() {
    const HomeSubsectionStyle = styled.div ` 
  
    padding-top:4rem;
    padding-bottom:4rem;
  
    

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
        height:40rem;
        width:25rem;
     
    }

    .image{
        height:20rem;
        width:auto;
        
    }

    .image img{
        height:100%;
        width:100%;
        object-fit:cover;
       
    }
    .title{
        text-align:center;
        height:5rem;
        padding-top:1rem;
    }

p{
    height:4rem;
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
    
    `
  return (
    <HomeSubsectionStyle>
          <div className='header'> 
    <p className='light-header'>Our Activities</p>
    {/* <h2>WIN Leadership</h2> */}
    </div>

   <div className="wrapper">


  <div className='container'>
    <div className='image'>
        <img src={m11} alt=''/>
    </div>
    <div className='activity'>activity</div>
    <div className='title'>WIN NG Neuroscience Outreach Holds in Edo University for Female Students</div>
    <p>The University of Port Harcourt Chapter of Women in Neuroscience, Nigeria celebrated the International Day of Girls in Science this February. The International Day of Girls in Science was establis… </p>
  </div>


  <div className='container'>
    <div className='image'>
        <img src={m10} alt=''/>
    </div>
    <div className='activity'>activity</div>
    <div className='title'> WIN Uniport Chapter, Celebrates International Day for Women and Girls in Science</div>
    <p>A neuroscience outreach held at Edo University Iyamho last December for uniquely designed for 200 level MBBS female students. The outreach was organized by Itohan Roli Osahon and the Head of Depa… </p>
  </div>

  <div className='container'>
    <div className='image'>
        <img src={m12} alt=''/>
    </div>
    <div className='activity'>news</div>
    <div className='title'> on 29 May, 2020 by admin</div>
    <p>WIN Mentorship Circle WIN invites women pursuing/interested in a career in neuroscience to apply for the mentorship program. The program is open for all women at a graduate or post-graduate lev… </p>
  </div>



   </div>
    </HomeSubsectionStyle>
  )
}

export default InvolvedSubsection3