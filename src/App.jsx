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
import Reserva from "./Pages/Reserva";
import Pedidos from "./Pages/Pedidos";
import Otros from "./Pages/Otros";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<DashBoard />}></Route>
            <Route exact path='/inicio' element={<Inicio />}/>
            <Route path="/reserva" element={<Reserva />}></Route>
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/otros" element={<Otros />} />
            <Route path="/" element={<Login />} />
          {/* <Route path="/registro" element={<RegistroLogin />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;