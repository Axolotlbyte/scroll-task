"use client";
import Carousel from "@/components/Carousel";
import DesktopLayout from "@/components/DesktopLayout";
import Image from "next/image";
import { useState, useEffect } from "react";

// change slide based on position
// calculate number of slider through arr length
// scroll * slide < slide * vh
// slide * scroll

const slidesOne = [
  {
    id: 1,
    name: "ABC 123",
    text: "We are the best web development company in the world",
    caseStudy: true,
    img: "/assets/world-communication-awards-for-best-digital-experience.png",
    heading: "25M+ Downloads",
    subheading: "on appstore & google playstore",
    bgColor: "bg-purple-700",
  },
  {
    id: 2,
    name: "ABC 234",
    text: "We are the best web development company in the world",
    caseStudy: false,
    // img: '/assets/world-communication-awards-for-best-digital-experience.png',
    heading: "Blockchain",
    subheading: "on appstore & google playstore",
    bgColor: "bg-red-500",
  },
  {
    id: 3,
    name: "ABC 345",
    text: "We are the best web development company in the world",
    caseStudy: false,
    // img: '/assets/world-communication-awards-for-best-digital-experience.png',
    heading: "Nasa",
    subheading: "on appstore & google playstore",
    bgColor: "bg-blue-600",
  },
];

const slides = [
  {
    id: 1,
    name: "ABC 123",
    text: "We are the best web development company in the world",
    caseStudy: true,
    img: "/assets/world-communication-awards-for-best-digital-experience.png",
    heading: "25M+ Downloads",
    subheading: "on appstore & google playstore",
    bgColor: "bg-purple-700",
    imgComponent: (
      <div className="w-4/5 mx-auto flex animate__animated animate__fadeIn">
        <Image
          src={"/assets/nexgtv-entertainment-mobile-app-development.png"}
          alt={""}
          className={
            " w-2/4 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src={"/assets/nexgtv-mobile-app-ui-design.png"}
          alt={""}
          className={
            " w-2/4 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
      </div>
    ),
  },
  {
    id: 2,
    name: "ABC 234",
    text: "We are the best web development company in the world",
    caseStudy: false,
    // img: '/assets/world-communication-awards-for-best-digital-experience.png',
    heading: "Blockchain",
    subheading: "Revolution",
    supheading: "The Next Big",
    bgColor: "bg-blue-800",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-blue-950 animate__animated animate__fadeIn">
        <Image
          src={"/assets/veme-blockchain-app-developed.png"}
          alt={""}
          style={{ width: "30%" }}
          className={
            "absolute bottom-0 left-56 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/veme-app-ui-design.png"
          alt={""}
          style={{ width: "30%" }}
          className={
            "absolute w-2/6 -top-24 right-20 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
      </div>
    ),
  },
  {
    id: 3,
    name: "ABC 345",
    text: "We are the best web development company in the world",
    caseStudy: false,
    // img: '/assets/world-communication-awards-for-best-digital-experience.png',
    heading: "Nasa",
    headingImg: "/assets/nasa-mobile-app.png",
    subheading: "algorithms",
    supheading: "Powered by advance",
    bgColor: "bg-blue-950",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-blue-900 animate__animated animate__fadeIn">
        <Image
          src={"/assets/nasa-fitness-tracking-mobile-app.png"}
          alt={""}
          style={{ width: "38%" }}
          className={
            "absolute bottom-0 left-56 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/measure-total-body-weight-through-fitness-app.png"
          alt={""}
          style={{ width: "30%" }}
          className={
            "absolute w-2/6 -top-36 right-20 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
      </div>
    ),
  },
  {
    id: 4,
    name: "ABC 456",
    text: "We are the best web development company in the world",
    caseStudy: false,
    // img: '/assets/world-communication-awards-for-best-digital-experience.png',
    heading: "UX Strategy",
    subheading: "and UI design",
    supheading: "Redifining",
    bgColor: "bg-blue-950",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-gray-800 animate__animated animate__fadeIn">
        <Image
          src={"/assets/pizza_box.png"}
          alt={""}
          style={{ width: "50%" }}
          className={
            "absolute -top-28 left-0 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/domi-img1.png"
          alt={""}
          style={{ width: "30%" }}
          className={
            "absolute w-2/6 bottom-0 left-36 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/ux-strategy-for-mobile-app-devlopment.png"
          alt={""}
          style={{ width: "28%" }}
          className={
            "absolute w-2/6 top-36 right-44 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/dominos-bread.png"
          alt={""}
          style={{ width: "20%" }}
          className={
            "absolute w-2/6 -top-48 right-20 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/dominos-bread1.png"
          alt={""}
          style={{ width: "42%" }}
          className={
            "absolute w-2/6 -bottom-20 -right-20 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
      </div>
    ),
  },
  {
    id: 5,
    name: "ABC 567",
    text: "We are the best AR Development company in the world",
    caseStudy: false,
    // img: '/assets/world-communication-awards-for-best-digital-experience.png',
    heading: "Dominos",
    subheading: "Footer headline",
    supheading: "Text Headline",
    bgColor: "bg-blue-600",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-cyan-500 animate__animated animate__fadeIn">
        <Image
          src={"/assets/karavan-social-networking-app-screen.png"}
          alt={""}
          style={{ width: "25%", top: "-13%", left: "20%" }}
          className={
            "absolute -top-28 left-0 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/karavan_2.png"
          alt={""}
          style={{ width: "28%", bottom: "-14%", left: "20%" }}
          className={
            "absolute w-2/6 bottom-0 left-36 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/social-networking-app-case-study.png"
          alt={""}
          style={{ width: "25%", top: "-2%", left: "48%" }}
          className={
            "absolute w-2/6 top-36 right-44 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/karavan-social-networking-app-screen-2.png"
          alt={""}
          style={{ width: "28%", bottom: "-28%", left: "48%" }}
          className={
            "absolute w-2/6  bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/developers-for-social-media-app.png"
          alt={""}
          style={{ width: "25%", right: "1%" }}
          className={
            "absolute w-2/6 top-64 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
      </div>
    ),
  },
  {
    id: 6,
    name: "ABC 678",
    text: "Best Since 2017. We offer a wide range of web development and app development",
    caseStudy: true,
    img: "/assets/world-communication-awards-for-best-digital-experience.png",
    heading: "Text Headline",
    subheading: "in furniture industry",
    supheading: "Developing Erp Solution for",
    bgColor: "bg-blue-800",
    imgComponent: (
      <div
        style={{ backgroundImage: 'url("/assets/interior.jpg")' }}
        className="w-full h-full bg-cover bg-no-repeat mx-auto flex animate__animated animate__fadeIn"
      >
        <Image
          src={"/assets/erp-app-development-service.png"}
          alt={""}
          className={
            " w-full bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={600}
          priority
        />
      </div>
    ),
  },
  {
    id: 7,
    name: "ABC 23478",
    text: "We are the best web development company in the world",
    caseStudy: false,
    img: "/assets/mobile-app-of-the-year-by-entrepreneur.png",
    heading: "East Asia",
    subheading: "Countries",
    supheading: "Biggest Classified",
    bgColor: "bg-green-800",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-green-500 animate__animated animate__fadeIn">
        <Image
          src={"/assets/melltoo-img1.png"}
          alt={""}
          style={{ width: "36%", bottom: "-6%", right: "6.5%" }}
          className={
            "absolute bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
        <Image
          src="/assets/melltoo-img2.png"
          alt={""}
          style={{ width: "45%", bottom: "-12%", right: "30%" }}
          className={
            "absolute w-2/6 bg-transparent"
            // + ` ${borderColor}`
          }
          width={700}
          height={500}
          priority
        />
      </div>
    ),
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const [scrollPosition, setScrollPosition] = useState({
    position: 0,
    height: window.innerHeight,
  });

  const handleScroll = () => {
    const position = window.scrollY;
    return setScrollPosition({ ...scrollPosition, position });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // console.log(scrollPosition);
    // console.log(currentSlide);
    // if(scrollPosition)
    slidesFunction();
  }, [scrollPosition]);

  const slidesFunction = () => {
    if (scrollPosition.height > scrollPosition.position) {
      return setCurrentSlide(1);
    } else if (scrollPosition.height * 2 > scrollPosition.position) {
      return setCurrentSlide(2);
    } else if (scrollPosition.height * 3 > scrollPosition.position) {
      return setCurrentSlide(3);
    } else if (scrollPosition.height * 4 > scrollPosition.position) {
      return setCurrentSlide(4);
    } else if (scrollPosition.height * 5 > scrollPosition.position) {
      return setCurrentSlide(5);
    } else if (scrollPosition.height * 6 > scrollPosition.position) {
      return setCurrentSlide(6);
    } else {
      return setCurrentSlide(7);
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-between">
      {/* Mobile */}
      <div className="lg:hidden h-screen w-full">
        <Carousel />
      </div>

      {/* Desktop */}
      <div
        style={{ height: "700vh" }}
        className="w-full hidden lg:flex bg-white"
      >
        {/* <div className="relative flex items-end w-2/5 bg-blue-600">
          
          <div
            style={{ right: "-30%" }}
            className="absolute w-3/5 top-28 aspect-square bg-pink-500 rounded-full overflow-visible "
          >
            <div className="relative flex items-start justify-center flex-col w-full h-full">
              <Image
                src={
                  "/assets/svg with paths.svg"
                }
                alt={""}
                className={
                  " w-full rounded-full bg-transparent"
                  // + ` ${borderColor}`
                }
                width={1200}
                height={24}
                priority
              />
              <div className="absolute -left-1/2 flex flex-col">
                <h1 className="text-6xl font-bold  ">25M+ Downloads</h1>
                <h2 className="text-2xl justify-self-end">
                  on appstore & playstore
                </h2>
              </div>
            </div>
          </div>

          <div className=" p-10 px-16 flex flex-col gap-8 justify-start ">
            <Image
              src={
                "/assets/world-communication-awards-for-best-digital-experience.png"
              }
              alt={""}
              className={
                "bg-white w-3/4 rounded-lg border-2 bg-opacity-50"
                // + ` ${borderColor}`
              }
              width={1200}
              height={24}
              priority
            />
            <h1 className="text-6xl font-bold">ABC 123</h1>
            <p className="w-3/4 text-lg">
              We are the best web development company in the world.
            </p>
            <button className="flex text-xl font-medium items-center justify-start pt-10 gap-3">
              View Case Study
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-right h-7 w-7"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </div> */}

        {slides
          .filter((slide) => slide.id == currentSlide)
          .map((slide) => (
            <DesktopLayout
              key={slide.id}
              slide={slide}
              bgColor={slide.bgColor}
              currentSlide={currentSlide}
            />
          ))}
        {/* <DesktopLayout currentSlide={currentSlide} /> */}
      </div>

      {/* floating button */}
      <button className="fixed right-8 bottom-8 flex items-center justify-center bg-blue-400 p-5 rounded-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-chat-left-fill w-10 h-10 "
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
        </svg>
      </button>
    </main>
  );
}
