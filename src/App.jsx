import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

// Importaciones de páginas Principales

import Inicio from "./Pages/Inicio";
import Login from "./Pages/Login";
import DashBoard from "./Pages/Dashboard";
import Otros from "./Pages/Otros";
import Productos from "./Pages/Productos";
import Cotizacion from "./Pages/Cotizacion";

// Listas archivos

import ListPedidos from "./Pages/Listas/ListPedidos";
import ListReserva from "./Pages/Listas/ListReserva";
import ListClientes from "./Pages/Listas/ListClientes";
import ListPedidosCli from "./Pages/Listas/ListPedidosCli.jsx";
import ListEmpleados from "./Pages/Listas/ListEmpleados";
import ListContacto from "./Pages/Listas/ListContacto";
import ListProductos from "./Pages/Listas/ListProductos.jsx";
import ListPedidoPlanta from "./Pages/Listas/ListPedidoPlanta.jsx";

// Formularios

import FormReserva from "./Pages/Form/Reservas/FormReserva";
import FormPedidos from "./Pages/Form/Pedidos/FormPedidos";
import FormClientes from "./Pages/Form/Clientes/FormClientes";
import RealizarPedidoCli from "./Pages/Form/Clientes/RealizarPedidoCli.jsx";
import FormEmpleados from "./Pages/Form/Trabajadores/FormEmpleados";
import FormContacto from "./Pages/Form/Contacto/FormContacto";
import FormProductos from "./Pages/Form/Productos/FormProductos";
import FormPedidosPlanta from "./Pages/Form/PedidosPlanta/FormPedidosPlanta.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<DashBoard />}></Route>
            <Route exact path='/inicio' element={<Inicio />}/>
            <Route path="/cotizacion" element={<Cotizacion />} />
            <Route path="/otros" element={<Otros />} />
            <Route path="/productos" element={<Productos />} />
            
            
            {/* Listas archivos */}

            <Route exact path='/ListaCliente' element={<ListClientes />}/>
            <Route exact path='/ListaPedidosC' element={<ListPedidosCli />}/>
            <Route path="/ListaReserva" element={<ListReserva />}></Route>
            <Route path="/ListaPedido" element={<ListPedidos />} />
            <Route path="/ListaEmpleados" element={<ListEmpleados />} />
            <Route path="/ListaContacto" element={<ListContacto />} />
            <Route path="/ListIngresos" element={<ListProductos />} />
            <Route path="/ListPedidosPlanta" element={<ListPedidoPlanta />} />

            {/* Formularios */}

            <Route path="/FormularioClientes" element={<FormClientes />}></Route>
            <Route path="/FormularioPedidosC" element={<RealizarPedidoCli />}></Route>
            <Route path="/FormularioReserva" element={<FormReserva />}></Route>
            <Route path="/FormularioPedidos" element={<FormPedidos />}></Route>
            <Route path="/FormularioTrabajadores" element={<FormEmpleados />}></Route>
            <Route path="/FormularioContactos" element={<FormContacto />}></Route>
            <Route path="/FormularioIngresosProductos" element={<FormProductos />}></Route>
            <Route path="/FormularioPedidosPlanta" element={<FormPedidosPlanta />}></Route>

            
          {/* <Route path="/registro" element={<RegistroLogin />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;