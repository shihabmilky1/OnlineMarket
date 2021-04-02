import React from 'react';
import { useHistory } from 'react-router';

const UserOrder = (props) => {
  console.log(props);
    const {_id} = props.orders;
    const {imageURL,name,quantity,price} = props.orders.orders;
    const history = useHistory();
    const handleDeleteOrder =(id) => {
      fetch(`https://desolate-cliffs-73684.herokuapp.com/deleteOrder/${id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data => history.push('/home'))
    }
    return (
        <div className="col-md-12">
           <div className="card mb-3 shadow" style={{border:'0'}}>
  <div className="row g-0">
    <div className="col-md-2">
      <img src={imageURL} className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Quantity : {quantity}</p>
        <p className="card-text">Price : ${price}</p>
        <p className="card-text"><small className="text-muted">Ordered in <b>{new Date(props.orders.date).toDateString('dd/MM/yyyy')}</b></small></p>
        <button onClick={()=>handleDeleteOrder(_id)} className="btn btn-outline-danger" style={{borderRadius:'0px'}}>Cancel Order</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default UserOrder;