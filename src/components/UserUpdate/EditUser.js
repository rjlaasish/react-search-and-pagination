import React, { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import {jsondata} from '../../pages/Home'

function EditUser() {
const emailRef=useRef();
const nameRef=useRef();
const history=useHistory();
const {id}=useParams();
const [error,setError]=useState('');


const [data, setData]=useState({name:'',email:''});
const handleSubmit=()=>{
  if(nameRef.current.value==""||emailRef.current.value==""){
    return setError("Fields cannot be empty!")
  }
jsondata[id-1]={id,name:nameRef.current.value,email:emailRef.current.value}
console.log(jsondata[id-1])
history.push('/')
}

const loaduser=()=>{
var mydata=jsondata.filter(datas=>datas.id==id)
setData(...mydata)
}

const onChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
}

useEffect(()=>{
    loaduser();
    // console.log(data)
},[]);

  return (
      <>
      <h2 style={{marginLeft:"40%"}}>Edit User</h2> 
      {error && <p style={{marginLeft:"40%",fontSize:"20px",color:"red"}}>{error}</p> }
    <div style={{display:'flex', justifyContent:"center", marginTop:"100px"}}>
   
      <form noValidate autoComplete="off">
        <TextField id="name" label="Name" name="name"inputRef={nameRef} value={data && data.name} onChange={e=>onChange(e)}/>
        <br/>
        <br/>
        <TextField id="email" label="Email" name="email" inputRef={emailRef} value={data && data.email} onChange={e=>onChange(e)}/>
        <br/>
        <br/>

        <Button variant="contained" color="primary" onClick={()=>handleSubmit()}>
          Save
        </Button>
      </form>
    </div>
    </>
  );
}

export default EditUser;
