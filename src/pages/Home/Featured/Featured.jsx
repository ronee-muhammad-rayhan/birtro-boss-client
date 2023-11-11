import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white bg-fixed pt-8 my-20'>
            <SectionTitle subHeading="check it out" heading={`Featured Item`}></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad adipisci recusandae commodi debitis est, consequatur officiis aliquid nemo sit molestiae iure ea enim? Qui placeat asperiores quis nobis laboriosam, quae autem nostrum sunt voluptatum error architecto nisi aspernatur porro possimus est, quaerat rerum sapiente sit officiis similique aliquam! Incidunt, libero.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;