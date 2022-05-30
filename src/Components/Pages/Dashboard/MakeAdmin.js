import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading/Loading';
import UsersRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('make admin', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='pl-5 h-screen my-5'>
            <h2 className='text-5xl text-primary text-center font-semibold'>Make Admin</h2>
            <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Users</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UsersRow key={user._id} user={user} index={index} refetch={refetch} ></UsersRow>)
                        }
                    </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;