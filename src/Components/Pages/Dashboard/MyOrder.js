import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../Share/firebase.init';
import Loading from '../Share/Loading/Loading';
import OrderRows from './OrderRows';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading } = useQuery('orders', () => fetch(`http://aqueous-sierra-45726.herokuapp.com/orders?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        console.log(res);
        return res.json();
    }));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='pl-5 h-screen my-5'>
            <h2 className='text-5xl text-secondary font-semibold'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRows key={order._id} myOrder={order} index={index}></OrderRows>)
                        }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyOrders;