import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Component/AuthProvider/AuthProvider";
import swal from "sweetalert";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    const [hideNavbar, setHideNavbar] = useState(false);

    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
                swal('success', 'logout success', 'success')
            })
    }

    useEffect(() => {
        let prevScroll = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;

            if (prevScroll > currentScrollPos) {
                setHideNavbar(false);
            } else {
                setHideNavbar(true);
            }
            prevScroll = currentScrollPos;
        };
    }, []);
    const navOption =
        <>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/'>Home</NavLink>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/dashboard'>Dashboard</NavLink>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/menu'>Our Menu</NavLink>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/shop'>Our Shop</NavLink>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/contact'>Contact Us</NavLink>
            <button className="px-2 relative">
                <p><FaCartPlus className="text-lg"></FaCartPlus></p>
                <div className="badge bg-blue-500 text-white border-none ml-2 absolute top-[-10px]">0</div>
            </button>
        </>

    return (
        <div className={`navbar sticky z-10 bg-slate-400 bg-opacity-50 text-white transition duration-500 ${hideNavbar ? 'translate-y-[-100px]' : 'top-0 translate-y-0'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        <div className="flex flex-col items-center">
                            {navOption}
                        </div>
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-xl uppercase">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div>
                        {navOption}

                    </div>

                </ul>

            </div>
            <div className="navbar-end flex gap-x-3">
                <p>{user?.displayName}</p>
                <div>
                    {
                        user && <img className="w-[50px] h-[50px] rounded-full" src="https://i.ibb.co/FXPbLjC/New-Project-1-200.jpg" alt="" />
                    }
                </div>
                <div>
                    {
                        user ? <button onClick={handleLogout} className="btn bg-blue-400 text-white">Log out</button> : <Link to='/login'><button className="btn bg-blue-400 text-white">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;