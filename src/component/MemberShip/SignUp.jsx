import React from 'react';
import { useState,useEffect } from 'react';
import styled from 'styled-components';
import {db} from '../../firebase-config';
import {collection,getDocs,addDoc} from 'firebase/firestore';
import {Link} from 'react-router-dom'

function Login() {
    const LoginStyle = styled.div` 
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    margin-top:4rem;
    background-image: url('./7Saf.gif');
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%; 
    letter-spacing: 0.5px;
  

    form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #e5e5e5;
}
button{
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}

 form{
   
    background-color: rgba(255,255,255,0.13);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    margin-bottom:2rem;
    width:30rem;
    margin-top:3rem;
 }




    
    `

    const [user, setUser] = useState([]);
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState(0);
    const [surname, setSurname]= useState('');
    const usersCollectionRef = collection(db,'Login');
    const [file, setFile] = useState();
 
    useEffect(()=>{
      const getUsers = async () =>{

        const data = await getDocs(usersCollectionRef);
        console.log(data)
       setUser(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
      }
      getUsers();
    },[])

  const createUser = async () =>{
    await addDoc(usersCollectionRef, {name:newName, age:newAge})
  }
  
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}


  return (
    <LoginStyle>
      
      <div className='Login'>
      <form>
        <h3>Sign Up Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>
        <br/>
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>
        <br/>

        <p>Add Image:</p>
            <input type="file" onChange={handleChange} />
            <img src={file} style={{height:'2rem'}} />
            <br/>
        <label for="university">University</label>
        <input type="text" placeholder="university" id="university"/>
        <button>Sign Up Here</button>
      <p> Already Have An account? <Link to='/LoginSection'>Sign In Here</Link> </p>
        </form>

     </div>
{ 
  user.map((user)=> {
    return(
      <div>
{''}
<h1>Welcome{user.name}</h1>
      </div>
    )
  })
}
    </LoginStyle>
  )
}

export default Login
