import { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { Link } from "react-router-dom";

import "../Style/SideBar.css";
import Logo from "../assets/althuslogo.svg";

export default function SideBar() {
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null); //Ref para Clientes
  const btnRef6 = useRef(null); // Ref para Reserva
  const btnRef7 = useRef(null); // Ref para Pedidos
  const btnRef8 = useRef(null); //ref para trabajadores
  const btnRef9 = useRef(null); //ref para contactos
  const btnRef10 = useRef(null); //ref para el kardex
  const btnRef11 = useRef(null);
 // const btnRef12 = useRef(null); //ref para pedidos planta
  const btnRef13 = useRef(null); // ref para Clientes Opcion

  return (
    <>
      <div className="card flex container_sideBar">
        <Button
          icon="pi pi-list"
          onClick={() => setVisible(true)}
          className="ml-3 mt-3"
        />
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "280px" }}
            >
              <div className="flex flex-column h-full">
                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                  <img src={Logo} alt="" style={{ width: "130px" }} />
                  <Button
                    type="button"
                    icon="pi pi-times"
                    onClick={() => setVisible(false)}
                    rounded
                    outlined
                    className="h-2rem w-2rem"
                  />
                </div>
                <div className="overflow-y-auto">
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef1}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef1}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">FAVORITES</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <Link
                            to="/inicio"
                            style={{ textDecoration: "none" }}
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Inicio</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/productos"
                            style={{ textDecoration: "none" }}
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <i className="pi pi-box mr-2"></i>
                            <span className="font-medium">Productos</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li className="border-top-1 surface-border">
                          <StyleClass
                            nodeRef={btnRef6}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <div
                              ref={btnRef6}
                              className="p-ripple p-3 flex align-items-center justify-content-between text-700 cursor-pointer"
                            >
                              <i className="pi pi-calendar"></i>
                              <span
                                className="font-medium"
                                style={{ marginLeft: "-90px" }}
                              >
                                Reserva
                              </span>
                              <i className="pi pi-chevron-down"></i>
                              <Ripple />
                            </div>
                          </StyleClass>
                          <ul className="list-none p-0 m-0 overflow-hidden ml-3 listclientes">
                            <li>
                              <Link
                                to="/ListaReserva"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-list mr-2"></i>
                                <span className="font-medium">
                                  Lista Reserva
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/FormularioReserva"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-plus-circle mr-2"></i>
                                <span className="font-medium">
                                  Nueva Reserva
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/cotizacion"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-file-check mr-2"></i>
                                <span className="font-medium">Cotización</span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="border-top-1 surface-border">
                          <StyleClass
                            nodeRef={btnRef7}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <div
                              ref={btnRef7}
                              className="p-ripple p-3 flex align-items-center justify-content-between text-700 cursor-pointer"
                            >
                              <i className="pi pi-shopping-cart"></i>
                              <span
                                className="font-medium"
                                style={{ marginLeft: "-90px" }}
                              >
                                Pedidos
                              </span>
                              <i className="pi pi-chevron-down"></i>
                              <Ripple />
                            </div>
                          </StyleClass>
                          <ul className="list-none p-0 m-0 overflow-hidden ml-3 listclientes">
                            <li>
                              <Link
                                to="/ListaPedido"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-list mr-2"></i>
                                <span className="font-medium">
                                  Lista Pedidos
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                            {/* <li>
                              <Link
                                to="/FormularioPedidos"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-plus-circle mr-2"></i>
                                <span className="font-medium">
                                  Nuevo Pedido
                                </span>
                                <Ripple />
                              </Link>
                            </li> */}
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="border-top-1 surface-border">
                      <StyleClass
                        nodeRef={btnRef2}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef2}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">APPLICATION</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        {/* <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-folder mr-2"></i>
                            <span className="font-medium">Projects</span>
                            <Ripple />
                          </a>
                        </li> */}
                        <li>
                          <Link
                            to="/dashboard"
                            style={{ textDecoration: "none" }}
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <i className="pi pi-chart-line mr-2"></i>
                            <span className="font-medium">Dashboard</span>
                            <Ripple />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="border-top-1 surface-border">
                      <StyleClass
                        nodeRef={btnRef11}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef11}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">PLANTA</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden listclientes">
                        <li>
                          <Link
                            to="/ListPedidosPlanta"
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <i className="pi pi-objects-column mr-2"></i>
                            <span className="font-medium">Lista Pedidos</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/FormularioPedidosPlanta"
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <i className="pi pi-file-edit mr-2"></i>
                            <span className="font-medium">Formulario</span>
                            <Ripple />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="border-top-1 surface-border">
                      <StyleClass
                        nodeRef={btnRef13}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef13}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">CLIENTES</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden listclientes">
                        <li>
                          <Link
                            to="/ListaPedidosC"
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <i className="pi pi-objects-column mr-2"></i>
                            <span className="font-medium">Lista Pedidos</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/FormularioPedidosC"
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <i className="pi pi-file-edit mr-2"></i>
                            <span className="font-medium">Realizar Pedido</span>
                            <Ripple />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="border-top-1 surface-border">
                      <StyleClass
                        nodeRef={btnRef3}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef3}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">ORGANIZATION</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <StyleClass
                            nodeRef={btnRef10}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <div
                              ref={btnRef10}
                              className="p-ripple p-3 flex align-items-center justify-content-between text-700 cursor-pointer"
                            >
                              <i className="pi pi-box"></i>
                              <span
                                className="font-medium"
                                style={{ marginLeft: "-90px" }}
                              >
                                Kardex
                              </span>
                              <i className="pi pi-chevron-down"></i>
                              <Ripple />
                            </div>
                          </StyleClass>
                          <ul className="list-none p-0 m-0 overflow-hidden ml-3 listclientes">
                            <li>
                              <Link
                                to="/FormularioIngresosProductos"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-plus mr-2"></i>
                                <span className="font-medium">
                                  Agregar Producto
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/ListIngresos"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-th-large mr-2"></i>
                                <span className="font-medium">
                                  Gestionar Inventario
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef5}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <div
                              ref={btnRef5}
                              className="p-ripple p-3 flex align-items-center justify-content-between text-700 cursor-pointer"
                            >
                              <i className="pi pi-users"></i>
                              <span
                                className="font-medium"
                                style={{ marginLeft: "-90px" }}
                              >
                                Clientes
                              </span>
                              <i className="pi pi-chevron-down"></i>
                              <Ripple />
                            </div>
                          </StyleClass>
                          <ul className="list-none p-0 m-0 overflow-hidden ml-3 listclientes">
                            <li>
                              <Link
                                to="/ListaCliente"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-list-check mr-2"></i>
                                <span className="font-medium">
                                  Lista Clientes
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/FormularioClientes"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-user-plus mr-2"></i>
                                <span className="font-medium">Formulario</span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef8}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <div
                              ref={btnRef8}
                              className="p-ripple p-3 flex align-items-center justify-content-between text-700 cursor-pointer"
                            >
                              <i className="pi pi-users"></i>
                              <span
                                className="font-medium"
                                style={{ marginLeft: "-70px" }}
                              >
                                Empleados
                              </span>
                              <i className="pi pi-chevron-down"></i>
                              <Ripple />
                            </div>
                          </StyleClass>
                          <ul className="list-none p-0 m-0 overflow-hidden ml-3 listclientes">
                            <li>
                              <Link
                                to="/ListaEmpleados"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-list-check mr-2"></i>
                                <span className="font-medium">
                                  Lista Trabajadores
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/FormularioTrabajadores"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-user-plus mr-2"></i>
                                <span className="font-medium">Formulario</span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef9}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <div
                              ref={btnRef9}
                              className="p-ripple p-3 flex align-items-center justify-content-between text-700 cursor-pointer"
                            >
                              <i className="pi pi-users"></i>
                              <span
                                className="font-medium"
                                style={{ marginLeft: "-70px" }}
                              >
                                Contactos
                              </span>
                              <i className="pi pi-chevron-down"></i>
                              <Ripple />
                            </div>
                          </StyleClass>
                          <ul className="list-none p-0 m-0 overflow-hidden ml-3 listclientes">
                            <li>
                              <Link
                                to="/ListaContacto"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-list-check mr-2"></i>
                                <span className="font-medium">
                                  Lista Contactos
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/FormularioContactos"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <i className="pi pi-user-plus mr-2"></i>
                                <span className="font-medium">Formulario</span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="border-top-1 surface-border">
                      <StyleClass
                        nodeRef={btnRef4}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef4}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">PERSONAL</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Account</span>
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Preferences</span>
                            <Ripple />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                  <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <Avatar
                      image="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                      shape="circle"
                    />
                    <span className="font-bold">Administrador</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
