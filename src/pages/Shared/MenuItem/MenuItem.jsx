import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex space-x-2'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[118px] h-[104px]' src={image} alt="" />
            <div>
                <h3 className='uppercase font-bold'>{name}---------------------</h3>
                <p>{recipe}</p>
            </div>
            <h3 className='text-yellow-500 font-bold'>${price}</h3>
        </div>
    );
};

export default MenuItem;