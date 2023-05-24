import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/home/01.jpg'
import slider2 from '../../../assets/home/02.jpg'
import slider3 from '../../../assets/home/03.jpg'
import slider4 from '../../../assets/home/04.jpg'
import slider5 from '../../../assets/home/05.jpg'
import slider6 from '../../../assets/home/06.jpg'

const Banner = () => {
    return (
        <Carousel className="mb-20">
            <div>
                <img src={slider1}/>
            </div>
            <div>
                <img src={slider2}/>
            </div>
            <div>
                <img src={slider3}/>
            </div>
            <div>
                <img src={slider4}/>
            </div>
            <div>
                <img src={slider5}/>
            </div>
            <div>
                <img src={slider6}/>
            </div>
        </Carousel>
    );
};

export default Banner;