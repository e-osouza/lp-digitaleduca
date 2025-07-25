'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  PalestranteLocais,
  palestranteslocais,
} from '../services/palestrantesLocais';

export default function CardLocais() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="relative">
      {/* Botões customizados */}
      <div
        ref={prevRef}
        className="swiper-button-prev-custom p-3 bg-white rounded-full absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden lg:block"
      >
        <ChevronLeft />
      </div>
      <div
        ref={nextRef}
        className="swiper-button-next-custom p-3 bg-white rounded-full absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden lg:block"
      >
        <ChevronRight />
      </div>

      {isReady && (
        <Swiper
          className="!px-5 lg:!px-0"
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          loop
          autoplay={{ delay: 3500 }}
          centeredSlides={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            320: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3.2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 13,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 13,
            },
          }}
        >
          {palestranteslocais.map((palestrante: PalestranteLocais, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-lg overflow-hidden aspect-[9/10] p-4 lg:p-5 bg-[url('/bgpromo.svg'),linear-gradient(to_top,#141e30,#424A59)] bg-[length:100%_auto] bg-center bg-no-repeat">
                <div className="relative w-full h-full">
                  <Image
                    src={palestrante.foto}
                    alt={palestrante.nome}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>

                <Image
                  src="/iconcadeado.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="absolute bottom-[0] left-[-25%] lg:bottom-[-5%] lg:left-[-15%] z-10"
                  priority
                />

                <div className="p-5 absolute left-0 bottom-0 text-white">
                  <h2 className="text-xl leading-[1] font-semibold">
                    {palestrante.nome}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}