"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import { palestrantes } from "../services/palestrantes"; // ajuste o caminho conforme sua estrutura

export default function ImageSwiper() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mx-auto my-10 rounded-xl relative">
      <div ref={prevRef} className="swiper-button-prev-custom p-3 bg-white rounded-full absolute left-[-20px] top-1/2 -translate-y-1/2 z-2 cursor-pointer">
        <ChevronLeft />
      </div>
      <div ref={nextRef} className="swiper-button-next-custom p-3 bg-white rounded-full absolute right-[-20px] top-1/2 -translate-y-1/2 z-2 cursor-pointer">
        <ChevronRight />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={2.3}
        centeredSlides
        loop
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          //@ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="rounded-xl"
        breakpoints={{
          640: {
            slidesPerView: 3.3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4.3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5.3,
            spaceBetween: 13,
          },
          1280: {
            slidesPerView: 5.3,
            spaceBetween: 13,
          },
        }}
      >
        {palestrantes.map((palestrante, index) => (
          <SwiperSlide key={index} className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="relative aspect-1/1">
              <Image
                src="/iconcadeado.svg"
                alt=""
                width={250}
                height={250}
                className="absolute bottom-[-80px] z-2"
                priority
              />
              <Image
                src={palestrante.foto}
                alt={palestrante.nome}
                fill
                className="object-cover opacity-50"
                priority={index === 0}
              />
            </div>
            <div className="p-5 bg-white/50 min-h-[150px]">
              <h3 className="font-bold text-lg leading-5 text-black mb-2">{palestrante.nome}</h3>
              <h4 className="text-black text-[14px] leading-5">{palestrante.descricao}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}