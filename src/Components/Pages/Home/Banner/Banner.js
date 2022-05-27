import React from 'react';

const Banner = () => {
    const handleControl = () => {
        
    }
    return (
        <div>
            <div className="carousel w-full relative">
                    <div id="item1" className="carousel-item w-full">
                        <img style={{height: '700px'}} src="https://www.freepik.com/free-psd/people-with-technology-mockup_22132333.htm#query=laptop&position=47&from_view=search" className="w-full relative" />
                        <h3 className='absolute'>Slider 1</h3>
                    </div> 
                    <div id="item2" className="carousel-item w-full">
                        <img style={{height: '700px'}} src="https://www.freepik.com/premium-photo/laptop-computer-wooden-bar-balcony-apartment_20464817.htm#query=laptop&position=9&from_view=search" className="w-full" />
                    </div> 
                    <div id="item3" className="carousel-item w-full">
                        <img style={{height: '700px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEytuCPcPd_vooXRJB0JCNlqIarvOU6faWkQ&usqp=CAU" className="w-full" />
                    </div> 
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs relative mt-[-150px]">1</a> 
                <a href="#item2" className="btn btn-xs relative mt-[-150px]">2</a> 
                <a href="#item3" className="btn btn-xs relative mt-[-150px]">3</a> 
            </div>
        </div>
    );
};

export default Banner;