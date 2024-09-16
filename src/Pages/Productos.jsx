import SideBar from "../Components/SideBar";
import ProductosCom from "../Components/ProductosCom";
import "../Style/Productos.css";

export default function Productos() {
  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Inventario</h2>
      </div>
      <div className="container_productos_principal">
        <ProductosCom />
      </div>
    </>
  );
}
