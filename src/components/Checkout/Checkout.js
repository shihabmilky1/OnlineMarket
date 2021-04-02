import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Checkout = () => {
    const { id } = useParams();
    const history = useHistory()
    const handleClick = (ids) => {
        history.push(`/placeOrder/${ids}`)
    }
    const [product, setProduct] = useState({});
    const { name, price, weight, quantity } = product;
    useEffect(() => {
        fetch('https://desolate-cliffs-73684.herokuapp.com/product/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h1>checkout</h1>
                        <table className="table">
                            <thead style={{borderBottom:'0px'}}>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">{name}</td>
                                    <td>{quantity}</td>
                                    <td>${price}</td>
                                </tr>
                                <tr >
                                    <th scope="row">Total</th>
                                    <td></td>
                                    <th>${price}</th>
                                </tr>
                            </tbody>
                        </table>
                        <div className="ms-auto">
                        <button onClick={()=>handleClick(id)} className="mt-3 btn btn-dark">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;