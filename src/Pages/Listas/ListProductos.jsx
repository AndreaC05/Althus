import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { ProductService } from "../../Components/service/ProductService";
import SideBar from "../../Components/SideBar";
import "../../Style/Formulario.css";
import BusquedasIngresos from "../../Components/BusquedasIngresos";

export default function ListProductos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);  

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
        alt={product.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const statusBodyTemplate = (product) => {
    return (
      <Tag
        value={product.inventoryStatus}
        severity={getSeverity(product)}
      ></Tag>
    );
  };

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Gestión de Ingresos</h2>
      </div>

      <div className="container_formulario flex justify-content-center mt-3">
        <div className="Lista_ingresos formulario">
          <div className="header_ingresos mt-2">
            <BusquedasIngresos />
          </div>

          <div className="table_ingresos mt-5">
            <DataTable
              value={products}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column field="name" header="Name"></Column>
              <Column header="Image" body={imageBodyTemplate} className="p-3"></Column>
              <Column
                field="price"
                header="Price"
                body={priceBodyTemplate}
              ></Column>
              <Column header="Status" body={statusBodyTemplate}></Column>
              <Column field="fecha_entrada" header="Fecha"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
