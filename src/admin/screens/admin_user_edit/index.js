import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentUserEdit from "../../components/component_user_edit";
import "../../../styles/admin-user-edit.css";

const AdminUserEdit = () => {
    return(
        <AdminPadrao pag={<ComponentUserEdit/>}/>
    )
}

export default AdminUserEdit;