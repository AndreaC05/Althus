import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

// Importaciones de páginas
import Inicio from "./Pages/Inicio";
import Login from "./Pages/Login";
import DashBoard from "./Pages/Dashboard";
import ListReserva from "./Pages/ListReserva";
import FormReserva from "./Pages/Form/FormReserva";
import ListPedidos from "./Pages/ListPedidos";
import Otros from "./Pages/Otros";
import ListClientes from "./Pages/ListClientes";
import Productos from "./Pages/Productos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<DashBoard />}></Route>
            <Route exact path='/inicio' element={<Inicio />}/>
            <Route exact path='/ListaCliente' element={<ListClientes />}/>
            <Route path="/ListaReserva" element={<ListReserva />}></Route>
            <Route path="/FormularioReserva" element={<FormReserva />}></Route>
            <Route path="/ListaPedido" element={<ListPedidos />} />
            <Route path="/otros" element={<Otros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/" element={<Login />} />
          {/* <Route path="/registro" element={<RegistroLogin />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;