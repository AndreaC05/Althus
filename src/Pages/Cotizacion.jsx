import { useState } from "react";
import SideBar from "../Components/SideBar";
import TableCotizar from "../Components/Tables/TableCotizar";
import "../Style/Cotizacion.css";
import "../Style/Formulario.css";
import Logo from "../assets/althuslogo.svg";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function Cotizacion() {
  const [precio, setPrecio] = useState(0);
  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Cotizaciones</h2>
      </div>

      <div className="container_cotizacion mt-4 mb-4">
        <div className="cot">
          <div className="header_cot">
            <div className="img_logocot ml-3 mt-3">
              <img src={Logo} alt="Logo Althus" />
            </div>
          </div>
          <hr className="divisor mt-5"/>
          <div className="container_formulario">
            <div className="formulario_cot mt-2">
              <div className="sectiones">
                <div className="section">
                  <label htmlFor="">Cliente</label>
                  <InputText disabled className="h-2rem" />
                </div>
              </div>
              <div className="sectiones">
                <div className="section_cot flex">
                  <div className="section">
                    <label htmlFor="">Tipo Doc.</label>
                    <InputText
                      disabled
                      className="h-2rem w-15rem"
                      placeholder="RUC"
                    />
                  </div>
                  <div className="section">
                    <label htmlFor="">N° Doc.</label>
                    <InputText disabled className="h-2rem w-16rem" />
                  </div>
                  <div className="section">
                    <label htmlFor="">Email</label>
                    <InputText disabled className="h-2rem w-30rem" />
                  </div>
                </div>
                <div className="section_cot flex">
                  <div className="section">
                    <label htmlFor="">Contacto 1</label>
                    <InputText disabled className="h-2rem w-17rem" />
                  </div>
                  <div className="section">
                    <label htmlFor="">Teléfono</label>
                    <InputText disabled className="h-2rem" />
                  </div>
                  <div className="section">
                    <label htmlFor="">Contacto 2</label>
                    <InputText disabled className="h-2rem w-17rem" />
                  </div>
                  <div className="section">
                    <label htmlFor="">Teléfono</label>
                    <InputText disabled className="h-2rem" />
                  </div>
                </div>

                <div className="sectiones">
                  <div className="section">
                    <label htmlFor="">Producto</label>
                    <InputText disabled className="h-2rem" />
                  </div>
                </div>
                <div className="sectiones">
                  <div className="section_cot flex">
                    <div className="section">
                      <label htmlFor="">Cantidad</label>
                      <InputText disabled className="h-2rem w-10rem" />
                    </div>
                    <div className="section">
                      <label htmlFor="">Precio Uni.</label>
                      <InputNumber
                        className="h-2rem"
                        inputId="currency-us"
                        value={precio}
                        onValueChange={(e) => setPrecio(e.value)}
                        mode="currency"
                        currency="USD"
                        locale="en-US"
                      />
                    </div>
                    <div className="section">
                      <label htmlFor="">Precio Total</label>
                      <InputNumber
                        disabled
                        className="h-2rem"
                        inputId="currency-us"
                        value={precio}
                        onValueChange={(e) => setPrecio(e.value)}
                        mode="currency"
                        currency="USD"
                        locale="en-US"
                      />
                    </div>
                    <div className="section">
                      <label htmlFor="">Met. de pago</label>
                      <InputText disabled className="h-2rem w-26rem" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button_guardar mb-4">
            <Button label="Generar Cotización" />
          </div>
        </div>
      </div>
      <div className="table_cotizar">
        <TableCotizar />
      </div>
    </>
  );
}
