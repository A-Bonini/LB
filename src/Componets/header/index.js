import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(){
    const [menu, setMenu] = useState(false);
    const [verifyFirst, setVerifyFirst] = useState();
    const [delay, setDelay] = useState(false);

    const clickedMenu = () => {
        let varDelay;
        if(menu == false){
            setMenu(true);
            clearTimeout(varDelay);
            setDelay(false)
        }else{
            setMenu(false);
            setVerifyFirst(true);
            varDelay = setTimeout(() => {
                setDelay(true);
            }, 800);
        }
    }

    return(
        <header>
            <div className="container">
                <div className="header-left">
                    <Link to="/">
                        <img src="../logo2.png"/>
                    </Link>
                </div>
                <div className="header-right">
                    <nav className="menu-desktop">
                        <ul>
                            <Link to="/">
                                <li className="color-especial">Home</li>
                            </Link>
                            <Link to="/sobre">
                                <li>Sobre</li>
                            </Link>
                            <Link to="/cursos">
                                <li className="color-especial">Cursos</li>
                            </Link>
                            <Link to="/contato">
                                <li>Contato</li>
                            </Link>
                        </ul>
                    </nav>
                    <nav className="menu-mobile">
                        <FontAwesomeIcon onClick={clickedMenu} icon={ faBars } className='iconButtonMenu'/>
                        <ul className={ menu == true ? "open" : verifyFirst == true ? delay == false ? "close" : "close delay" : "first"}>
                            <Link to="/">
                                <li className="color-especial">Home</li>
                            </Link>
                            <Link to="/sobre">
                                <li>Sobre</li>
                            </Link>
                            <Link to="/cursos">
                                <li className="color-especial">Cursos</li>
                            </Link>
                            <Link to="/contato">
                                <li>Contato</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;