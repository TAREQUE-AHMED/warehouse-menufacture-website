import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const product = {
            name: data.name,
            shotDescription: data.shotDescription,
            minimumQuantity: data.minimumQuantity,
            available: data.available,
            price: data.price,
            img: data.img
        }

        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };
    return (
        <div className='pl-5 my-5 pb-5'>
            <h2 className='text-5xl text-secondary font-semibold'>Add A New Product</h2>
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                <form className='grid grid-cols-1' onSubmit={handleSubmit(onSubmit)}>
                        <label className='text-xl' htmlFor="#product">Product Name : </label>
                        <input id='product'  className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='text' {...register("name")} d />

                        <label className='text-xl' htmlFor="#message">Short Description : </label>
                        <input id='message' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='text' {...register("shotDescription")} />

                        <label className='text-xl' htmlFor="#minimum">Minimum Quantity : </label>
                        <input id='minimum' name='minimumQuantity' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='number' {...register("minimumQuantity")} />

                        <label className='text-xl' htmlFor="#available">Available : </label>
                        <input id='available' name='minimumQuantity' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='number' {...register("minimumQuantity")} />

                        <label className='text-xl' htmlFor="#price">Price : </label>         
                        <input id='price' name='price' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type="number" {...register("price")} />

                        <label className='text-xl' htmlFor="#image">Image : </label>         
                        <input id='image' name='img' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type="text" {...register("img")} />
                        
                        <input type="submit" className='btn bg-primary  border-0 text-white text-lg w-40 justify-end' value={'Add Product'} />
                    </form>
                    </div>
                </div>
        </div>
    );
};

export default AddNewProduct;