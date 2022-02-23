import React from "react";
import AdminPadrao from "../../components/admin_padrao";
import ComponentMedia from "../../components/component_media";
import "../../../styles/media.css";

const AdminMedia = () => {
    return(
        <AdminPadrao pag={<ComponentMedia/>}/>
    )
}

export default AdminMedia;