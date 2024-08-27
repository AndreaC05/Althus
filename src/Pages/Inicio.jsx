import SideBar from "../Components/SideBar";
import ProductosCom from "../Components/ProductosCom";
import ClientesCom from "../Components/ClientesCom";
import "../Style/Inicio.css";

export default function Inicio() {
  return (
    <>
      <div className="container_generarl_inicio">
        <SideBar />
        <div className="container_estadisticas">
          <h2>Estadistticas</h2>
        </div>
        <div className="container_dos">
          <div className="container_clientes">
            <ClientesCom />
          </div>
          <div className="container_productos">
            <ProductosCom />
          </div>
        </div>
      </div>
    </>
  );
}
