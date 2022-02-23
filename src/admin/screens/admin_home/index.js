import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentHome from "../../components/component_home";
import "../../../styles/admin-home.css";

const AdminHome = () => {
    return(
        <AdminPadrao pag={<ComponentHome/>}/>
    )
}

export default AdminHome;