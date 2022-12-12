import React from 'react';
import { Link } from 'react-router-dom';

const BrainyHub = () => {

    const openInNewTab = url => {
        window.open(url, '_blank');
      };

    return (
        <div className='my-10'>
            <div className='mt-10'>
                <p 
                className='text-center text-3xl font-bold text-blue-800 my-10'
                >The Brainy Hub</p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/DtXwNkN/brainyhub1.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>In this home page, if you click the register or login button to explore more and get more services</li>
                                <li>New user will choose register and previous user will choose log in.</li>
                                <li>You can also go blogs section by clicking the blogs button.</li>
                                <li>Old user will see logout button</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/the-brainy-hub-client')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://the-brainy-hub.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/q0LNRRt/brainyhub2.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>If an user sign up or sign in, and select a 'go' button, the user will see all the services.</li>
                                <li>User can get service details here.</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/the-brainy-hub-client')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://the-brainy-hub.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/ZHCWx6w/brainyhub3.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body mx-10 mb-3">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>User can enroll a course to be skillful.</li>
                                <li>User know about the full product detail enroll a course brainyhub.</li>
                            </ul>
                    </div>
                    <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={
                        ()=>{openInNewTab('https://github.com/fatemakhatun7/the-brainy-hub-client')}
                    }
                    className='btn'>
                        Code
                    </Link>
                    <Link onClick={
                        ()=>{openInNewTab('https://the-brainy-hub.web.app')}
                    }
                    className="btn">visit</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BrainyHub;