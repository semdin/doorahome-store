"use client";
import React from 'react';
import { Billboard as BillboardType } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';


interface CarouselProps {
    data: BillboardType[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}

        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
                    <div className="rounded-xl relative aspect-square md:aspect-[2.41/1] overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover"
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                                filter: 'blur(2px)' // Daha az bulanıklık için değeri ile oynanabilir.
                            }}
                        />
                        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 relative">
                            <div
                                className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs relative"
                                style={{ zIndex: 1, color: '#000000' }}
                            >
                                {item.label}
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
