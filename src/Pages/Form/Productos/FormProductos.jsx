import { useRef, useState } from "react";
import SideBar from "../../../Components/SideBar";
import "../../../Style/Formulario.css";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Toast } from "primereact/toast";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";

export default function FormProductos() {
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [totalSize, setTotalSize] = useState(0);
  const [selectedAlmacen, setSelectedAlmacen] = useState(null);

  const toast = useRef(null);
  const fileUploadRef = useRef(null);

  const almacenes = [
    { name: "San Luis", code: "NY" },
    { name: "Camión", code: "RM" },
  ];

  const onTemplateSelect = (e) => {
    let _totalSize = totalSize;
    let files = e.files;

    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e) => {
    let _totalSize = 0;

    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: "info",
      summary: "Éxito",
      detail: "Archivo subido",
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 1 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: "2em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-5"
        >
          Arrastra y suelta la imagen aquí
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Agregar Productos</h2>
      </div>

      <div className="container_formulario flex justify-content-center mt-3">
        <div className="formulario_inventario formulario">
          <Toast ref={toast}></Toast>

          <div className="sectiones">
            <div className="section">
              <label htmlFor="">Producto</label>
              <InputText
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
                className="h-2rem"
              />
            </div>

            <div className="section">
              <label htmlFor="">Imagen</label>
              <Tooltip
                target=".custom-choose-btn"
                content="Seleccionar"
                position="bottom"
              />
              <Tooltip
                target=".custom-upload-btn"
                content="Subir"
                position="bottom"
              />
              <Tooltip
                target=".custom-cancel-btn"
                content="Cancelar"
                position="bottom"
              />
              <FileUpload
                ref={fileUploadRef}
                name="demo[]"
                url="/api/upload"
                multiple
                accept="image/*"
                maxFileSize={1000000}
                onUpload={onTemplateUpload}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                uploadOptions={uploadOptions}
                cancelOptions={cancelOptions}
              />
            </div>

            <div className="section">
              <label htmlFor="">Cantidad</label>
              <InputText
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                className="h-2rem"
              />
            </div>
          </div>

          <div className="section">
            <label htmlFor="">Almacén</label>
            <Dropdown
              value={selectedAlmacen}
              onChange={(e) => setSelectedAlmacen(e.value)}
              options={almacenes}
              optionLabel="name"
              className="w-full h-2rem p-2"
            />
          </div>

          <div className="button_guardar mt-5 flex justify-content-center">
            <Button label="Agregar" className="p-2" />
          </div>
        </div>
      </div>
    </>
  );
}
