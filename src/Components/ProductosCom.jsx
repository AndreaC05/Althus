import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
// import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";
import { ProductService } from "./service/ProductService";
import { Link } from "react-router-dom";
import "../Style/Productos.css";

export default function ProductosCom() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

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

  const itemTemplate = (product, index) => {
    return (
      <div className="col-12" key={product.id}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 }
          )}
        >
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={product.image}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
              <div className="flex align-items-center gap-3">
                {/* <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span> */}
                <Tag
                  value={product.inventoryStatus}
                  severity={getSeverity(product)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Link to="/FormularioReserva">
                <Button
                  icon="pi pi-shopping-cart"
                  className="p-button-rounded p-2"
                  disabled={product.inventoryStatus === "OUTOFSTOCK"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;

    let list = items.map((product, index) => {
      return itemTemplate(product, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  return (
    <>
      <div className="card productos_com">
        <div className="letters_producto ml-4 mt-3">
          <h3>Productos</h3>
        </div>
        <DataView
          value={products}
          listTemplate={listTemplate}
          paginator
          rows={2}
        />
      </div>
    </>
  );
}
