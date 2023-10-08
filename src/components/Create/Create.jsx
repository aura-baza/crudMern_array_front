import React, { useState } from 'react'
import "../List/list.css"
import "./create.css"
import { useNavigate } from 'react-router-dom';

const Create = () => {
  //estado para manejar los mensajes deacuerso a la accion que se haga.
  const [mensaje,setMensaje]=useState("");
  //para navegar en un componente y otro
  const navegar= useNavigate();
  // aqui estamos creando un estado para crear el usuario nuevo
  const [newUser,setNewUser]=useState({name:"", identity:"", email:"", phone:""});
  //aquí reamos la funcion que creará cada usuario desde el formulario, tomando el valor de los input
  const createNewUser =(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value});

  }
  const addUser=async(e)=>{
    e.preventDefault();
    try {
      if (newUser.name==="" || newUser.identity==="" || newUser.email==="" || newUser.phone==="") {
        alert("Hay campos vacíos")
      }else{
        const request=await fetch(process.env.REACT_APP_URL_API+"/create-user",{
          method:"POST",
          "headers":{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser)
          });
    
          const dataResponse=await request.json();
          // console.log(dataResponse);
          setInterval(()=>{
            setMensaje(dataResponse.message)
          },500)
          
          if (dataResponse.response===true) {
            setNewUser({name:"", identity:"", email:"", phone:""});
            // navegar("/")
          }
          
        }
      }catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <div className="registro_user">
      <h1 className="titulo">Nuevo Registro</h1>
      <div className="container__top">
      {mensaje.length>0?<span className="msg_user">{mensaje}</span>:""}
      </div>
      </div>
      <form className="container__users ct_register ">
        <div className="registro">
          <input type="text" className='input_registro'  value={newUser.name} name='name' onInput={(e)=>createNewUser(e)} placeholder='Nombre'/>
          <input type="number" className='input_registro' value={newUser.identity} name='identity' onInput={(e)=>createNewUser(e)} placeholder='Cedula'/>
          <input type="email" className='input_registro' value={newUser.email} name='email' onInput={(e)=>createNewUser(e)} placeholder='Correo'/>
          <input type="number" className='input_registro' value={newUser.phone} name='phone' onInput={(e)=>createNewUser(e)} placeholder='Telefono'/>
          <div className="contanier__btns-create">
            <button className='btn-action danger' onClick={()=>{navegar("/")}}>VOLVER</button>
            <button className='btn-action' onClick={(e)=>addUser(e)}>GUARDAR</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Create;