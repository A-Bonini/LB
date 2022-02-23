import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componets/header";
import Home from "./Componets/home";
import Sobre from "./Componets/sobre";
import Footer from "./Componets/footer";
import Cursos from "./Componets/cursos";
import Contato from "./Componets/contato";
import AdminLogin from "./admin/screens/login";
import AdminHome from "./admin/screens/admin_home";
import AdminSobre from "./admin/screens/admin_sobre";
import AdminCursos from "./admin/screens/admin_cursos";
import AdminCursoCreate from "./admin/screens/admin_cursos_create";
import AdminCursoEdit from "./admin/screens/admin_cursos_edit";
import AdminContato from "./admin/screens/admin_contato";
import AdminMedia from "./admin/screens/admin_media";
import AdminUser from "./admin/screens/admin_users";
import AdminUserRegister from "./admin/screens/admin_users_register";
import AdminUserEdit from "./admin/screens/admin_user_edit";
import PrivateRouter from "./Componets/Auth/private_route";

const Router = () => (
    <div className="fundo" style={{backgroundImage: "url(/cidade-dark.jpg)"}}>
        <div className="blur">   
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={   <Fragment>
                                                    <Header/>
                                                    <Home/>
                                                    <Footer/>
                                                </Fragment>}  />

                    <Route path="/sobre" element={<Fragment>
                                                    <Header/>
                                                    <Sobre/>
                                                    <Footer/>
                                                </Fragment>} />

                    <Route path="/cursos" element={<Fragment>
                                                    <Header/>
                                                    <Cursos/>
                                                    <Footer/>
                                                </Fragment>} />

                    <Route path="/contato" element={<Fragment>
                                                        <Header/>
                                                        <Contato/>
                                                        <Footer/>
                                                    </Fragment> } />

                    <Route path="/admin/login" element={<AdminLogin/>} />

                    <Route path="/admin" element={  <PrivateRouter>
                                                        <AdminHome/>
                                                    </PrivateRouter>} />

                    <Route path="/admin/sobre" element={<PrivateRouter>
                                                            <AdminSobre/>
                                                        </PrivateRouter>} />

                    <Route path="/admin/cursos" element={  <PrivateRouter>
                                                                <AdminCursos/>
                                                            </PrivateRouter>} />
                    
                    <Route path="/admin/cursos/create" element={<PrivateRouter>
                                                                    <AdminCursoCreate/>
                                                                </PrivateRouter>} />

                    <Route path="/admin/cursos/:id/edit" element={  <PrivateRouter>
                                                                        <AdminCursoEdit/>
                                                                    </PrivateRouter>} />

                    <Route path="/admin/contato" element={  <PrivateRouter>
                                                                <AdminContato/>
                                                            </PrivateRouter>} />

                    <Route path="/admin/media" element={   <PrivateRouter>
                                                                <AdminMedia/>
                                                            </PrivateRouter>} />

                    <Route path="/admin/user" element={     <PrivateRouter>
                                                                <AdminUser/>
                                                            </PrivateRouter>} />
                    
                    <Route path="/admin/user/register" element={    <PrivateRouter>
                                                                        <AdminUserRegister/>
                                                                    </PrivateRouter>} />
                        
                    <Route path="/admin/user/edit" element={    <PrivateRouter>
                                                                    <AdminUserEdit/>
                                                                </PrivateRouter>} />
                
                </Routes>
            </BrowserRouter>
        </div>
    </div>
)

export default Router;