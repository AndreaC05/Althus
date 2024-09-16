import SideBar from "../../Components/SideBar";

export default function ListClientes() {
  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>Clientes</h2>
      </div>

      <div className="container_ListCliente"></div>
    </>
  );
}
