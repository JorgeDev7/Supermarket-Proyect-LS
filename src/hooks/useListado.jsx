import { useContext } from "react";
import ListadoContext from "../context/listadoProvider";

const useListado = () => {
    return useContext(ListadoContext);
}

export default useListado;