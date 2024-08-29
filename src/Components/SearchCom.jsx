import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import "../Style/SearchCom.css";
import "../Style/Inicio.css";

export default function SearchCom() {
  return (
    <>
      <div className="flex gap-3">
        <IconField iconPosition="left" className="buscador">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText v-model="value1" placeholder="Search" />
        </IconField>

        {/* <IconField>
          <InputIcon className="pi pi-spin pi-spinner"> </InputIcon>
          <InputText v-model="value2" />
        </IconField> */}
      </div>
    </>
  );
}
