import CartBanner from "../../Shared/CartBanner/CartBanner";
import CartTitle from "../../Shared/CartTitle/CartTitle";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import ProductToken from "../../Shared/ProductToken/ProductToken";

const Menu = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PageBanner img='https://i.ibb.co/XbLTbjH/banner3.jpg' title='OUR MENU' description='Would you like to try a dish?'></PageBanner>
            <div className="mx-32">
                <CartTitle shortTitle='Do not miss' heading='TODAY OFFER'></CartTitle>
                <ProductToken popular='popular' btnName='ORDER YOUR FAVOURITE FOOD'></ProductToken>
                <CartBanner cartTitle='DESSERTS' cartDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></CartBanner>
                <ProductToken popular='dessert' btnName='ORDER YOUR FAVOURITE FOOD'></ProductToken>
                <CartBanner cartTitle='PIZZA' cartDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></CartBanner>
                <ProductToken popular='pizza' btnName='ORDER YOUR FAVOURITE FOOD'></ProductToken>
                <CartBanner cartTitle='SALAD' cartDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></CartBanner>
                <ProductToken popular='salad' btnName='ORDER YOUR FAVOURITE FOOD'></ProductToken>
                <CartBanner cartTitle='SOUPS' cartDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></CartBanner>
                <ProductToken popular='soup' btnName='ORDER YOUR FAVOURITE FOOD'></ProductToken>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Menu;