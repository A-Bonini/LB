import React, { useState, useEffect} from "react";
import UserService from "../../../services/users";
import { useNavigate } from "react-router-dom";

const Component_User_Edit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        getDataUser();
    }, []);

    useEffect(() => {
        if(errorName === true){
            setErrorName(false);
        }

    }, [email,name]);

    useEffect(() => {
        if(errorPassword === true){
            setErrorPassword(false);
        }
    }, [password, passwordConfirm]);

    const getDataUser = async () => {
        let user = JSON.parse(localStorage.getItem("user"));
        setName(user.name);
        setEmail(user.email);
    }

    const handleSubmitUpdateInfo = async (e) => {
        e.preventDefault();

        await UserService.updateInfo(name,email).then((data) => {
            if(data.data.error){
                setErrorName(true);
            } else {
                setRedirect(true);
            }
        }).catch(() => {
            setErrorName(true);
        });
    }

    const handleSubmitUpdatePass = async (e) => {
        e.preventDefault();


        if(password === passwordConfirm){
            await UserService.updatePassword(password).then((data) => {
                if(data.data.error){
                    setErrorPassword(true)
                } else {
                    setRedirect(true);
                }
            }).catch(() => {
                setErrorPassword(true);
            });
        } else {
            setErrorPassword(true);
        }
        
    }

    let navigate = useNavigate();

    if(redirect)
        navigate("/admin/user")


    return(
        <div className="wraper-user-all">
            <div className="painel user-edit">
                <div className="wraper-box-edit">
                    <div className="box-edit-user">
                        <form onSubmit={handleSubmitUpdateInfo}>
                            <div className="wraper-edit-user">
                                <label for="name_user">Name: </label>
                                <input type="text" id="name_user" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="wraper-edit-user">
                                <label for="email_user">Email: </label>
                                <input type="email" id="email_user" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                { errorName && <div className="danger">Erro ao Atualizar o Usuário</div> }
                            </div>
                            <div className="wraper-edit-user">
                                <input type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="wraper-box-edit">
                    <div className="box-edit-user">
                        <form onSubmit={handleSubmitUpdatePass}>
                            <div className="wraper-edit-user">
                                <label for="password_user">Password:</label>
                                <input type="password" id="password_user" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="wraper-edit-user">
                                <label for="password_confirm_user">Password confirm:</label>
                                <input type="password" id="password_confirm_user" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                                { errorPassword && <div className="danger">Erro ao Atualizar a Senha</div> }
                            </div>
                            <div className="wraper-edit-user">
                                <input type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component_User_Edit;