import React from 'react';
import { Link } from 'react-router-dom';

const Bsarees = () => {

    const openInNewTab = url => {
        window.open(url, '_blank');
      };

    return (
        <div className='my-10'>
            <div className='mt-10'>
                <p 
                className='text-center text-3xl font-bold text-blue-800 my-10'
                >B Sarees</p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/6YDGhwy/bsarees1.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>In this home page, if you click the join us button, it will provide you two options (sign in and sign up) to explore more and get more services</li>
                                <li>New user will choose sign up and previous user will choose sign in.</li>
                                <li>User have to provide some valid information to join the website. User can join as buyer or seller.</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/b-sarees-client-side')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://b-sarees.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/zPBnShK/bsarres2.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>If an user sign up or sign in, and select a 'see more' button from category section , the user will see the selected category based product in a different route.</li>
                                <li>User can book product or save it to the wishlist to buy it letter.</li>
                                <li>User can complete the payment and confirm his/her product.</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/b-sarees-client-side')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://b-sarees.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/3MXn0Pw/bsarees3.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>A registered user the dashboard button in the navbar.</li>
                                <li>After click the dashboard button,there will be different route for different user (buyer or seller or admin)</li>
                                <li>Admin will see: all users, all buyers, all sellers, reported items button and can see the details.</li>
                                <li>Buyer will see: wishlist, my orders button and can see the details.</li>
                                <li>Seller will see: My products, add products button and can see the details.</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/b-sarees-client-side')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://b-sarees.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Bsarees;