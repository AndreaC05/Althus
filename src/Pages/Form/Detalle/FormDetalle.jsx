import { useState } from "react";
import "../../../Style/Formulario.css";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function FormDetalle() {
  const [cantidad, setCantidad] = useState(1);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const producto = [
    { name: "AGUA MINERAL DE MANANTIAL BIDON 20Lt", code: "NY" },
    { name: "AGUA MINERAL DE MANANTIAL BOTELLÓN 7Lt", code: "NY" },
  ];
  return (
    <>
      <div className="container_detalle">
        <h3>Agregar Detalle</h3>
        <div className="sectiones">
          <div className="section">
            <label htmlFor="">N° Reserva</label>
            <InputText disabled className="w-5rem h-2rem" />
          </div>
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

          <div className="button_guardar">
            <Button label="Agregar Detalle" />
          </div>
        </div>
      </div>
    </>
  );
}
