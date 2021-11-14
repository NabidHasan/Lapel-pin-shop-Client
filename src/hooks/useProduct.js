import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        console.log(products)
    }, [])
    console.log(products);

    return [products, setProducts]
};

export default useProduct;