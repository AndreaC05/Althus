import { InputText } from "primereact/inputtext";

export default function DialogDetallePedido() {
  return (
    <>
      <div className="container_detalle_pedido">
        <div className="sectionp flex">
          <label htmlFor="">N° Reserva</label>
          <InputText disabled placeholder="01" />
        </div>
      </div>
    </>
  );
}
