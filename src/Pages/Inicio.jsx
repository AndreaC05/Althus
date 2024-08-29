import SideBar from "../Components/SideBar";
import ProductosCom from "../Components/ProductosCom";
import ClientesCom from "../Components/ClientesCom";
import DashboardCom from "../Components/DashboardCom";
import TortaDash from "../Components/TortaDash";
import "../Style/Inicio.css";

export default function Inicio() {
  return (
    <>
      <div className="container_generarl_inicio">
        <div className="header flex align-items-center">
          <SideBar />
          <h2>Panel</h2>
        </div>
        <div className="container_estadisticas flex">
          <div className="barras">
            <DashboardCom className="barra"/>
          </div>
          <div className="circule">
            <TortaDash />
          </div>
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
