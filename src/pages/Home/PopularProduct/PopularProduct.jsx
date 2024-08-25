import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import popular1 from '../../../assets/home/popular1.jpg'
import popular2 from '../../../assets/home/popular2.jpg'
import popular3 from '../../../assets/home/popular3.jpg'
import popular4 from '../../../assets/home/popular4.jpg'
import popular5 from '../../../assets/home/popular5.jpg'
import popular6 from '../../../assets/home/popular6.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const PopularProduct = () => {
    return (
        <div>
            <SectionTitle heading='Our popular products'></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img src={popular1} alt="" />
                    <h3 className='text-3xl -mt-12 text-white text-center'>Camera</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={popular2} alt="" />
                    <h3 className='text-3xl -mt-12 text-white text-center'>Laptop</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={popular5} alt="" />
                    <h3 className='text-3xl -mt-12 text-white text-center'>Bike</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={popular4} alt="" />
                    <h3 className='text-3xl -mt-12 text-white text-center'>Headphone</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={popular3} alt="" />
                    <h3 className='text-3xl -mt-12 text-white text-center'>Car</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={popular6} alt="" />
                    <h3 className='text-3xl -mt-12 text-white text-center'>Apple</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PopularProduct;