import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentCursos from "../../components/component_cursos";
import "../../../styles/style-admin-cursos.css";

const AdminCursos = () => {
    return(
        <AdminPadrao pag={<ComponentCursos/>}/>
    )
}

export default AdminCursos;