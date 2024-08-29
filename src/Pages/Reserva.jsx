import SideBar from "../Components/SideBar";
import TableReserva from "../Components/Tables/TableReserva";
import "../Style/Reserva.css";

export default function Reserva() {
    return(
        <>
            <div className="container_reserva">
                <div className="header flex align-items-center">
                 <SideBar />
                 <h2>Reservas</h2>
                </div>
                <div className="reservaCom">
                    <TableReserva />
                </div>
            </div>
        </>
    );
}