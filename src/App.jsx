import Layout from "./components/Layout";
import { ListadoProvider } from "./context/listadoProvider";

function App() {

  return (
    <ListadoProvider>
      <Layout />
    </ListadoProvider>
  )
}

export default App
