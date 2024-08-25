import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ReactStars from "react-stars";


const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                navigation={false}
                pagination={true}
                modules={[Pagination]}
                className="mySwiper my-6"
            >
                <div>
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div >
                                <img className="h-16 w-16 rounded-full" src={review.image} alt="" />
                                <h3 className="text-xl font-semibold">{review.name}</h3>
                                <div>
                                    <ReactStars
                                        count={review.rating}
                                        size={24}
                                        color2={'#ffd700'} />
                                </div>
                                <p className="text-justify my-4">{review.details}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Review;