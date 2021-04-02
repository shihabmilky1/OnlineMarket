import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [products,setProducts] = useState([]);
    const [spinner,setSpinner] = useState(true);
    useEffect(()=>{
        fetch('https://desolate-cliffs-73684.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setSpinner(false)
        })
    },[])
    const loader = 
    <div className="text-center" style={{marginTop:'15%'}}>
        <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>;
    return (
        <div>
            <div className="container">
                <div className="row g-4 mt-5">
                {spinner ? loader : products.map(pd => <Products products={pd} key={pd._id} ></Products>)}
                </div>
            </div>
        </div>
    );
};

export default Home;