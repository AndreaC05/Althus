import "../../Style/Cotizacion.css";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function TableCotizar() {
  const [products, ] = useState([]);

  return (
    <>
      <div className="container_table_cotizar p-5">
        <div className="card">
          <DataTable value={products} tableStyle={{ minWidth: "40rem" }}>
            <Column field="id" header="Itém" className="p-3" style={{width: "5%"}}></Column>
            <Column field="files" header="Cotizaciones" style={{width: "70%"}}></Column>
            <Column field="" header="Descargar" style={{width: "10%"}}></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
}
