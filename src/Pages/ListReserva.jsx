import { useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import SideBar from "../Components/SideBar";
import "../Style/Reserva.css";
import "../Style/Inicio.css";

export default function ListReserva() {
  const [globalFilter, setGlobalFilter] = useState("");

  // Definir los datos directamente en el componente
  const data = [
    {
      id: 1,
      fecha_reserva: "2024-09-04",
      cliente: "Juan Pérez",
      fecha_entrega_reserva: "2024-09-10",
      metodo_pago: "TRANSFERENCIA",
      detalle: "Ver detalle",
    },
    {
      id: 2,
      fecha_reserva: "2024-09-03",
      cliente: "María López",
      fecha_entrega_reserva: "2024-09-09",
      metodo_pago: "CONTADO",
      detalle: "Ver detalle",
    },
    // Puedes añadir más objetos según sea necesario
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

  let header = getHeader();

  return (
    <>
    <div className="header flex align-items-center">
        <SideBar />
        <h2>Reservas</h2>
    </div>
      <div className="card table_reserva">
        <TreeTable
          value={data}
          globalFilter={globalFilter}
          header={header}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="id"
            header="N°"
            filter
            filterPlaceholder="Filtrar por N°"
            className="p-2"
          />
          <Column
            field="fecha_reserva"
            header="Fecha Reserva"
            filter
            filterPlaceholder="Filtrar por fecha de reserva"
          />
          <Column
            field="cliente"
            header="Cliente"
            filter
            filterPlaceholder="Filtrar por cliente"
          />
          <Column
            field="fecha_entrega_reserva"
            header="Fecha Entrega"
            filter
            filterPlaceholder="Filtrar por fecha de entrega"
          />
          <Column
            field="metodo_pago"
            header="Método Pago"
            filter
            filterPlaceholder="Filtrar por método de pago"
          />
          <Column
            field="detalle"
            header="Ver Detalle"
            body={(rowData) => (
              <button onClick={() => alert(`Detalle de ${rowData.cliente}`)}>
                {rowData.detalle}
              </button>
            )}
          />
        </TreeTable>
      </div>
    </>
  );
}
