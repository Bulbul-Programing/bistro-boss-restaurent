
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import CartTitle from '../../Shared/CartTitle/CartTitle';


const Category = () => {
    return (
        <div>
            <CartTitle data={{shortTitle:'From 11:00am to 10:00pm', heading: 'ORDER ONLINE'}}></CartTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/nBKvfXq/slide1.jpg" alt="" />
                    <p className='text-2xl font-semibold -mt-12 text-white text-center uppercase'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/S3sg5Y8/slide2.jpg" alt="" />
                    <p className='text-2xl font-semibold -mt-12 text-white text-center uppercase'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Csx1fQY/slide3.jpg" alt="" />
                    <p className='text-2xl font-semibold -mt-12 text-white text-center uppercase'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/YhzPg2M/slide4.jpg" alt="" />
                    <p className='text-2xl font-semibold -mt-12 text-white text-center uppercase'>Desserts</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Category;