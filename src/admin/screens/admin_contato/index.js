import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentContato from "../../components/component_contato";

const AdminContato = () => {
    return(
        <AdminPadrao pag={<ComponentContato/>}/>
    )
}

export default AdminContato;