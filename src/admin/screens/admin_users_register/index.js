import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentUserRegister from "../../components/component_user_register";
import "../../../styles/admin-user-register.css";

const AdminUserRegister = () => {
    return(
        <AdminPadrao pag={<ComponentUserRegister/>}/>
    )
}

export default AdminUserRegister;