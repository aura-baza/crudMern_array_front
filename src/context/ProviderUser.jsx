// importamos react y los hooks que utilizaremos en el contexto.
import React,{useState,createContext} from "react";

// creamos el contexto guardandolo en una constante.
export const ContextUsers = createContext();

// creamos la funcion que proveerá el contexto 
const ProviderUsers = ({ children }) => {
  const [users, setUsers] = useState([]);
 // retormanos el contextos con su respectivo provider 
  return <ContextUsers.Provider value={{users, setUsers}}>{children}</ContextUsers.Provider>;
};

export default ProviderUsers;