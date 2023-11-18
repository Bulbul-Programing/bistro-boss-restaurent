import axios from "axios";
import { useEffect, useState } from "react";
import CartTitle from "../../Shared/CartTitle/CartTitle";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';


const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/review')
            .then(res => setReview(res.data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="my-20">
            <CartTitle shortTitle=' What Our Clients Say ' heading='TESTIMONIALS'></CartTitle>
            <FaQuoteLeft className="mx-auto my-5 text-4xl"></FaQuoteLeft>
            <Swiper navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} rewind={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map(singleReview => <SwiperSlide key={singleReview._id}>
                        <div className="mx-20 flex flex-col items-center gap-y-3">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={singleReview.rating}
                                readOnly
                            />
                            <p className="w-3/4 text-center">{singleReview.details}</p>
                            <h4 className="text-xl font-bold text-yellow-500">{singleReview.name}</h4>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;