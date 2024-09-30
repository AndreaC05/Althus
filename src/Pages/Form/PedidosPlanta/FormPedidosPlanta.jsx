import { useState } from "react";
import SideBar from "../../../Components/SideBar";
import { Dropdown } from "primereact/dropdown";
import "../../../Style/Formulario.css";

export default function FormPedidosPlanta() {
  const [selectedProducto, setSelectedProducto] = useState(null);
  const producto = [
    { name: "AGUA MINERAL DE MANANTIAL BIDON 20Lt", code: "NY" },
    { name: "AGUA MINERAL DE MANANTIAL BOTELLÓN 7Lt", code: "NY" },
  ];

  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Pedidos a Planta</h2>
      </div>

      <div className="container_formulario flex justify-content-center align-items-center">
        <div className="formulario_planta formulario">
          <h3>Agregar Pedidos</h3>

          <div className="section">
            <label htmlFor="">Producto</label>
            <Dropdown
              value={selectedProducto}
              onChange={(e) => setSelectedProducto(e.value)}
              options={producto}
              optionLabel="name"
              placeholder="Seleccione al producto"
              className="w-full md:w-40rem p-2"
              checkmark={true}
              highlightOnSelect={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
