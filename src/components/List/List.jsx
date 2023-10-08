import React, { useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';
import { ContextUsers } from '../../context/ProviderUser';

const List = () => {
  //estado para manejar los mensajes deacuerso a la accion que se haga.
  const [mensaje,setMensaje]=useState("");
  const navegar= useNavigate();
  const {users,setUsers}= useContext(ContextUsers);
  useEffect(()=>{
    const getAllUsersRequest=async ()=>{
      try {
        const request=await fetch("http://localhost:4000/get-all-users");
        const response=await request.json();
        // console.log(response.data);
        setUsers([...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsersRequest();
  },[])
 const deleteUserRequest=async(identity)=>{
  try {
    const request = await fetch(process.env.REACT_APP_URL_API+"/delete-user/"+identity, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    // console.log(request);
    const responseData=await request.json()
    setMensaje(responseData.message);
    if (responseData.response) {
     const list=users;
     list.splice(responseData.index,1);
     setUsers([...list]);
    }
  } catch (error) {
    
  }
 }
  return (
    <div  className="contanier">
      <h1 className="titulo">Registro de usuarios</h1>
      <div className="container__top">
      <button className="btn_add" onClick={()=>{navegar("/crear")}}>AGREGAR</button>
      {mensaje.length>0?<span className="msg_user">{mensaje}</span>:""}
      </div>
      <div className="container__users">
        {users.map((user)=>{
        return(
          <div className="user">
          <span className="data">{user.name} {user.identity}{user.email}{user.phone}</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit" onClick={()=>{navegar("/actualizar/"+user.identity)}}></i></span>
            <span><i class="uil uil-trash-alt btn-delete" onClick={()=>deleteUserRequest(user.identity)}></i></span>
          </div>
        </div>
        )
        })}
      </div>
    </div>
  )
}

export default List