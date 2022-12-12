import React from 'react';
import { Link } from 'react-router-dom';

const DoctorG = () => {

    const openInNewTab = url => {
        window.open(url, '_blank');
      };

    return (
        <div className='my-10'>
            <div className='mt-10'>
                <p 
                className='text-center text-3xl font-bold text-blue-800 my-10'
                >Doctor G</p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/BfBSRMn/doctorg1.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3 hidden sm:block">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>In this home page, if you click the Get started button, it will provide you two options (sign in and sign up) to explore more and get more services</li>
                                <li>New user will choose sign up and previous user will choose sign in.</li>
                                <li>You can also go blogs section by clicking the blogs button.</li>
                                <li>Click the mental health section and You will get mental health tips.</li>
                                <li>You can also report the items.</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/doctor-g-client')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://doctor-g-7475c.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/rmymZR2/doctorg2.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3 hidden sm:block">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>If an user sign up or sign in, and select a 'see all' button, the user will see all the categories.</li>
                                <li>User can get product details here.</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/doctor-g-client')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://doctor-g-7475c.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/2SDr8VF/doctorg3.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3 hidden sm:block">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>User can add review for each items.</li>
                                <li>User can see his/her all reviews</li>
                                <li>user can also delete and update the review.</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/doctor-g-client')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://doctor-g-7475c.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorG;