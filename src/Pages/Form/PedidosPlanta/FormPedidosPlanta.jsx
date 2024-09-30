import { useState } from "react";
import SideBar from "../../../Components/SideBar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";
import "../../../Style/Formulario.css";

export default function FormPedidosPlanta() {
  const [cantidad, setCantidad] = useState(1);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const producto = [
    { name: "AGUA MINERAL DE MANANTIAL BIDON 20Lt", code: "NY" },
    { name: "AGUA MINERAL DE MANANTIAL BOTELLÓN 7Lt", code: "NY" },
  ];
  const [detalle, setDetalle] = useState("");
  const [selectedCantpro, setSelectedCantpro] = useState(null);
  const cities = [
    { name: "10", code: "NY" },
    { name: "5", code: "RM" },
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
          <div className="section">
            <label htmlFor="">Cantidad</label>
            <InputNumber
              inputId="minmax"
              value={cantidad}
              onValueChange={(e) => setCantidad(e.value)}
              min={0}
              max={100}
              className="w-3rem h-2rem"
            />
          </div>
          <div className="section">
            <label htmlFor="">Más Detalle</label>
            <InputTextarea
              autoResize
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
              rows={5}
              cols={30}
            />
          </div>
          <div className="section">
            <label htmlFor="">Bidones a Entregar</label>
            <MultiSelect
              value={selectedCantpro}
              onChange={(e) => setSelectedCantpro(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Cantidad"
              maxSelectedLabels={3}
              className="w-full md:w-40rem h-2rem p-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
