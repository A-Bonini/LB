import React from "react";
import "../../../styles/style-login.css";
import { Link } from "react-router-dom";
import FormLogin from "../../components/form_login";

function Login(){
    return(
        <div className="login">
            <div className="container">
                <div className="box-login">
                    <div className="img-login">
                        <Link to="/"><img src="../logo2.png"/></Link>
                    </div>
                    <FormLogin/>
                </div>
            </div>
        </div>
    )
}

export default Login;