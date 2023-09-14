import React from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';
const List = () => {
  const navegar= useNavigate();
  return (
    <div className="contanier">
      <h1 className="titulo">Registro de usuarios</h1>
      <div className="container__top">
      <button className="btn_add" onClick={()=>{navegar("/crear")}}>AGREGAR</button>
      <span className="msg_user">Mensajes a los usuarios</span>
      </div>
      <div className="container__users">
        <div className="user">
          <span className="data">datos usuario</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit" onClick={()=>{navegar("/actualizar")}}></i></span>
            <span><i class="uil uil-trash-alt btn-delete"></i></span>
          </div>
        </div>
        <div className="user">
          <span className="data">datos usuario</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit"></i></span>
            <span><i class="uil uil-trash-alt btn-delete"></i></span>
          </div>
        </div>
        <div className="user">
          <span className="data">datos usuario</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit"></i></span>
            <span><i class="uil uil-trash-alt btn-delete"></i></span>
          </div>
        </div>
        <div className="user">
          <span className="data">datos usuario</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit"></i></span>
            <span><i class="uil uil-trash-alt btn-delete"></i></span>
          </div>
        </div>
        <div className="user">
          <span className="data">datos usuario</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit"></i></span>
            <span><i class="uil uil-trash-alt btn-delete"></i></span>
          </div>
        </div>
        <div className="user">
          <span className="data">datos usuario</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit"></i></span>
            <span><i class="uil uil-trash-alt btn-delete"></i></span>
          </div>
        </div>
        <div className="user">
          <span className="data">datos usuario</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit"></i></span>
            <span><i class="uil uil-trash-alt btn-delete"></i></span>
          </div>
        </div>
        <div className="user">
          <span className="data">datos usuario</span>
          <div className="container__btns">
            <span><i class="uil uil-edit btn-edit" ></i></span>
            <span><i class="uil uil-trash-alt btn-delete"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List