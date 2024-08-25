import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;