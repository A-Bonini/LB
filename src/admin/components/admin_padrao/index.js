import React, { Fragment, useState, useEffect } from "react";
import "../../../styles/style-admin-padrao.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBook, faQuestionCircle, faPhoneAlt, faEnvelope, faWrench, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../services/users";

const AdminHome = (props) => {
    const [user, setUser] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [menu, setMenu] = useState(true);
    const [size, setSize] = useState();

    useEffect(async () => {
        let usuario = await localStorage.getItem("user");
        let ArrayJSON = JSON.parse(usuario);
        setUser(ArrayJSON);
    }, []);

    useEffect(async() => {
        function updateSize(){
            setSize(window.innerWidth);
        }
        await window.addEventListener('resize', updateSize);
    }, []);

    const Logout = async () => {
        await UserService.logout();
        setRedirect(true);
    }

    const handleClickMenu = () => {
        if(menu === true){
            setMenu(false);
        } else if(menu === false){
            setMenu(true);
        }
    }

    let navigate = useNavigate();

    if(redirect)
        navigate("/");

    return(
        <div className="all">
            <div className="sidebar" style={!menu ? size < 300 ? {marginLeft: "-200px", transition: "2s"} : {marginLeft: "-250px", transition: "2s"} : {marginLeft: "0px",transition: "2s"}}>
                <div className="sidebar__topo">
                    <Link to="/">
                        <h3>LBJ</h3>
                    </Link>
                </div>
                <nav className="sidebar__menu">
                    <ul>
                        <Link to="/admin">
                            <li>
                                <FontAwesomeIcon icon={ faClone } />
                                <h5>Home</h5> 
                            </li>
                        </Link>

                        <Link to="/admin/sobre">
                            <li>
                                <FontAwesomeIcon icon={ faQuestionCircle } />
                                <h5>Sobre</h5> 
                            </li>
                        </Link>

                        <Link to="/admin/cursos">
                            <li>
                                <FontAwesomeIcon icon={ faBook } />
                                <h5>Cursos</h5> 
                            </li>
                        </Link>

                        <Link to="/admin/contato">
                            <li>
                                <FontAwesomeIcon icon={ faEnvelope } />
                                <h5>Contato</h5> 
                            </li>
                        </Link>

                        <Link to="/admin/media">
                            <li>
                                <FontAwesomeIcon icon={ faPhoneAlt } />
                                <h5>Social</h5> 
                            </li>
                        </Link>

                        <Link to="/admin/user">
                            <li>
                                <FontAwesomeIcon icon={ faUser } />
                                <h5>Usuários</h5>
                            </li>
                        </Link>
                        <li>
                            <button onClick={() => Logout()}>Logout</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content-main" style={!menu ? {width: "100%", transition: "2s"} : {transition: "2s"}}>
                <div className="header-main">
                    <FontAwesomeIcon icon={ faBars } onClick={() => handleClickMenu()}/>
                    <div className="nome-usuario">
                        <h3>{user.name}</h3>
                    </div>
                    <div className="email-usuario">
                        <h3>{user.email}</h3>
                    </div>
                    <div className="settings">
                        <Link to="/admin/user/edit">
                            <FontAwesomeIcon icon={ faWrench } />
                        </Link>
                    </div> 
                </div>
                <div className="content-painel">
                    {props.pag}
                </div>
            </div>
        </div>
    )
}

export default AdminHome;