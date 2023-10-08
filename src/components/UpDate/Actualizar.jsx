import { useEffect, useState, useContext } from "react";
import "../Create/create.css";
import { useNavigate, useParams } from "react-router-dom";
import { ContextUsers } from "../../context/ProviderUser";

const Actualizar = () => {
  const [mensaje,setMensaje]=useState("");
  const params = useParams();
  //traemos el contexto que tiene la lista de usuarios
  const { users, setUsers } = useContext(ContextUsers);
  const [user, setUser] = useState({
    name: "",
    identity: "",
    email: "",
    phone: "",
  });
  const navegar = useNavigate();
  const handlerInputEdit = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const userFind = users.find((u) => u.identity === params.identity);
    setUser({ ...userFind });
  }, []);

  const actualizarUsuario = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch(process.env.REACT_APP_URL_API+"/up-date-user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const responseData=await request.json()
      setMensaje(responseData.message);
      if (responseData.response) {
        // navegar("/")
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <div className="container">
        <div className="registro_user">
          <h1 className="titulo">Editar Registro</h1>
          <div className="container__top">
          {mensaje.length>0?<span className="msg_user">{mensaje}</span>:""}
          </div>
        </div>
        <form className="container__users ct_register ">
          <div className="registro">
            <input
              onInput={(e) => handlerInputEdit(e)}
              name="name"
              type="text"
              value={user.name}
              className="input_registro"
              placeholder="Nombre"
            />
            <input
              onInput={(e) => handlerInputEdit(e)}
              name="identity"
              type="text"
              readOnly
              value={user.identity}
              className="input_registro"
              placeholder="Cedula"
            />
            <input
              onInput={(e) => handlerInputEdit(e)}
              name="email"
              type="text"
              value={user.email}
              className="input_registro"
              placeholder="Correo"
            />
            <input
              onInput={(e) => handlerInputEdit(e)}
              name="phone"
              type="text"
              value={user.phone}
              className="input_registro"
              placeholder="Telefono"
            />
            <div className="contanier__btns-create">
              <button
                className="btn-action danger"
                onClick={() => {
                  navegar("/");
                }}
              >
                CANCELAR
              </button>
              <button
                className="btn-action"
                onClick={(e) => {
                  actualizarUsuario(e);
                }}
              >
                GUARDAR
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };


export default Actualizar;
