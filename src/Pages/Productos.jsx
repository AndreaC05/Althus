import SideBar from "../Components/SideBar";
import ProductosCom from "../Components/ProductosCom";

export default function Productos() {
    return(
        <>
            <div className="container_productos">
                <SideBar />
                <ProductosCom />
            </div>
        </>
    );
}