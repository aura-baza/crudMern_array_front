import React from 'react';
import "../Create/create.css";
import { useNavigate } from 'react-router-dom';

const Actualizar = () => {
  const navegar=useNavigate();
  return (
    <div className="container">
      <div className="registro_user">
      <h1 className="titulo">Editar Registro</h1>
      <div className="container__top">
      <span className="msg_user">Mensajes a los usuarios</span>
      </div>
      </div>
      <form className="container__users ct_register ">
        <div className="registro">
          <input type="text" className='input_registro' placeholder='Nombre'/>
          <input type="text" className='input_registro' placeholder='Cedula'/>
          <input type="text" className='input_registro' placeholder='Correo'/>
          <input type="text" className='input_registro' placeholder='Telefono'/>
          <div className="contanier__btns-create">
            <button className='btn-action danger'onClick={()=>{navegar("/")}}>CANCELAR</button>
            <button className='btn-action' onClick={()=>{navegar("/")}}>GUARDAR</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Actualizar;