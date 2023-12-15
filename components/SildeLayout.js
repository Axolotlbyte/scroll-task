import Image from "next/image";

export default function SlideLayout({
  caseStudy,
  bgColor,
  img,
  borderColor,
  buttonColor,
  title,
  text,
}) {
  return (
    <>
      <div className="w-full h-3/5 bg-white"></div>
      <div
        className={
          "relative flex flex-col justify-start gap-5 items-start p-5 w-full h-2/5" +
          ` ${bgColor}`
        }
      >
        {img ? (
          <div className="w-full absolute -top-5 ">
            <Image
              src={img}
              alt={img}
              className={"bg-white w-3/5 rounded-lg border-2" + ` ${borderColor}`}
              width={100}
              height={24}
              priority
            />
          </div>
        ) : (
          ""
        )}
        <h1 className="text-4xl font-semibold pt-12">{title}</h1>
        <p className="">
          {text}
        </p>
        {caseStudy ? (
          <button className="flex font-medium items-center py-5 justify-center gap-3">
            View Case Study
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-arrow-right h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        ) : (
          <div className="flex font-medium items-center py-5 justify-center gap-3">
            CASE STUDY -
            <button className={"p-3 px-5 rounded-l-full rounded-r-full" + ` ${buttonColor}`}>
              Coming Soon
            </button>
          </div>
        )}
      </div>
    </>
  );
}
