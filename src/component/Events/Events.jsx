import React from 'react';
import styled from 'styled-components';
// import E1 from '../../image/activities/E1.jpg';
import E2 from '../../image/activities/E2.jpg';
import e3 from '../../image/activities/e3.jpg';
import e4 from '../../image/activities/e4.jpg';
import e5 from '../../image/activities/e5.jpg';
import e6 from '../../image/activities/e6.jpg';
import e7 from '../../image/activities/e7.jpg';
import e8 from '../../image/activities/e8.jpg';


function Events() {
    const Event = styled.div` 
margin-top:-33rem;
   
    .wrapper{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
    }

    .container{
        /* padding:1rem; */
        height:auto;
        width:40rem;
        position:relative;
    }

    .container img{
        height:100%;
        width:100%;
        object-fit:inherit;
    }

    .overlay{
        position:absolute;
        background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
        height:26rem;
        width:26rem;
        top:2rem;
        opacity:1;
        justify-content:center;
        -webkit-transform: scale(0);
-ms-transform: scale(0);
transform: scale(0);
-webkit-transition: .3s ease;
transition: .3s ease;
    }

    p,h2{
       
        text-align:center;
        /* padding-top:8rem; */
        

        
    }

    .container:hover .overlay {
-webkit-transform: scale(1);
-ms-transform: scale(1);
transform: scale(1);
} 

h2{
    padding-top:8rem;
    color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
}
p{
    text-align:center;
    color:#aaaaaa;
    font-size:20px;
}



@media screen and (max-width: 1200px) {


.container{
    /* padding:2rem; */
    height:30rem;
    width:40rem;
    position:relative;
    margin-bottom:2rem;
}

.container img{
    height:100%;
    width:100%;
}

.overlay{
    position:absolute;
    background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
    height:30rem;
    width:38.5rem;
    /* top:2rem; */
    bottom:0;
    /* margin-top:4; */
    opacity:1;
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

h2{
padding-top:9rem;
}

}






@media screen and (min-width: 1024px) {


.container{
    /* padding:2rem; */
    height:30rem;
    width:40rem;
    position:relative;
    margin-bottom:2rem;
}

.container img{
    height:100%;
    width:100%;
}

.overlay{
    position:absolute;
    background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
    height:30rem;
    width:38.5rem;
    /* top:2rem; */
    bottom:0;
    /* margin-top:4; */
    opacity:1;
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

h2{
padding-top:9rem;
}

}


@media screen and (max-width: 1020px) {


.container{
    padding:2rem;
    height:40rem;
    width:45rem;
    position:relative;
}

.container img{
    height:100%;
    width:100%;
}

.overlay{
    position:absolute;
    background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
    height:36rem;
    width:41rem;
    top:2rem;
    opacity:1;
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

h2{
padding-top:9rem;
}

}





@media screen and (max-width: 960px) {


    .container{
        padding:2rem;
        height:40rem;
        width:45rem;
        position:relative;
    }

    .container img{
        height:100%;
        width:100%;
    }

    .overlay{
        position:absolute;
        background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
        height:36rem;
        width:41rem;
        top:2rem;
        opacity:1;
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

h2{
    padding-top:9rem;
}

}
    
   
@media screen and (max-width: 760px) {

    .container{
        padding:2rem;
        height:35rem;
        width:35rem;
        position:relative;
    }

    .container img{
        height:100%;
        width:100%;
    }

    .overlay{
        position:absolute;
        background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
        height:31rem;
        width:30rem;
        top:2rem;
        opacity:1;
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

h2{
    padding-top:9rem;
}

}


@media screen and (max-width: 414px) {

.container{
    padding:2rem;
    height:35rem;
    width:35rem;
    position:relative;
}

.container img{
    height:100%;
    width:100%;
}

.overlay{
    position:absolute;
    background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
    height:31rem;
    width:22rem;
    top:2rem;
    opacity:1;
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

h2{
padding-top:9rem;
}

}


@media screen and (max-width: 375px) {

    .container{
        padding:2rem;
        height:35rem;
        width:35rem;
        position:relative;
    }

    .container img{
        height:100%;
        width:100%;
    }

    .overlay{
        position:absolute;
        background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
        height:31rem;
        width:20rem;
        top:2rem;
        opacity:1;
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

h2{
    padding-top:9rem;
}

}


    `
  return (
    <Event>
    
   <div className='wrapper'>


    <div className='container'>
     <img src={e8}/>
     <div className='overlay'>
        <h2>ECO AWARDS</h2>
       <p>We award Academic excellence amongst undergraduates who are best at Neuroscience across institutions in Nigeria..</p>
     </div>
    </div>

    <div className='container'>
     <img src={E2}/>
     <div className='overlay'>
        <h2>OUTREACHES</h2>
       <p>At Youth Neuroscience Association of Nigeria, We carry out sensitizations outreaches to communities to remind them about their Mental health and other conditions related to their Neuro-health.</p>
     </div>
    </div>

    <div className='container'>
     <img src={e5 }/>
     <div className='overlay'>
        <h2>SENSITIZATIONS IN ELEMENTARY AND HIGH SCHOOLS</h2>
       <p>With this initiative, our goal is to promote great opportunities for those who seek a career in Neuroscience,by educating them early and providing enlightenment for them about Neuroscience and opportunities available for them.</p>
     </div>
    </div>

    <div className='container'>
     <img src={e4}/>
     <div className='overlay'>
        <h2>BRAINBEE COMPETITIONS</h2>
       <p>With our organization’s mission always in mind, we strive every year to sensitize and prepare high school students for the annual brainbee competitions for eligibility at international competitions.</p>
     </div>
    </div>


    <div className='container'>
     <img src={e7}/>
     <div className='overlay'>
        <h2>JOURNAL CLUB MEETINGS</h2>
       <p>Our Undergraduates create time to get to get very familiar with Neuroscience through a bi-weekly Journal club meeting.</p>
     </div>
    </div>

    <div className='container'>
     <img src={e6}/>
     <div className='overlay'>
        <h2>WEBINARS</h2>
       <p>At Youth Neuroscience Association of Nigeria, we are dedicated to stepping up our efforts in addressing issues of knowledge gap in Neuroscience across various fields. We conduct bi-monthly webinars with experts presenting Lectures for young Undergraduates across various fields of interest.</p>
     </div>
    </div>

    <div className='container'>
     <img src={e3}/>
     <div className='overlay'>
        <h2>BRAIN AWARENESS WEEK CAMPAIGN</h2>
       <p>We join the global community with Dana Foundation to promote the importance of the brain and and Mental health..</p>
     </div>
    </div>

   </div>
    
    </Event>
  )
}

export default Events