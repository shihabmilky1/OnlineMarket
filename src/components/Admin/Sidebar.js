import React from 'react';
import { Link } from 'react-router-dom';
import  './admin.css'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen , faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    return (
        <div>
            <div className="SideNav text-center pt-5">
                       <ul >
                           <li> <Link to="/admin/manageProduct"><FontAwesomeIcon icon={faMicrosoft} /> Manage Product </Link></li>
                            <li> <Link to="/admin/addProduct"><FontAwesomeIcon icon={faPlus} /> Add Product </Link></li>
                            <li><Link to=""><FontAwesomeIcon icon={faPen} /> Edit Product </Link></li>
                        </ul>
                       </div>
        </div>
    );
};

export default Sidebar;