import { FaHome, FaRegBookmark } from "react-icons/fa";
import { FaBookJournalWhills, FaCartShopping } from "react-icons/fa6";
import { MdOutlinePayment, MdOutlinePayments, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-[#D1A054] h-screen">
                <ul className="menu menu-vertical"> 
                    <NavLink to='/dashboard/userHome' className='px-2 font-bold py-4 rounded-lg mb-2 flex gap-x-3 items-center'><FaHome className="text-lg"></FaHome> User Home</NavLink>
                    <NavLink to='/dashboard/reservation' className='px-2 font-bold py-4 rounded-lg mb-2 flex gap-x-3 items-center'><FaBookJournalWhills className="text-lg"></FaBookJournalWhills> Reservation</NavLink>
                    <NavLink to='/dashboard/paymentHistory' className='px-2 font-bold py-4 rounded-lg mb-2 flex gap-x-3 items-center'><MdOutlinePayments className="text-lg"></MdOutlinePayments> Payment history</NavLink>
                    <NavLink to='/dashboard/myCart' className='px-2 font-bold py-4 rounded-lg mb-2 flex gap-x-3 items-center'><FaCartShopping className="text-lg"></FaCartShopping> My cart</NavLink>
                    <NavLink to='/dashboard/review' className='px-2 font-bold py-4 rounded-lg mb-2 flex gap-x-3 items-center'><MdReviews className="text-lg"></MdReviews> Add review</NavLink>
                    <NavLink to='/dashboard/myBooking' className='px-2 font-bold py-4 rounded-lg flex gap-x-3 items-center'><FaRegBookmark className="text-lg"></FaRegBookmark> My booking</NavLink>
                </ul>
            </div>
            <div className="m-10 w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;