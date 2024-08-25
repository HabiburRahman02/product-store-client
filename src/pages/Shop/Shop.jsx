import Banner from "../Shared/Banner/Banner";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import useProduct from "../../hooks/useProduct";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopTab from "./ShopTab/ShopTab";

import cameraImg from '../../assets/shop/camera.png'
import bikeImg from '../../assets/shop/bike.png'
import laptopImg from '../../assets/shop/laptop.png'
import carImg from '../../assets/shop/car.png'

const Shop = () => {
    const [products] = useProduct();
    const camera = products.filter(product => product.category === 'Camera');
    const car = products.filter(product => product.category === 'Car');
    const bike = products.filter(product => product.category === 'Bike');
    const laptop = products.filter(product => product.category === 'Laptop');
    return (
        <div>
            <Banner></Banner>
            <Tabs>
                <TabList className='flex justify-around my-6 mx-3'>
                    <Tab>
                        <img className="h-24 w-24 " src={cameraImg} alt="" />
                    </Tab>
                    <Tab>
                        <img className="h-24 w-24" src={carImg} alt="" />
                    </Tab>
                    <Tab>
                        <img className="h-24 w-24" src={bikeImg} alt="" />
                    </Tab>
                    <Tab>
                        <img className="h-24 w-24" src={laptopImg} alt="" />
                    </Tab>
                </TabList>

                <TabPanel>
                    <ShopTab item={camera}> </ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab item={car}> </ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab item={bike}> </ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab item={laptop}> </ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;


//  <Swiper
// slidesPerView={5}
// spaceBetween={30}
// pagination={{
//     clickable: true,
// }}
// modules={[Pagination]}
// className="mySwiper"
// >
// <SwiperSlide>Slide 2</SwiperSlide>
// <SwiperSlide>Slide 3</SwiperSlide>
// <SwiperSlide>Slide 4</SwiperSlide>
// <SwiperSlide>Slide 5</SwiperSlide>
// <SwiperSlide>Slide 6</SwiperSlide>
// <SwiperSlide>Slide 7</SwiperSlide>
// <SwiperSlide>Slide 8</SwiperSlide>
// <SwiperSlide>Slide 9</SwiperSlide>
// </Swiper>

