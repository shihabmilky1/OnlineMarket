import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import UserOrder from './UserOrder';

const Orders = () => {
    const [logInUser,setLogInUser] = useContext(UserContext);
    const [spinner,setSpinner] = useState(true);
    const [userOrder,setUSerOrder] = useState([]);
    useEffect(()=>{
        fetch('https://desolate-cliffs-73684.herokuapp.com/getOrders?email=' + logInUser.email)
        .then(res => res.json())
        .then(data => {
            setUSerOrder(data)
            setSpinner(false)
        })
    },[])
    const loader = 
    <div className="text-center">
        <div class="spinner-grow text-center" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;
    </div>
    return (
        <div>
           <div className="container">
           <h1 className="mt-3">Orders</h1>
               <div className="row mt-5">
               {spinner ? loader :userOrder.map(order => <UserOrder orders={order}></UserOrder>)}
               </div>
           </div>
        </div>
    );
};

export default Orders;