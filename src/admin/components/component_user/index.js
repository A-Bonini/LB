import React, { useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from "@fortawesome/free-solid-svg-icons";
import UserService from "../../../services/users";
import { Link } from "react-router-dom";

const Component_User = () => {
    const [users, setUsers] = useState([]);
    const [deleteId, setDeleteId] = useState("");
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        getDataUsers();
    }, []);

    const getDataUsers = async () => {
        await UserService.get().then((response) => {
            setUsers(response.data);
            setCurrentUser(JSON.parse(localStorage.getItem('user')));
        })
    }

    const handleClickDelete = async (id) => {
        setDeleteId(id);
    }

    const DeleteUser = async (id) => {
        await UserService.delete(id).then(() => {
            setDeleteId("");
            getDataUsers();
        });
    }


    return(
        <div className="painel">
            <div className="wraper-user-all">
                <div className="wraper-user-topo">
                    <h2>Usuarios:</h2>
                    <Link to="/admin/user/register">
                        <button>Add</button>
                    </Link>
                </div>
                <div className="content-users">
                    { users.map((item,key) =>     
                        <div key={key} className={currentUser._id == item._id ? "wraper-user current-user" : "wraper-user"}>
                            <div className="info-user">
                            <h4>{item.name}</h4>
                            <p>{item.email}</p>
                            </div>
                            <div className="delete-user">
                                <FontAwesomeIcon icon={ faBan } onClick={(e) => handleClickDelete(item._id)}/>
                            </div>
                        </div>   
                    )}
                </div>

                {deleteId !== "" ? 
                <div className="bg">
                    <div className="box-bg">
                        <h3>Deseja realmente deletar?</h3>
                        <div className="buttons-delete">
                            <button onClick={() => DeleteUser(deleteId)}>Deletar</button>
                            <button onClick={() => setDeleteId("")}>Cancelar</button>
                        </div>
                    </div>    
                </div>
                : "" }
            </div>
        </div>
    )
}

export default Component_User;