import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
// import { CustomerService } from "./service/CustomerService";
import SearchCom from "./SearchCom";
import DialogDetalleCliente from "./Dialog/DialogDetalleCliente";
import "../Style/Cliente.css";
import "../Style/Inicio.css";

export default function ClientesCom() {
  const [customers, setCustomers] = useState([]);
  const [detalleVisible, setDetalleVisible] = useState(false);
  const [clienteSeleccionada, setClienteSeleccionada] = useState(null);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  // useEffect(() => {
  //   CustomerService.getCustomersMedium().then((data) => setCustomers(data));
  // }, []);

  const verDetalle = (rowData) => {
    setClienteSeleccionada(rowData);
    setDetalleVisible(true);
  };

  const hideDetalleDialog = () => {
    setDetalleVisible(false);
  };

  return (
    <>
      <div className="card cliente_com">
        <div className="header_com flex p-3">
            <h3>Clientes</h3>
            <div className="search_cliente">
                <SearchCom />
            </div>
        </div>
        <DataTable
          value=""
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
        >
          <Column field="name" header="Cliente" icon="pi pi-chevron-down" style={{ width: "25%", padding: "16px" }}></Column>
          <Column
            field="ruc"
            header="Ruc"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="Sede Principal"
            header="Sede Principal"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="direccion_despacho"
            header="Dirección Despacho"
            style={{ width: "25%" }}
          ></Column>
          <Column
            header="Detalle"
            className="column"
            style={{ width: "8%" }}
            body={(rowData) => (
              <Button
                icon="pi pi-info-circle"
                onClick={() => verDetalle(rowData)}
                className="btn-ver-detalle"
              />
            )}
          />
        </DataTable>
      </div>
      {/* Dialog de Detalle */}
      <Dialog
        header="Detalles del Cliente"
        visible={detalleVisible}
        style={{ width: "50vw" }}
        modal
        onHide={hideDetalleDialog}
      >
        <DialogDetalleCliente />
      </Dialog>
    </>
  );
}
