import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {

    const navOption =
        <>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/'>Home</NavLink>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/contact'>Contact Us</NavLink>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/dashboard'>Dashboard</NavLink>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/menu'>Our Menu</NavLink>
            <NavLink className='px-4 font-bold py-2 rounded-lg' to='/shop'>Our Shop</NavLink>
        </>

    return (
        <div className="navbar fixed z-10 bg-slate-400 bg-opacity-50 text-white">
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
                <img className="w-[50px] h-[50px] rounded-full" src="https://i.ibb.co/FXPbLjC/New-Project-1-200.jpg" alt="" />
                <a className="btn bg-blue-500 text-white">Login</a>
            </div>
        </div>
    );
};

export default Navbar;