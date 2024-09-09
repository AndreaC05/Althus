import SideBar from "../Components/SideBar";
import ProductosCom from "../Components/ProductosCom";

export default function Productos() {
  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Productos</h2>
      </div>
      <div className="container_productos">
        <ProductosCom />
      </div>
    </>
  );
}
