import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row g-4 mt-5">
                {products.map(pd => <Products products={pd} key={pd._id} ></Products>)}
                </div>
            </div>
        </div>
    );
};

export default Home;