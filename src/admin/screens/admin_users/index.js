import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentUser from "../../components/component_user";
import "../../../styles/admin-user.css";

const AdminUser = () => {
    return(
        <AdminPadrao pag={<ComponentUser/>}/>
    )
}

export default AdminUser;