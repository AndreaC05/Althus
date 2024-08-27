import SideBar from "../Components/SideBar";

export default function Inicio() {
    return(
        <>
            <div className="container_generarl_inicio">
                <SideBar/>
                <div className="container_estadisticas">
                    <h2>Estadistticas</h2>
                </div>
                <div className="container-clientes">
                    <h2>Clientes</h2>
                </div>
                <div className="container_productos">
                    <h2>Productos</h2>
                </div>
            </div>
        </>
    );
}