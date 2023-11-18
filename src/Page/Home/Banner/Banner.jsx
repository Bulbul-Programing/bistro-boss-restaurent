
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} hight='300px' className="text-center">
            <div>
                <img className="w-[200px]" src="https://i.ibb.co/m8S0VjT/01.jpg" />
            </div>
            <div>
                <img className="w-[200px]" src="https://i.ibb.co/0X4GQWQ/02.jpg" />
            </div>
            <div>
                <img className="w-[200px]" src="https://i.ibb.co/JR8xT3c/03.png" />
            </div>
            <div>
                <img className="w-[200px]" src="https://i.ibb.co/PrBt1c6/04.jpg" />
            </div>
            <div>
                <img className="w-[200px]" src="https://i.ibb.co/nR9d8Vq/05.png" />
            </div>
            <div>
                <img className="w-[200px] text-center" src="https://i.ibb.co/f2Tgp5J/06.png" />
            </div>
        </Carousel>
    );
};
export default Banner;