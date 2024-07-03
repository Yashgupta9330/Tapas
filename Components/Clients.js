import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
SwiperCore.use([Autoplay, Pagination]);


export default function Client() {

    
    return (
   <section id="clients" className="clients">
      <div className="container" data-aos="zoom-out">
              <Swiper
                     spaceBetween={120}
                     slidesPerView={6}
                     loop={true}
                     autoplay={{ delay: 5000 }}
                     className="mySwiper align-items-center"
                     > 
                  <SwiperSlide className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></SwiperSlide>
                  <SwiperSlide className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></SwiperSlide>
                  <SwiperSlide className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></SwiperSlide>
                  <SwiperSlide className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></SwiperSlide>
                  <SwiperSlide className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></SwiperSlide>
                  <SwiperSlide className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></SwiperSlide>
                  <SwiperSlide className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></SwiperSlide>
                  <SwiperSlide className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></SwiperSlide>
             </Swiper>
              </div>
       </section>
    );
}
