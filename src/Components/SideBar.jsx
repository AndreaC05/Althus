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
  const btnRef5 = useRef(null); 

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
                          <Link to="/inicio" style={{textDecoration: "none"}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Inicio</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link to="/productos" style={{textDecoration: "none"}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-box mr-2"></i>
                            <span className="font-medium">Productos</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link to="/reserva" style={{textDecoration: "none"}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-calendar mr-2"></i>
                            <span className="font-medium">Reserva</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link to="/pedidos" style={{textDecoration: "none"}} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-check-square mr-2"></i>
                            <span className="font-medium">Pedidos</span>
                            <Ripple />
                          </Link>
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
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-folder mr-2"></i>
                            <span className="font-medium">Projects</span>
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-chart-line mr-2"></i>
                            <span className="font-medium">Dashboard</span>
                            <Ripple />
                          </a>
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
                              <Link to="/ListaCliente" className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-list-check mr-2"></i>
                                <span className="font-medium">
                                  Lista Clientes
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-user-plus mr-2"></i>
                                <span className="font-medium">Formulario</span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Empleados</span>
                            <Ripple />
                          </a>
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
                      image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                      shape="circle"
                    />
                    <span className="font-bold">Amy Elsner</span>
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
