"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function RFEPhoneCarousel() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.2}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="w-full max-w-2xl h-[500px]"
    >
      <SwiperSlide>
        <img src="/images/phone-screen.png" alt="RFE App Screen 1" className="mx-auto rounded-2xl shadow-2xl object-cover h-[440px] w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/phone-screen2.png" alt="RFE App Screen 2" className="mx-auto rounded-2xl shadow-2xl object-cover h-[440px] w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/phone-screen3.png" alt="RFE App Screen 3" className="mx-auto rounded-2xl shadow-2xl object-cover h-[440px] w-auto" />
      </SwiperSlide>
    </Swiper>
  );
} 