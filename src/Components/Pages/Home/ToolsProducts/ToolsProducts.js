import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
// import Loading from '../../Share/Loading/Loading';
import ToolsProduct from '../ToolsProduct/ToolsProduct';

const ToolsProducts = () => {
    // const { data: products, isLoading } = useQuery('tools', () => fetch('http://aqueous-sierra-45726.herokuapp.com/products').then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-sierra-45726.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
            setProducts(data)
        })
    }, [])

    return (
        <div className='px-20 py-10'>
            <h2 className='text-3xl font-bold pt-10 text-primary'>Our Products</h2>
            <div className='w-ful h-1 bg-gray-200 mt-5 mb-10 relative'>
                <div className='w-48 h-1 bg-primary absolute'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    products.map(product => <ToolsProduct key={product._id} product={product}></ToolsProduct>).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default ToolsProducts;