import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  "/images/slide1.JPG",
  "/images/slide2.JPG",
  "/images/slide3.JPG",
];

export default function SwiperSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      loop={true}
      slidesPerView={1}
      speed={3000} // スライドが切り替わるアニメーション速度（ms）
      effect="fade" // フェード効果を使う（自然な切り替え）
      fadeEffect={{ crossFade: true }} // 前後の画像が少し重なってフェード
      autoplay={{
        delay: 3000, // スライド切り替え間隔（ms）
        disableOnInteraction: false,
      }}
      className="rounded-lg overflow-hidden"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`slide ${index + 1}`}
            className="w-full h-64 md:h-96 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
