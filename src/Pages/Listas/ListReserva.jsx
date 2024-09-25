import { useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import SideBar from "../../Components/SideBar";
import DialogFechas from "../../Components/Dialog/DialogFechas";
// import AccionesReserva from "../Components/AccionesReserva";
import "../../Style/Reserva.css";
import "../../Style/Inicio.css";

export default function ListReserva() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [detalleVisible, setDetalleVisible] = useState(false);
  const [calendarioVisible, setCalendarioVisible] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  // Datos de ejemplo
  const reservas = [
    {
      id: "1",
      cliente: "Cliente A",
      fecha: new Date(2024, 8, 15), // Fecha de ejemplo
      metodo_pago: "Tarjeta de Crédito",
    },
    {
      id: "2",
      cliente: "Cliente B",
      fecha: new Date(2024, 8, 20), // Fecha de ejemplo
      metodo_pago: "Efectivo",
    },
    // Agrega más datos según sea necesario
  ];

  const getHeader = () => {
    return (
      <div className="flex justify-content-end">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            type="search"
            onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder="Global Search"
          />
        </IconField>
      </div>
    );
  };

  const verDetalle = (rowData) => {
    setReservaSeleccionada(rowData);
    setDetalleVisible(true);
  };

  const verCalendario = (fecha) => {
    setFechaSeleccionada(fecha);
    setCalendarioVisible(true);
  };

  const hideDetalleDialog = () => {
    setDetalleVisible(false);
  };

  const hideCalendarioDialog = () => {
    setCalendarioVisible(false);
  };

  let header = getHeader();

  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Reservas</h2>
      </div>
      <div className="card table_reserva">
        <TreeTable
          value={reservas} // Pasar los datos aquí
          globalFilter={globalFilter}
          header={header}
          tableStyle={{ minWidth: "50rem" }}
          className="table_reserva_datos"
        >
          <Column
            field="id"
            header="Itém"
            className="p-2"
            style={{ width: "5%" }}
          />
          <Column
            field="cliente"
            header="Cliente"
            className="p-3"
            style={{ width: "25%" }}
          />
          <Column
            field="fecha"
            header="Fechas"
            style={{ width: "5%" }}
            body={(rowData) => (
              <Button
                icon="pi pi-calendar"
                onClick={() => verCalendario(rowData.fecha)}
                className="btn-ver-calendario"
              />
            )}
          />
          <Column
            field="metodo_pago"
            header="Método Pago"
            style={{ width: "12%" }}
          />
          <Column
            header="Ver Detalle"
            className="column"
            style={{ width: "5%" }}
            body={(rowData) => (
              <Button
                icon="pi pi-info-circle"
                onClick={() => verDetalle(rowData)}
                className="btn-ver-detalle"
              />
            )}
          />
          <Column
            field=""
            header="Cotizar"
            style={{ width: "8%" }}
            body={(rowData) => <Button icon="pi pi-file-export" className="btn_ver_cotizar"/>}
          />
          <Column field="" header="Acción" style={{ width: "8%" }} />
        </TreeTable>
      </div>

      {/* Dialog de Detalle */}
      <Dialog
        header="Detalles de la Reserva"
        visible={detalleVisible}
        style={{ width: "50vw" }}
        modal
        onHide={hideDetalleDialog}
      >
        {reservaSeleccionada ? (
          <div>
            <p>
              <strong>Número de Reserva:</strong> {reservaSeleccionada.id}
            </p>
            <p>
              <strong>Cliente:</strong> {reservaSeleccionada.cliente}
            </p>
            <p>
              <strong>Método de Pago:</strong> {reservaSeleccionada.metodo_pago}
            </p>
            {/* Puedes agregar más detalles según tu estructura de datos */}
          </div>
        ) : null}
      </Dialog>

      {/* Dialog de Calendario */}
      <Dialog
        header="Fechas"
        visible={calendarioVisible}
        style={{ width: "30vw" }}
        modal
        onHide={hideCalendarioDialog}
      >
        {fechaSeleccionada ? <DialogFechas /> : null}
      </Dialog>
    </>
  );
}
