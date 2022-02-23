import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentCursoCreate from "../../components/component_create_curso";
import "../../../styles/create-curso.css";

const AdminCursoCreate = () => {
    return(
        <AdminPadrao pag={<ComponentCursoCreate/>}/>
    )
}

export default AdminCursoCreate; 