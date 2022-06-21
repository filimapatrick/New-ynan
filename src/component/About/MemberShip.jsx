import React from 'react';
import styled from 'styled-components';

function MemberShip() {
    const MemberShipStyle = styled.div ` 
    height:35rem;
    background-color:rgb(255,255,255);
    display: flex;
    flex-wrap: wrap;
    padding-top:4rem;
    justify-content:center;
    padding-left:7rem;
    padding-right:7rem;
    

.right-image{
    width:40rem;
    height:32rem;
   padding-bottom:2rem;
}

    .right-image img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }


.left-text{
    width:40rem;
    height:30rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    text-align:center;
    padding-top:7rem;
}

p,h6,h2{
    text-align:center;
    padding-bottom:1rem;
}
   
hr{
  width:4rem;
  height:3px;
  color:green;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:2rem;
}
    `
  return (
    <MemberShipStyle>
      <h6>WOMEN IN NEUROSCIENCE, NIGERIA</h6>
      <div className='wrapper'>

<div className='membersip'>
  <h2>Membership</h2>
  <hr/>
<p> The award was launched in 2018 by ECO foundation. The noble idea is to empower and inspire the young female students to pursue a career in neuroscience. To this effect, ECO Foundation offers an annual award to the best neuroscience student and best female neuroscience student in Nigeria.

Find a list of previous awards here.

</p>
</div>


<div className='membersip'>
<h2>Awards</h2>
<hr/>
<p>Our membership spans from eminent & very well established neuroscientists to undergraduate students who are starting to develop their interest in neuroscience. We have an inclusive policy and would encourage any person with a prerequisite and professional interest in Neuroscience to become a member of WIN Nigeria</p>
  </div>

      </div>
    </MemberShipStyle>
  )
}

export default MemberShip
