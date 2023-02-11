import React from 'react';
import banner from '../../../image/Banner.png'
const Banner = () => {
    return (
        <div>
            <div className='flex justify-between my-11'>
                <h1 className='text-7xl font-semibold'>Stylish Furniture</h1>
                <div>
                <div className="badge badge-outline badge-lg"><p>01/05</p></div>
                    <p>*BY RAZAN SARKER SANTA</p>
                </div>
            </div>
            <img className='w-full' src={banner} alt="Banner Pic" />
        </div>
    );
};

export default Banner;