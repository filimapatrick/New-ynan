import React from 'react';
import styled from 'styled-components';

function SecondaryButton({text}) {
    const Secondary = styled.div` 
    @import 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300';
    height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Open Sans Condensed', sans-serif;


  .col {
  height: 100%;
}

div[class*=container] {
  text-align: center;
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .container-1 { background: #333; }
.container-2 { background: #4E598C; }
.container-3 { background: #8499B1; }
.container-4 { background: #9888A5; }
.container-5 { background: #7B6D8D; }
.container-6 { background: #565554; } */


 /* BUTTON STYLING */


.btn {
  position: relative;
  color: white;
  width: 256px;
  height: 64px;
  line-height: 64px;
  transition: all 0.3s;
  /* border:1px solid green; */
  span {
    transition: all 0.3s;
    transform: scale(1, 1);
  }
}

.btn::before, .btn::after {
  content: '';
  position: absolute;
  transition: all 0.3s;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.btn-one::before {
  left: 4px;
  z-index: 1;
  
  opacity: 0;
  background: rgba(255, 255, 255, 0.1);
  transform: scale(0.1, 1);
  border:1px solid green;
}

.btn-one:hover::before {
  opacity: 1;
  transform: scale(1, 1);
}

.btn-one::after {
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.btn-one:hover::after {
  transform: scale(1, .1);
  opacity: 0;
}

    
    `
  return (
    <Secondary>

<div className="col">
  <div className="container-1">
    <div className="btn btn-one">
      <span>{text}</span>
    </div>
  </div>
  </div>
    </Secondary>
  )
}

export default SecondaryButton;