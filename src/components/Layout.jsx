import { useState } from "react";
import Producto from "./Producto";
import useListado from "../hooks/useListado";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const categorias = [
    {
        id: 1,
        nombre: "Cocina"
    },
    {
        id: 2,
        nombre: "Limpieza y Aseo"
    },
    {
        id: 3,
        nombre: "Niños"
    },
    {
        id: 4,
        nombre: "Lacteos"
    },
    {
        id: 5,
        nombre: "Embutidos"
    },
    {
        id: 6,
        nombre: "Carnes"
    },
    {
        id: 7,
        nombre: "Lavandería"
    },
    {
        id: 8,
        nombre: "Otros"
    }
];

export default function Layout() {

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");

    const { productos, setProductos } = useListado();

    const almacenarProducto = e => {
        e.preventDefault();

        if (nombre === '' || categoria === "") {
            toast.error('Campos Vacíos')
            return;
        }


        setProductos([...productos, { nombre, categoria }]);
        setNombre("")
        setCategoria("")
    }

    return (
        <div className="container px-5 mx-auto">
            <header>
                <h1 className="mt-10 text-center text-3xl md:text-5xl font-extrabold uppercase">Supermercado</h1>
                <p className="text-center md:text-xl mt-5 font-medium"><span className="text-orange-500 font-bold">Administra</span>{' '}todos tus productos. Que nada se te olvide!</p>
            </header>

            <main className="flex flex-col md:flex-row md:items-start md:gap-20 mt-20">
                <div className="md:w-1/2">
                    <h2 className="mb-5 font-regular">Ingresa tu <span className="font-bold text-orange-500">Producto</span></h2>
                    <div className="shadow-lg border rounded-md">
                        <form
                            className="flex flex-col items-start gap-5 p-5"
                            onSubmit={almacenarProducto}
                        >
                            <input
                                type="text"
                                name="producto"
                                id="producto"
                                placeholder="Escribe el nombre de tu producto"
                                className="border border-gray-400 w-full rounded p-1 focus-visible:outline-none"
                                onChange={e => setNombre(e.target.value)}
                                value={nombre}
                            />
                            <select
                                name="productos"
                                id="productos"
                                className="border border-gray-400 rounded focus-visible:outline-none cursor-pointer"
                                value={categoria}
                                onChange={e => setCategoria(e.target.value)}
                            >
                                <option
                                    defaultValue
                                >-- Categoría --</option>
                                {categorias.map(categoria => (
                                    <option
                                        key={categoria.id}
                                        value={categoria.nombre}
                                    >{categoria.nombre}</option>
                                ))}
                            </select>
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 transition-colors p-2 rounded-md text-white uppercase font-bold text-xs w-full"
                            >Añadir Producto</button>
                        </form>
                    </div>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 space-y-5 md:h-screen overflow-y-scroll">
                    <h2 className="mb-5 font-regular">Revisa tus <span className="font-bold text-orange-500">Productos</span></h2>
                    {productos?.map(producto => (
                        <Producto
                            key={Math.random()}
                            data={producto}
                        />
                    ))}
                </div>
            </main>

            <ToastContainer />
        </div>
    )
}
