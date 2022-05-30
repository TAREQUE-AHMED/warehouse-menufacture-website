import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../Share/firebase.init';
import Loading from '../../Share/Loading/Loading';

const Order = () => {
    const [user] = useAuthState(auth);
    const { orderId } = useParams();

    const { register,formState: { errors }, handleSubmit } = useForm();

    const { data: orders, isLoading } = useQuery('product orders', () => fetch(`http://localhost:5000/products/${orderId}`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
        const order = {
            orderId: orders._id,
            Order: orders.name,
            userEmail: user?.email,
            userName: user?.displayName,
            quantity: data.quantity,
            totalAmount: parseFloat(orders.price) * parseInt(data.quantity),
            phone: data.phone,
            address: data.address
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };

    return (
        <div>
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
                <figure><img src={orders.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl pb-3">Product-Name : {orders.name}</h2>
                    <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
                        <label className='text-xl' htmlFor="#buyer">Your Name : </label>
                        <input id='buyer' value={user?.displayName} className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='text' {...register("buyer")} disabled />

                        <label className='text-xl' htmlFor="#email">Your Email : </label>
                        <input id='email' value={user?.email} className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='email' {...register("email")} disabled />

                        <label className='text-xl' htmlFor="#mobile">Your Number : </label>
                        <input id='mobile' name='phone' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='tel' {...register("phone")} />

                        <label className='text-xl' htmlFor="#addressInfo">Your Address : </label>
                        <textarea name="address" id="addressInfo" className='border-2 text-2xl border-gray-300 rounded px-3 py-2' cols="30" rows="2" {...register("address")}></textarea>

                        <label className='text-xl' htmlFor="#quantity">Quantity : </label>         
                        <input id='quantity' name='quantity' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type="number" {...register("quantity", { min: `${orders?.minimumQuantity}`, max: `${orders?.available}` })} />
                        
                        <input type="submit" className='btn btn-primary hover:bg-black border-0 text-white  hover:text-xl text-lg w-32' value={'Confirm'} disabled={errors?.message === 'min' && errors?.message === 'max'} />
                    </form>
                </div>
                </div>
        </div>
    );
};

export default Order;