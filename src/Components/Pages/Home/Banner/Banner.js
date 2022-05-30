import React from 'react';

const Banner = () => {
        
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeLUyTeJa2rbIxTRez2FPk6EATix5MrtOAw&usqp=CAU" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Laptop Pro!</h1>
            <p className="py-6">Laptop pro is multi nation laptop parts seller company....</p>
            <button className="btn btn-primary">Read More</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;