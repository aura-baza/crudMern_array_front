import ProviderUsers from "./context/ProviderUser";
import Routers from "./routers/Routers";

function App() {
  return (
    <>
    <ProviderUsers>
    <Routers/>
    </ProviderUsers>
    </>
  );
}

export default App;
