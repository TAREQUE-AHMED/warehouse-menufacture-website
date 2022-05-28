import React from 'react';
import { FaFontAwesomeFlag, FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";


const BusinessSummary = () => {
    return (
        <section className='px-28'>
            <h2 className='text-3xl font-bold pt-10 text-primary'>Business Summary</h2>
            <div className='w-ful h-1 bg-gray-200 mt-5 mb-10 relative'>
                <div className='w-60 h-1 bg-primary absolute'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-16'>
                <div>
                    <BsPeopleFill className='text-8xl text-primary mb-5'></BsPeopleFill>
                    <div className="indicator">
                        <h4 className='text-5xl font-semibold mb-2'>50+</h4>
                    </div>
                    <h1 className='text-xl'>Happy Customers</h1>
                </div>
                <div>
                    <FaFontAwesomeFlag className='text-8xl text-primary mb-5'></FaFontAwesomeFlag>
                    <div className="indicator">
                        <h4 className='text-5xl font-semibold mb-2'>15+</h4>
                    </div>
                    <h1 className='text-xl'>Countries</h1>
                </div>
                <div>
                    <MdMessage className='text-8xl text-primary mb-5'></MdMessage>
                    <div className="indicator">
                        <h4 className='text-5xl font-semibold mb-2'>75+</h4>
                    </div>
                    <h1 className='text-xl'>Customers Comment</h1>
                </div>
                <div>
                    <MdOutlineEventAvailable className='text-8xl text-primary mb-5'></MdOutlineEventAvailable>
                    <div className="indicator">
                        <span className="indicator-item text-3xl font-bold ml-2">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>75</h4>
                    </div>
                    <h1 className='text-xl'>Products</h1>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;