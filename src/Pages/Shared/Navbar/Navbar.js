import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const openInNewTab = url => {
        window.open(url, '_blank');
      };

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-center mx-auto">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/' className="btn btn-ghost hover:border-b-2 hover:font-bold hover:border-fuchsia-600">Home</Link></li>
                    <li>
                        <Link
                          onClick={() => openInNewTab('https://docs.google.com/document/d/1aPCzMnBqJgexNyhXSB8KgyfhNToEXQdwlSILr4ze3cA/export?format=pdf')} 
                        className="btn btn-ghost hover:border-b-2 hover:font-bold hover:border-fuchsia-600">Resume</Link>
                    </li>
                    <li><Link to='/blogs' className="btn btn-ghost hover:border-b-2 hover:font-bold hover:border-fuchsia-600">Blogs</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;