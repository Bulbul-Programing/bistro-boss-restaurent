import { Helmet } from 'react-helmet-async';
import CartBanner from "../../Shared/CartBanner/CartBanner";
import CartTitle from "../../Shared/CartTitle/CartTitle";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductToken from "../../Shared/ProductToken/ProductToken";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FromMenu from "../FromMenu/FromMenu";
import Recommendation from "../Recommendation/Recommendation";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro-boss |home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="mx-32">
                <Category></Category>
                <CartBanner img='https://i.ibb.co/pQT2Q5h/chef-service.jpg' cartTitle='Bistro Boss' cartDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'></CartBanner>
                <CartTitle shortTitle='Check it out' heading='POPULAR MENU'></CartTitle>
                <ProductToken popular='popular' btnName='View Full  Menu'></ProductToken>
                <Recommendation></Recommendation>
                <div className="text-white text-4xl my-16 text-center font-semibold rounded-lg bg-black py-14">Call Us: +88 0192345678910</div>
                <FromMenu></FromMenu>
                <Testimonial></Testimonial>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;