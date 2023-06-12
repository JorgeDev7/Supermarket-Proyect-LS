import { useState, useEffect, createContext } from 'react'

const ListadoContext = createContext();

const ListadoProvider = ({ children }) => {

    const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) ?? []);

    useEffect(() => {
        const setLS = () => {
            localStorage.setItem('productos', JSON.stringify(productos))
        }

        setLS();
    }, [productos])

    const eliminarProducto = nombre => {
        const productoEliminado = productos.filter(producto => producto.nombre !== nombre);
        setProductos(productoEliminado);
    }

    return (
        <ListadoContext.Provider
            value={{
                productos,
                setProductos,
                eliminarProducto
            }}
        >
            {children}
        </ListadoContext.Provider>
    )
}

export {
    ListadoProvider
};

export default ListadoContext;