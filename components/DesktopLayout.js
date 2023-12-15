import Image from "next/image";

const slides = [
  {
    id: 1,
    name: "ABC 123",
    text: "We are the best web development company in the world",
    caseStudy: true,
    img: "/assets/world-communication-awards-for-best-digital-experience.png",
    heading: "25M+ Downloads",
    subheading: "on appstore & google playstore",
    bgColor: "bg-purple-500",
    imgComponent: (
      <div className="w-4/5 mx-auto flex">
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
    subheading: "on appstore & google playstore",
    bgColor: "bg-red-500",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-blue-950 ">
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
    name: "Nasa",
    text: "We are the best web development company in the world",
    caseStudy: false,
    // img: '/assets/world-communication-awards-for-best-digital-experience.png',
    heading: "Nasa",
    subheading: "on appstore & google playstore",
    bgColor: "bg-blue-600",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-blue-950 ">
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
    heading: "Dominos",
    subheading: "on appstore & google playstore",
    bgColor: "bg-blue-600",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-gray-800 ">
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
    name: "ABC 456",
    text: "We are the best web development company in the world",
    caseStudy: false,
    // img: '/assets/world-communication-awards-for-best-digital-experience.png',
    heading: "Dominos",
    subheading: "on appstore & google playstore",
    bgColor: "bg-blue-600",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-cyan-500 ">
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
    text: "We are the best web development company in the world",
    caseStudy: true,
    img: "/assets/world-communication-awards-for-best-digital-experience.png",
    heading: "25M+ Downloads",
    subheading: "on appstore & google playstore",
    bgColor: "bg-purple-500",
    imgComponent: (
      <div
        style={{ backgroundImage: 'url("/assets/interior.jpg")' }}
        className="w-full h-full bg-cover bg-no-repeat mx-auto flex"
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
    name: "ABC 123",
    text: "We are the best web development company in the world",
    caseStudy: true,
    img: "/assets/world-communication-awards-for-best-digital-experience.png",
    heading: "25M+ Downloads",
    subheading: "on appstore & google playstore",
    bg: "bg-purple-500",
    imgComponent: (
      <div className="relative w-full mx-auto h-full bg-green-500 ">
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

export default function DesktopLayout({ currentSlide, slide, bgColor }) {
  return (
    <div className="w-screen fixed flex">
      <div className={"relative flex h-screen items-end w-2/5 " + bgColor}>
        {/* Circle */}
        <div
          style={{ right: "-30%" }}
          className={
            "absolute z-20 w-3/4 lg:w-3/5 top-28 aspect-square rounded-full overflow-visible " +
            bgColor
          }
        >
          <div className="relative flex items-start justify-center flex-col w-full h-full">
            {/* SVG circle */}
            <Image
              src={"/assets/svg with paths.svg"}
              alt={""}
              className={
                " w-full rounded-full bg-transparent"
                // + ` ${borderColor}`
              }
              width={1200}
              height={540}
              priority
            />
            <div style={{left: ( slide.id == 1 || slide.id == 6 ? '-40%' : "")}} className="absolute flex flex-col">
              {slide.supheading ? <h3 className="text-2xl">{slide.supheading}</h3> : ""}
              <h1 className="text-6xl whitespace-nowrap font-bold animate__animated animate__slideInUp pr-5">
                {slide.heading}
              </h1>
              <h2 className="text-2xl py-2 self-end">
                {slide.subheading}
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
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative z-10 bg-gray-200 w-3/5 flex items-center justify-center">
        {/* <div className="w-4/5 mx-auto flex">
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
        </div> */}
        {/* <div className="relative w-full mx-auto h-full bg-blue-950 ">
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
        </div> */}
        {/* <div className="relative w-full mx-auto h-full bg-blue-950 ">
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
        </div> */}

        {/* <div className="relative w-full mx-auto h-full bg-gray-800 ">
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
        </div> */}

        {/* <div className="relative w-full mx-auto h-full bg-green-500 ">
          <Image
            src={"/assets/melltoo-img1.png"}
            alt={""}
            style={{ width: "36%", bottom: "-6%", right: '6.5%' }}
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
            style={{ width: "45%", bottom: "-12%", right: '30%' }}
            className={
              "absolute w-2/6 bg-transparent"
              // + ` ${borderColor}`
            }
            width={700}
            height={500}
            priority
          />
        </div> */}

        {/* <div style={{backgroundImage: 'url("/assets/interior.jpg")'}} className="w-full h-full bg-cover bg-no-repeat mx-auto flex">
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
        </div> */}

        {/* <div className="relative w-full mx-auto h-full bg-cyan-500 ">
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
            style={{ width: "28%", bottom: '-14%', left: '20%' }}
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
            style={{ width: "28%", bottom: '-28%', left: '48%' }}
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
            style={{ width: "25%", right: '1%' }}
            className={
              "absolute w-2/6 top-64 bg-transparent"
              // + ` ${borderColor}`
            }
            width={700}
            height={500}
            priority
          />
        </div> */}

        {slide.imgComponent}
      </div>
    </div>
  );
}
