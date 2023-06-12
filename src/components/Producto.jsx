import { useState } from 'react';
import useListado from '../hooks/useListado';
import 'boxicons'

export default function Producto({ data }) {

    const { nombre, categoria } = data;
    const { eliminarProducto } = useListado();
    const [checked, setChecked] = useState(false);


    return (
        <div className="shadow-lg border rounded-md p-5 flex items-center justify-between">
            <div>
                <div className="flex gap-3">
                    <h3 className="font-bold">Nombre:</h3>
                    <p>{nombre}</p>
                </div>
                <div className="flex gap-3">
                    <p className="font-regular text-gray-400">{categoria}</p>
                </div>
            </div>
            <div>
                <div
                    className={`${checked ? 'bg-green-500 border-0' : ''} border border-slate-600 rounded-full flex items-center justify-center cursor-pointer`}
                    onClick={() => {
                        setChecked(true);
                        setTimeout(() => {
                            eliminarProducto(nombre);
                        }, 1500);
                    }}
                >
                    <box-icon
                        name='check'
                        color={`${checked ? '#fff' : "rgb(71 85 105)"}`}
                    ></box-icon>
                </div>
            </div>
        </div>
    )
}
