import React from 'react';
import styled from 'styled-components';
import L1 from '../../image/Lecturers/Lekpa.jpg';

function Events() {
    const Event = styled.div` 
    .wrapper{
        display:flex;
        justify-content:center;
    }


@media screen and (min-width: 960px) {
    .container{
        padding:2rem;
        height:30rem;
        width:30rem;
        position:relative;
    }

    .container img{
        height:100%;
        width:100%;
    }

    .overlay{
        position:absolute;
        background-color:green;
        height:26rem;
        width:26rem;
        top:2rem;
        opacity:0.3;
        justify-content:center;
        -webkit-transform: scale(0);
-ms-transform: scale(0);
transform: scale(0);
-webkit-transition: .3s ease;
transition: .3s ease;
    }

    p,h2{
        color:white;
        text-align:center;
        z-index:1;
       
text-align: center;

        
    }

    .container:hover .overlay {
-webkit-transform: scale(1);
-ms-transform: scale(1);
transform: scale(1);
} 


}
    
   


    `
  return (
    <Event>
    
   <div className='wrapper'>


    <div className='container'>
     <img src={L1}/>
     <div className='overlay'>
        <h2>Here we are</h2>
       <p>This is awesom</p>
     </div>
    </div>


   </div>
    
    </Event>
  )
}

export default Events