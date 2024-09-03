import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function DialogDetalle({ visible, onHide, details }) {
  return (
    <>
      <Dialog
        header="Detalle de Reserva"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={onHide}
        footer={
          <div>
            <Button label="Cerrar" icon="pi pi-times" onClick={onHide} />
          </div>
        }
      >
        <div>
          <p>
            <strong>Cliente:</strong> {details.cliente}
          </p>
          <p>
            <strong>Fecha de Reserva:</strong> {details.fecha_reserva}
          </p>
          <p>
            <strong>Fecha de Entrega:</strong> {details.fecha_entrega_reserva}
          </p>
          <p>
            <strong>Método de Pago:</strong> {details.metodo_pago}
          </p>
          {/* Añade más detalles si es necesario */}
        </div>
      </Dialog>
    </>
  );
}
