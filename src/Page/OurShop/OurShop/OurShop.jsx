import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './OurShop.css'
import CartProduct from "../CartProduct/CartProduct";

const OurShop = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PageBanner img='https://i.ibb.co/2g4cXRc/banner2.jpg' title='OUR SHOP' description='Would you like to try a dish?'></PageBanner>
            <div className="mx-32">
                <div className="my-10">
                    <Tabs>
                        <TabList className='font-bold text-center'>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="my-10">
                                <CartProduct item='salad'></CartProduct>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="my-10">
                                <CartProduct item='pizza'></CartProduct>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="my-10">
                                <CartProduct item='soup'></CartProduct>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="my-10">
                                <CartProduct item='dessert'></CartProduct>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="my-10">
                                <CartProduct item='drinks'></CartProduct>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurShop;