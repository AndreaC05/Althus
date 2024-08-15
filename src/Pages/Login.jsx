import { useState } from "react";
import Fondo from "../assets/fondo.jpg";
import Logo from "../assets/althuslogo.svg";
import "../Style/Login.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container_login">
        <img src={Fondo} alt="Fondo agua" />
        <div className="container-form">
          <div className="container_square">
            <img
              src={Logo}
              alt=""
              style={{ width: "190px", marginBottom: "20px" }}
            />
            <div className="primera" style={{ marginBottom: "30px" }}>
              <div className="letters_labels_form">
                <label htmlFor="">Correo</label>
              </div>
              <InputText
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="segunda">
              <div className="letters_labels_form">
                <label htmlFor="">Password</label>
              </div>
              <Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                feedback={false}
                tabIndex={1}
                toggleMask
              />
            </div>
            <div className="button_acceder_login" style={{marginTop: "20px"}}>
              <Button label="Acceder" text raised style={{padding: "6px", background: "white", color: "#06C5FA"}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
