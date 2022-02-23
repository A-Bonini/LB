import React, { useEffect, useState } from "react";
import UserService from "../../../services/users.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom"; 

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [typePassword, setTypePassword] = useState("password");
    const [visible, setVisible] = useState(false);
    const [RedirectAdminHome, setRedirectAdminHome] = useState(false);

    useEffect(() => {
        if(visible === true){
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    }, [visible]);

    useEffect(() => {
        if(error === true){
            setError(false);
        }

    }, [email,password]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
    
        let response = await UserService.login({email: email,password: password}).then((data) => {
            if(data.data.error){
                setError(true);
            } else {
                setRedirectAdminHome(true);
            }
        });
    }

    let navigate = useNavigate();

    if(RedirectAdminHome)
        navigate("/admin");

    return(
        <form onSubmit={handleSubmit} autoComplete="off" className="form-login">
            <div className="wraper-input">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required name="email"/>
            </div>
            <div className="wraper-input">
                <input type={typePassword} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required name="password" />
                { !visible ? <FontAwesomeIcon icon={faEyeSlash} onClick={() => setVisible(true)} className='iconButtonMenu'/> : <FontAwesomeIcon icon={faEye} onClick={() => setVisible(false) } className='iconButtonMenu'/> }
                { error && <div className="danger">Email or Password invalid</div> }
            </div>
            <div className="wraper-input">
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default FormLogin;