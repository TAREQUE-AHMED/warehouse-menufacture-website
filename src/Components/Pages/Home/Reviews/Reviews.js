import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';

const Reviews = () => {
    // const { data: comments, isLoading } = useQuery('comments', () => fetch('http://aqueous-sierra-45726.herokuapp.com/comments').then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('http://aqueous-sierra-45726.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [])
    return (
        <div className='px-20'>
            <h2 className='text-3xl font-bold pt-10 text-primary'>Reviews</h2>
            <div className='w-ful h-1 bg-gray-200 mt-5 mb-10 relative'>
                <div className='w-28 h-1 bg-primary absolute'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                {
                    comments.map(comment => 
                        <div class="carousel w-full">
                                <div class="card card-compact bg-base-100 shadow-xl">
                                    <figure><img src={comment.img} alt="Shoes" /></figure>
                                    <div class="card-body">
                                        <h2 class="card-title">{comment.name}</h2>
                                        <p>Comment : {comment.comment}</p>
                                        <p>Profession : {comment.profession}</p>
                                    </div>
                                </div>
                        </div>
                    ).slice(0, 3)
                }
            </div>
        </div>
    );
};

export default Reviews;