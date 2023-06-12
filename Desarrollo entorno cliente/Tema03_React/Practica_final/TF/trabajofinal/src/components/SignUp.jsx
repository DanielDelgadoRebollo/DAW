import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";


function Register() {

    const auth = getAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  
  
    
    function submit(){
      
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Usuario creado con exito")
      window.history.back();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      // ..
    });
  }
      
    
  
    return (
  
     
  
      <div className='container' style={{marginTop:'100px', borderColor:'black',borderWidth:'medium', height:'1000px'}}>
      <div >
         <h1 style={{textAlign:'center', color:'black'}}>Registrar Usuario</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{color:"black"}} >Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email}onChange={(ev)=>setEmail(ev.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginTop:"10px"}}>
          <Form.Label style={{color:"black"}} >Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}  onChange={(ev)=>setPassword(ev.target.value)} />
          <Form.Label style={{color:"black"}} >Repeat password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}/>
        </Form.Group>
        <Button variant="light" onClick={submit}>
          Login
        </Button>
  
      </div>
     </div>
    );
  }
    
  
  
  export default Register;