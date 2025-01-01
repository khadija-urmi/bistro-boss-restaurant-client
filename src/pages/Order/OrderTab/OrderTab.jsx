import FoodCard from "../../../components/FoodCard/FoodCard";
// pagination
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './OrderTab.css';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`; // Display page numbers only
        },
    };

    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={3} // Adjust slides per view as per your requirement
            breakpoints={{
                640: { slidesPerView: 1 },  // On small screens show 1 slide
                768: { slidesPerView: 2 },  // On medium screens show 2 slides
                1024: { slidesPerView: 3 }, // On large screens show 3 slides
            }}
        >
            {items.map((item) => (
                <SwiperSlide key={item._id}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
                        <FoodCard item={item} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OrderTab;
