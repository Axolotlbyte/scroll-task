"use client";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import SlideLayout from "./SildeLayout";

const sildes = [
  {
    title: "ABC 123",
    text: "This is sample text for ABC 123. This is sample text for ABC 123.",
    bgColor: "",
    borderColor: "",
    img: "",
    caseStudy: true,
  },
];

export default function Carousel({ slides }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide className="w-full h-full flex items-center justify-center">
            <SlideLayout
              key={slide.id}
              title={slide.name}
              text={slide.text}
              bgColor={slide.bgColor}
              borderColor={"border-purple-700"}
              img={slide.img}
              caseStudy={slide.caseStudy}
              imgComponent={slide.imgComponent}
            />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide className="w-full h-full flex items-center justify-center">
          <SlideLayout
            title={"ABC 123"}
            text={
              "This is sample text for ABC 123. This is sample text for ABC 123."
            }
            bgColor={"bg-purple-700"}
            borderColor={"border-purple-700"}
            img={
              "/assets/world-communication-awards-for-best-digital-experience.png"
            }
            caseStudy={true}
          />
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <SlideLayout
            title={"ABC 1"}
            text={"This is sample text for ABC 1."}
            bgColor={
              "bg-gradient-to-br from-pink-500 via-purple-700 to-purple-700"
            }
            caseStudy={false}
            buttonColor={"bg-pink-500"}
          />
        </SwiperSlide> */}

        {/* <SwiperSlide className="w-full h-full flex items-center justify-center">
          <div className="w-full h-3/5 bg-white"></div>
          <div className="relative flex flex-col justify-start gap-5 items-start p-5 w-full h-2/5">
            <h1 className="text-4xl font-semibold pt-12">ABC 1</h1>
            <p className="">This is sample text for ABC 1.</p>
            <div className="flex font-medium items-center py-5 justify-center gap-3">
              CASE STUDY -
              <button className="p-3 px-5  rounded-l-full rounded-r-full">
                Coming Soon
              </button>
            </div>
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide className="w-full h-full flex items-center justify-center">
          <div className="w-full h-3/5 bg-white"></div>
          <div className="relative flex flex-col justify-start gap-5 items-start p-5 w-full h-2/5 bg-slate-900">
            <h1 className="text-4xl font-semibold pt-12">ABC 2</h1>
            <p className="">This is sample text for ABC 2.</p>
            <div className="flex font-medium items-center py-5 justify-center gap-3">
              CASE STUDY -
              <button className="p-3 px-5 bg-white text-black rounded-l-full rounded-r-full">
                Coming Soon
              </button>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <style jsx>{`
        .swiper {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
