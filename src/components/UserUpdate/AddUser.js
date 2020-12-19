import { Button, TextField } from "@material-ui/core";
import React, { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {jsondata} from '../../pages/Home'

function AddUser() {
const emailRef=useRef();
const nameRef=useRef();
const history=useHistory();
const [error,setError]=useState('');

const handleSubmit=()=>{
if(nameRef.current.value==""||emailRef.current.value==""){
  return setError("Fields cannot be empty!")
}
jsondata.push({id:jsondata.length+1,name:nameRef.current.value,email:emailRef.current.value})
console.log(jsondata)
history.push('/')
}

  return (
      <>
      <h2 style={{marginLeft:"40%"}}>Add User</h2> 
      {error && <p style={{marginLeft:"40%",fontSize:"20px",color:"red"}}>{error}</p> }

    <div style={{display:'flex', justifyContent:"center", marginTop:"100px"}}>
   
      <form noValidate autoComplete="off">
        <TextField id="name" label="Name" inputRef={nameRef}/>
        <br/>
        <br/>
        <TextField id="email" label="Email" inputRef={emailRef}/>
        <br/>
        <br/>

        <Button variant="contained" color="primary" onClick={()=>handleSubmit()}>
          Add
        </Button>
      </form>
    </div>
    </>
  );
}

export default AddUser;
