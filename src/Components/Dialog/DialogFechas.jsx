import { InputText } from "primereact/inputtext";
import "../../Style//StyleDialog/DialogFecha.css";

export default function DialogFechas(){
    return(
        <>
        {/* .conteiner_Fechas + tab */}
            <div className="conteiner_Fechas">
                <div className="fecha_reserva fecha">
                    <label htmlFor="">FECHA RESERVA</label>
                    <InputText disabled className="p-2"/>
                </div>
                <div className="fecha">
                     <label htmlFor="">FECHA ENTREGA</label>
                     <InputText disabled className="p-2"/>
                </div>
                <div className="fecha">
                    <label htmlFor="">FECHA VENC.</label>
                    <InputText disabled className="p-2"/>
                </div>
            </div> 
        </>
    );
}