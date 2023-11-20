import CartTitle from "../Shared/CartTitle/CartTitle";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import PageBanner from "../Shared/PageBanner/PageBanner";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa";

import ReCAPTCHA from "react-google-recaptcha";
import Recaptcha from "react-recaptcha";


const Contact = () => {
    var callback = function () {
        console.log('Done!!!!');
      };
    return (
        <div>
            <Navbar></Navbar>
            <PageBanner img='https://i.ibb.co/RYsGbMT/banner.jpg' title='CONTACT US' description='Would you like to try a dish?'></PageBanner>
            <div className="mx-32">
                <CartTitle shortTitle='Visit Us' heading='OUR LOCATION'></CartTitle>
                <div className="grid grid-cols-3 gap-x-10 my-10">
                    <div>
                        <div className="bg-[#D1A054] py-3">
                            <FaPhone className="text-white mx-auto text-lg"></FaPhone>
                        </div>
                        <div className="bg-[#F3F3F3] rounded-lg py-5 h-[150px]">
                            <p className="text-lg font-bold mb-3 text-center">PHONE</p>
                            <p className="text-center">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#D1A054] py-3 ">
                            <MdLocationPin className="text-white mx-auto text-lg"></MdLocationPin>
                        </div>
                        <div className="bg-[#F3F3F3] rounded-lg py-5 h-[150px]">
                            <p className="text-lg font-bold mb-3 text-center">ADDRESS</p>
                            <p className="text-center">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#D1A054] py-3">
                            <FaClock className="text-white mx-auto text-lg"></FaClock>
                        </div>
                        <div className="bg-[#F3F3F3] rounded-lg py-5 h-[150px]">
                            <p className="text-lg font-bold mb-3 text-center">WORKING HOURS</p>
                            <p className="text-center">Mon - Fri: 08:00 - 22:00</p>
                            <p className="text-center">Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <CartTitle shortTitle='Send Us a Message' heading='CONTACT FORM'></CartTitle>
                <div className="bg-slate-300 mb-20 px-10 pt-20 pb-10 rounded-lg">
                    <div className="flex justify-between gap-x-10">
                        <input className="px-4 outline-none py-3 rounded-lg text-slate-500 w-full" placeholder="Name" type="text" name="name" />
                        <input className="px-4 outline-none py-3 rounded-lg text-slate-500 w-full" placeholder="Email" type="text" name="Email" />
                    </div>
                    <input className="px-4 my-10 outline-none py-3 rounded-lg text-slate-500 w-full" placeholder="Phone" type="number" name="phone" />
                    <textarea name="massage" className="px-4 mb-5 outline-none py-3 rounded-lg text-slate-500 w-full" placeholder="Write your message here" cols="30" rows="6"></textarea>
                    <Recaptcha sitekey="6LdisBQpAAAAADMXbJU4O4L6jn7bSgkM2AVwrST8" render="explicit" onloadCallback={callback}/>
                    <div className="flex justify-center">
                        <input className="btn cursor-pointer text-white font-bold border-none bg-gradient-to-r to-[#835D23] from-[#B58130]" type="submit" value='Send Massage' />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;