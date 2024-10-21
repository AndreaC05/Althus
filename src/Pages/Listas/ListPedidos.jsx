import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox"; // Importa el componente Checkbox
import SideBar from "../../Components/SideBar";
import DialogDetallePedido from "../../Components/Dialog/DialogDetallePedido";
import "../../Style/Inicio.css";
import "../../Style/Pedidos.css";

export default function ListPedidos() {
  const [detalleVisible, setDetalleVisible] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [customers, setCustomers] = useState([]); 
  const [selectedCustomers, setSelectedCustomers] = useState([]); // Para gestionar los checkboxes seleccionados

  useEffect(() => {
    // Simulación de datos ficticios
    const fakeData = [
      { id: 1, cliente: "Tigerengineering Colombia S.A.S. Sucursal del Peru", metodo_pago: "Tarjeta de crédito" },
      { id: 2, cliente: "Ana García", metodo_pago: "Transferencia bancaria" },
      { id: 3, cliente: "Luis Martínez", metodo_pago: "Efectivo" },
      { id: 4, cliente: "Carla Sánchez", metodo_pago: "PayPal" },
      { id: 5, cliente: "Pedro Gómez", metodo_pago: "Tarjeta de débito" },
    ];
    setCustomers(fakeData);
  }, []);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  const verDetalle = (rowData) => {
    setReservaSeleccionada(rowData);
    setDetalleVisible(true);
  };

  const hideDetalleDialog = () => {
    setDetalleVisible(false);
  };

  // Función para manejar los checkboxes
  const onCheckboxChange = (e, rowData) => {
    let _selectedCustomers = [...selectedCustomers];

    if (e.checked) {
      _selectedCustomers.push(rowData);
    } else {
      _selectedCustomers = _selectedCustomers.filter(
        (customer) => customer.id !== rowData.id
      );
    }

    setSelectedCustomers(_selectedCustomers);
  };

  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Pedidos</h2>
      </div>

      <div className="card container_table_pedidos">
        <DataTable
          value={customers}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
        >
          <Column field="id" header="Item" style={{ width: "5%" }}></Column>
          <Column
            field="cliente"
            header="Cliente"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="metodo_pago"
            header="Método Pago"
            style={{ width: "10%" }}
          ></Column>
          <Column
            header="Detalle"
            className="column"
            style={{ width: "10%" }}
            body={(rowData) => (
              <Button
                icon="pi pi-info-circle"
                onClick={() => verDetalle(rowData)}
                className="btn-ver-detalle"
              />
            )}
          />
          {/* Columna para el Checkbox */}
          <Column
            header="Bidones recogidos"
            style={{ width: "10%" }}
            body={(rowData) => (
              <Checkbox
                checked={selectedCustomers.some(
                  (customer) => customer.id === rowData.id
                )}
                onChange={(e) => onCheckboxChange(e, rowData)}
              />
            )}
          />
        </DataTable>
      </div>
      {/* Dialog de Detalle */}
      <Dialog
        header="Detalles del Pedido"
        visible={detalleVisible}
        style={{ width: "50vw" }}
        modal
        onHide={hideDetalleDialog}
      >
        <DialogDetallePedido />
      </Dialog>
    </>
  );
}
