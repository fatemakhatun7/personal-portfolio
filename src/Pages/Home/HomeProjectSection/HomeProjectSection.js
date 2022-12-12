import React from 'react';
import { Link } from 'react-router-dom';

const HomeProjectSection = () => {

    return (
        <div className='my-10'>
            <div className='mt-10'>
                <p 
                className='text-center text-3xl font-bold text-blue-800 my-10'
                >Projects you should visit</p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/q752Zsj/o2.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">B Sarees</h2>
                        <p>This project is all about buying and selling used sarees.</p>
                    </div>
                    <div className="mx-10 mb-3 hidden sm:block">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>This project has different dashboard layout for buyer, seller and admin.</li>
                                <li>It contains CRUD operation system that helps user to create, read, update and delete things.</li>
                                <li>It has Authentication system during  sign up, sign in and accessing  private routes.</li>
                            </ul>
                    </div>
                    <div className='text-center mb-3'>
                        <Link to='/bsarees' 
                        className="btn">Explore more</Link>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Kq5tb3s/doctor.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Doctor G</h2>
                        <p>Find your mental health solution here.</p>
                    </div>
                    <div className="mx-10 mb-3 hidden sm:block">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>This project has firebase authentication system to continue to the website and more routes.</li>
                                <li>It contains CRUD operation system that helps user to create, read, update and delete things.</li>
                                <li>In this project, user can update his/her profile and can send requests to add desired services.</li>
                            </ul>
                    </div>
                    <div className='text-center mb-3'>
                    <Link to='/doctorg' 
                        className="btn">Explore more</Link>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/2jsH95g/category02-1.jpg" alt="" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">The Brainy Hub</h2>
                        <p>Learn different kinds of languages here.</p>
                    </div>
                    <div className="mx-10 mb-3 hidden sm:block">
                        <p className='font-bold'>Features:</p>
                            <ul class="list-disc ml-10">
                                <li>This project has  Register, Login and logOut function. Show errors when accessing  the wrong route.</li>
                                <li>It has dynamic routes  and user can edit his/her  profile by accessing the profile route.</li>
                                <li>It contains react icons and react hot toast.</li>
                            </ul>
                    </div>
                    <div className='text-center mb-3'>
                    <Link to='/brainyhub' 
                        className="btn">Explore more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectSection;