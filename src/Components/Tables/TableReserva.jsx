import { useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import "../../Style/Reserva.css";

export default function TableReserva() {
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
      <div className="flex justify-content-end search-reserva">
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
            className=""
          />
          <Column
            field="fecha_reserva"
            header="Fecha Reserva"
          />
          <Column
            field="cliente"
            header="Cliente"
          />
          <Column
            field="fecha_entrega_reserva"
            header="Fecha Entrega"
          />
          <Column
            field="metodo_pago"
            header="Método Pago"
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
