import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import UserService from "../../../services/users";
import { useNavigate } from "react-router-dom";

const Component_User_Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [typePassword, setTypePassword] = useState("password");
    const [RedirectAdminUser, setRedirectAdminUser] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(visible == true){
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    }, [visible]);

    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        await UserService.register(name,email,password).then(() => {
            setRedirectAdminUser(true);
        }).catch(() => {
            setError(true);
        })
    }

    let navigate = useNavigate();

    if(RedirectAdminUser)
        navigate("/admin/user");

    return(
        <div className="wraper-user-all">
            <div className="painel user-register">
                <div className="box-create-user">
                    <form onSubmit={handleSubmitRegister}>
                        <h2>New User: </h2>
                        <div className="wraper-input-register">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..."/>
                        </div>
                        <div className="wraper-input-register">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..."/>
                        </div>
                        <div className="wraper-input-register">
                            <input type={typePassword} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..." className="input-password"/>
                            { !visible ? <FontAwesomeIcon icon={faEyeSlash} onClick={() => setVisible(true)} className='iconButtonMenu'/> : <FontAwesomeIcon icon={faEye} onClick={() => setVisible(false) } className='iconButtonMenu'/> }
                            { error && <div className="danger">Erro ao criar usuário</div> }
                        </div>
                        <div className="wraper-input-register">
                            <input type="submit" value="Criar"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Component_User_Register;