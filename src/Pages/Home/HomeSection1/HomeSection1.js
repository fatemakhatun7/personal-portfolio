import React from 'react';
import { Link } from 'react-router-dom';
import fatema from '../../../Assets/Images/fatema-formal-pic.jpg';

const HomeSection1 = () => {

    const openInNewTab = url => {
        window.open(url, '_blank');
      };

    return (
        <div>
            <div className="card md:card-side bg-base-200 shadow-xl">
                <div className="avatar">
                    <div className="w-80 mask mask-hexagon">
                        <img src={fatema} alt=""/>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Fatema Khatun</h2>
                    <p>MERN Stack Developer</p>
                    <div className='block sm:flex justify-around'>
                        <div className='mb-5'>
                            <p className='font-bold'>Expertise:</p>
                            <ul class="list-disc ml-10">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>React router dom</li>
                                <li>Browser API</li>
                                <li>Bootstrap</li>
                                <li>Tailwind (DaisyUI)</li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <p className='font-bold'>Comfortable:</p>
                            <ul class="list-disc ml-10">
                                <li>Dev Tool and Debug</li>
                                <li>MongoDB</li>
                                <li>Express.js</li>
                                <li>Netlify</li>
                                <li>firebase</li>
                                <li>vercel</li>
                                <li>JWT Token</li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <p className='font-bold'>Familiar:</p>
                            <ul class="list-disc ml-10">
                                <li>Node JS</li>
                                <li>Redux</li>
                            </ul>
                            <p className='font-bold mt-5'>Tools:</p>
                            <ul class="list-disc ml-10">
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>VS code</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link onClick={()=>{openInNewTab('https://form.jotform.com/223434028456454')}} className="btn btn-primary">Contact me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection1;