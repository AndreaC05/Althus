import SideBar from "../../Components/SideBar";
import "../../Style/Inicio.css";

export default function ListPedidos() {
    return(
        <>
        <div className="header flex align-items-center">
            <SideBar />
            <h2>Pedidos</h2>
        </div>
        
        </>
    );
}