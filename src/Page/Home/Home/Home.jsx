import CartBanner from "../../Shared/CartBanner/CartBanner";
import CartTitle from "../../Shared/CartTitle/CartTitle";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductToken from "../../Shared/ProductToken/ProductToken";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="mx-32">
                <Category></Category>
                <CartBanner cartTitle='Bistro Boss' cartDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'></CartBanner>
                <CartTitle shortTitle='Check it out' heading='POPULAR MENU'></CartTitle>
                <ProductToken popular='popular'></ProductToken>
                <div className="text-white text-4xl my-16 text-center font-semibold rounded-lg bg-black py-14">Call Us: +88 0192345678910</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;