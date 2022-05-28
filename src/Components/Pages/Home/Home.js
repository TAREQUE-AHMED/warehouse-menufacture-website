import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Reviews from './Reviews/Reviews';
import ToolsProducts from './ToolsProducts/ToolsProducts'

const Home = () => {
    return (
        <div className='pb-8'>
            
            <Banner></Banner>
            <ToolsProducts></ToolsProducts>
            <BusinessSummary></BusinessSummary>
            {/* <Reviews></Reviews> */}
            
        </div>
    );
};

export default Home;