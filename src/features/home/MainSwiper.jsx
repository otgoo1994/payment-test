import { useState } from "react";
import kidspace from "/public/images/bg.png";
import basketball from "/public/images/basketball_bg.jpg";
import {
  IconPlus,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const MainSwiper = () => {
  const [swiper, setSwiper] = useState(null);

  const handleSwiperSlide = (direction) => {
    if (!swiper) return;
    if (direction === "next") {
      swiper.slideNext();
      return;
    }

    swiper.slidePrev();
  };

  return (
    <section className="container home" id="trainings">
      <div className="swiper-text">
        <p>
          Суралцахуйн аз жаргал
          <br />
          эндээс эхэлнэ
        </p>
        <p>
          Хүүхдийг хөгжүүлэх олон талт хөтөлбөрүүдээр дүүрэн, аюулгүй
          <br />
          бөгөөд урамтай орчин, төсөөллөөс давсан сургалтын аяллыг бид
          <br />
          танд санал болгож байна
        </p>
      </div>

      <div className="swiper-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <SwiperSlide>
            <div className="img-container">
              <img src={kidspace} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={basketball} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="navigator">
          <button onClick={() => handleSwiperSlide("prev")}>
            <IconChevronLeft className="icon" />
          </button>
          <button onClick={() => handleSwiperSlide("next")}>
            <IconChevronRight className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
