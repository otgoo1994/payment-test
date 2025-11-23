import { useState } from "react";
import bg_poster from "@/assets/images/bg_poster.png";
import basketball_team from "@/assets/images/basketball_team.jpg";
import female_football from "@/assets/images/female_football.jpg";
import volleyball_female from "@/assets/images/volleyball_female.jpg";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  IconPlus,
  IconChevronLeft,
  IconChevronRight,
  IconBrandAppleFilled,
  IconBrandGooglePlay,
} from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Home = () => {
  const [trainingSwiper, setTrainingSwiper] = useState(null);

  const handleTrainingSwiper = (direction) => {
    if (!trainingSwiper) return;
    if (direction === "next") {
      trainingSwiper.slideNext();
      return;
    }

    trainingSwiper.slidePrev();
  };
  return (
    <section className="home" id="chances">
      <div className="container">
        <div>
          <p className="title">БОЛОМЖУУД</p>
        </div>
        <div className="chances">
          <div className={`card`}>
            <div className="icon-shadow">
              <div className="icon-container">
                <IconPlus className="icon" />
              </div>
            </div>
            <p className="card-title">УЯН ХАТАН ЦАГИЙН СОНГОЛТ</p>
            <span>
              Өөрийн болон хүүхдийн өдөр тутмын <br />
              хуваарьт тохирсон хичээлийг
              <br />
              амархан олно.
            </span>
          </div>
          <div className={`card`}>
            <div className="icon-shadow">
              <div className="icon-container">
                <IconPlus className="icon" />
              </div>
            </div>
            <p className="card-title">ШАЛГАРСАН СУРГАЛТЫН ТӨРЛҮҮД</p>
            <span>
              Туршлагатай багш, найдвартай <br />
              байгууллагуудыг бид нягталж,
              <br />
              баталгаажуулсан болно.
            </span>
          </div>
          <div className={`card`}>
            <div className="icon-shadow">
              <div className="icon-container">
                <IconPlus className="icon" />
              </div>
            </div>
            <p className="card-title">ТӨЛБӨРИЙН ОНЛАЙН ШИЙДЭЛ</p>
            <span>
              Өөрийн болон хүүхдийн өдөр тутмын <br />
              хуваарьт тохирсон хичээлийг
              <br />
              амархан олно.
            </span>
          </div>
        </div>
        <div className="training">
          <div>
            <p className="title">СУРГАЛТУУД</p>
          </div>
          <div className="training-body">
            <Swiper
              spaceBetween={30}
              breakpoints={{
                980: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: "auto",
                },
              }}
              loop={true}
              onSwiper={(swiper) => setTrainingSwiper(swiper)}
            >
              <SwiperSlide>
                <div className="box">
                  <div className="img-container">
                    <img src={basketball_team} alt="" />
                  </div>
                  <p className="box-title">Сагсан бөмбөгийн сургалт</p>
                  <p className="box-description">
                    Өсвөр насныханд зориулсан сагсан бөмбөгийн сургалт
                  </p>
                  <div className="buttons">
                    <Link className="more">Дэлгэрэнгүй</Link>
                    <Link className="order">Захиалах</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="img-container">
                    <img src={volleyball_female} alt="" />
                  </div>
                  <p className="box-title">Гар бөмбөгийн сургалт</p>
                  <p className="box-description">
                    Өсвөр насныханд зориулсан гар бөмбөгийн сургалт
                  </p>
                  <div className="buttons">
                    <Link className="more">Дэлгэрэнгүй</Link>
                    <Link className="order">Захиалах</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="img-container">
                    <img src={female_football} alt="" />
                  </div>
                  <p className="box-title">Хөл бөмбөгийн сургалт</p>
                  <p className="box-description">
                    Өсвөр насныханд зориулсан хөл бөмбөгийн сургалт
                  </p>
                  <div className="buttons">
                    <Link className="more">Дэлгэрэнгүй</Link>
                    <Link className="order">Захиалах</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="img-container">
                    <img src={basketball_team} alt="" />
                  </div>
                  <p className="box-title">Сагсан бөмбөгийн сургалт</p>
                  <p className="box-description">
                    Өсвөр насныханд зориулсан сагсан бөмбөгийн сургалт
                  </p>
                  <div className="buttons">
                    <Link className="more">Дэлгэрэнгүй</Link>
                    <Link className="order">Захиалах</Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="navigator">
              <button
                className="prev-button"
                onClick={() => handleTrainingSwiper("prev")}
              >
                <IconChevronLeft className="icon" />
              </button>
              <button
                className="next-button"
                onClick={() => handleTrainingSwiper("next")}
              >
                <IconChevronRight className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={bg_poster} alt="banner" className="banner" />
        <div className="content">
          <p className="content-title">
            Суралцахуйн аз жаргал
            <br />
            эндээс эхэлнэ
          </p>
          <p className="content-sub-title">
            Хүүхдийг хөгжүүлэх олон талт хөтөлбөрүүдээр дүүрэн, аюулгүй
            <br />
            бөгөөд урамтай орчин, төсөөллөөс давсан сургалтын аялалыг бид
            <br />
            танд санал болгож байна.
          </p>

          <div className="store-container">
            <div className="logo">
              <p className="logo-title">Cluby</p>
              <div className="logo-container">
                <img src={logo} alt="logo" />
              </div>
            </div>

            <div className="logo">
              <p className="logo-title">Апп татах</p>
              <div className="app-container">
                <div className="app-link">
                  <div className="app-icon-container">
                    <IconBrandAppleFilled className="icon" />
                  </div>
                  <div className="app-text-container">
                    <p className="app-text-container-title">Download on the</p>
                    <p className="app-text-container-store">App Store</p>
                  </div>
                </div>

                <div className="app-link">
                  <div className="app-icon-container">
                    <IconBrandGooglePlay className="icon" />
                  </div>
                  <div className="app-text-container">
                    <p className="app-text-container-title">GET IT ON</p>
                    <p className="app-text-container-store">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
