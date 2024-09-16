import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import "../Style/BusquedasIngresos.css";

export default function BusquedasIngresos() {
  return (
    <>
      <div className="contenedor_ingresos_busquedas p-3">
        <div className="square">
          <IconField iconPosition="left" className="buscador">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText v-model="value1" placeholder="Buscador" className="w-30rem"/>
          </IconField>
        </div>
      </div>
    </>
  );
}
