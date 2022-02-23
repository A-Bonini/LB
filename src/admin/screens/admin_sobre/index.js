import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentSobre from "../../components/component_sobre";
import "../../../styles/admin-sobre.css";

const AdminSobre = () => {
    return(
        <AdminPadrao pag={<ComponentSobre/>}/>
    )
}

export default AdminSobre;