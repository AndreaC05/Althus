import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "./service/CustomerService";
import SearchCom from "./SearchCom";
import "../Style/Cliente.css";
import "../Style/Inicio.css";

export default function ClientesCom() {
  const [customers, setCustomers] = useState([]);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  useEffect(() => {
    CustomerService.getCustomersMedium().then((data) => setCustomers(data));
  }, []);

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
          <Column field="name" header="Cliente" icon="pi pi-chevron-down" style={{ width: "25%", padding: "16px" }}></Column>
          <Column
            field="country.name"
            header="Country"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="company"
            header="Company"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="representative.name"
            header="Representative"
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
