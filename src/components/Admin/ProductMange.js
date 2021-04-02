import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
const ProductMange = (props) => {
    const {name,price,weight ,_id} = props.products;
    const history = useHistory()
    const handleDelete = id => {
        fetch(`https://desolate-cliffs-73684.herokuapp.com/delete/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
                history.push('/admin/addProduct')

    })
    }
    return (   
                     <>
                     <tr>
                         <td scope="row">{name}</td>
                         <td>{weight}</td>
                         <td>{price}</td>
                         <td><button onClick={() => handleDelete(_id)} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} /> </button></td>
                     </tr>
                     </>
                     
                    
     
    );
};

export default ProductMange;