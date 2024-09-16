import SideBar from "../Components/SideBar";
import DashboardCom from "../Components/DashboardCom";
import TortaDash from "../Components/TortaDash";

export default function Dashboard() {
  return (
    <>
      <div className="header flex align-items-center">
        <SideBar />
        <h2>DashBoard</h2>
      </div>

      <div className="container_estadisticas">
        <div className="estadisticas">
          <DashboardCom />
        </div>

        <div className="estadisticas mt-3 flex justify-content-center aling-items-center">
          <TortaDash />
        </div>
      </div>
    </>
  );
}
