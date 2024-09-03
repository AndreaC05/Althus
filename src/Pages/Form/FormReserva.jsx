import { useState } from "react";
import SideBar from "../../Components/SideBar";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import "../../Style/Formulario.css";

export default function FormReserva() {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  const [date3, setDate3] = useState(null);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const cities = [
    { name: "Tigerengineering Colombia S.A.S. Sucursal del Peru", code: "NY" },
  ];
  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Fomulario Reserva</h2>
      </div>

      <div className="container_formulario flex justify-content-center align-items-center">
        <div className="formulario_reserva formulario">
          <h3>Agregar Reserva</h3>
          <div className="sectiones flex">
            <div className="section">
              <label htmlFor="">Fecha</label>
              <Calendar value={date} onChange={(e) => setDate(e.value)} className="w-18rem h-2rem"/>
            </div>
            <div className="section">
              <label htmlFor="">Fecha Entrega</label>
              <Calendar value={date2} onChange={(e) => setDate2(e.value)} className="w-18rem h-2rem"/>
            </div>
          </div>
          <div className="section">
            <label htmlFor="">Cliente</label>
            <Dropdown
              value={selectedCliente}
              onChange={(e) => setSelectedCliente(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Seleccione al Cliente"
              className="w-full md:w-40rem p-2"
              checkmark={true}
              highlightOnSelect={false}
            />
          </div>
          <div className="sectiones flex">
            <div className="section">
              <label htmlFor="">Cantidad</label>
              <InputNumber
                inputId="minmax"
                value={cantidad}
                onValueChange={(e) => setCantidad(e.value)}
                min={0}
                max={100}
                className="w-18rem h-2rem"
              />
            </div>
            <div className="section">
              <label htmlFor="">Fecha Vencimiento</label>
              <Calendar value={date3} onChange={(e) => setDate3(e.value)} className="w-18rem h-2rem"/>
            </div>
          </div>

          <div className="button_guardar">
            <Button label="Guardar" />
          </div>
        </div>
        <div className="formulario_detalle formulario">
          <h3>Agregar Detalle</h3>
        </div>
      </div>
    </>
  );
}