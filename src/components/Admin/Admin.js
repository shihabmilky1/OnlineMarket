import React from 'react';
import { Link } from 'react-router-dom';
import  './admin.css'
import ManageProduct from './ManageProduct';
import Sidebar from './Sidebar';
const Admin = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row h-100 g-0">
                    <div className="col-md-3">
                       <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <ManageProduct></ManageProduct>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;