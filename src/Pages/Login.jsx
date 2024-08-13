import { useState } from "react";
import Fondo from "../assets/fondo.jpg";
import "../Style/Login.css";
import { InputText } from 'primereact/inputtext';

export default function Login() {
    const [value, setValue] = useState('');

    return(
        <>
        <div className="container_login">
            <img src={Fondo} alt="Fondo agua" />
            <div className="container_square">
                <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
        
        </>
    );
}