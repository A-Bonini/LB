import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentCursoEdit from "../../components/component_edit_curso";
import "../../../styles/create-curso.css";

const AdminCursoEdit = () => {
    return(
        <AdminPadrao pag={<ComponentCursoEdit/>}/>
    )
}

export default AdminCursoEdit; 