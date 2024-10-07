import SideBar from "../Components/SideBar";
import ProductosCom from "../Components/ProductosCom";
import { Button } from "primereact/button";
import "../Style/Productos.css";

export default function Productos() {
  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Inventario</h2>
      </div>
      <div className="botones_scanner flex p-1">
        {/* <div className="camara_cel mr-3">
          <Button icon="pi pi-instagram" className="p-1"/>
        </div> */}
        <div className="maquina_scanner">
          <Button icon="pi pi-barcode" className="p-1"/>
        </div>
      </div>
      <div className="container_productos_principal">
        <ProductosCom />
      </div>
    </>
  );
}
