import Button from "./Button";

function Card({ col, gradientImg, gradientTitle, tour }) {
  console.log(tour);
  return (
    <div
      className={`hover:card-flip relative col-start-${col} h-full w-[110%]  overflow-hidden rounded  shadow-sm transition-all duration-[800ms] ease-out`}
    >
      <div
        className={`card-flip card-back  h-full w-full  ${gradientImg} hover:z-10 `}
      >
        <div className="flex h-full flex-col content-center items-center justify-center text-white">
          <span className="mb-2 uppercase">Only</span>
          <span className="pb-12 text-8xl font-thin">${tour.price}</span>
          <Button textColor={"text-black"} bgColor={"bg-white"}>
            Book now!
          </Button>
        </div>
      </div>
      <div className="hover:card-flip backface-hidden card-front h-full w-full bg-white transition-all duration-[900ms] ease-out hover:invisible">
        <div
          className={`h-[50%] ${gradientImg} clip-card bg-cover bg-blend-screen`}
        >
          &nbsp;
        </div>
        <span
          className={` absolute left-[0%] top-[5%] w-[65%] text-right uppercase text-white `}
        >
          <span
            className={`${gradientTitle} font-smibold box-decoration-clone p-1 text-4xl  `}
          >
            {tour.title}
          </span>
        </span>
        <div>
          <ul className="text-1xl m-[0_auto] w-[80%] list-none ">
            <li className="border-b-[1px] border-solid border-gray-300 p-3 ">
              {tour.daysNum} days tours
            </li>
            <li className="border-b-[1px] border-solid border-gray-300 p-3 ">
              Up to {tour.peopleMax} people
            </li>
            <li className="border-b-[1px] border-solid border-gray-300 p-3  ">
              {tour.guidesNum} tour guides
            </li>
            <li className="border-b-[1px] border-solid border-gray-300 p-3  ">
              Sleep in {tour.sleep}
            </li>
            <li className="p-3 font-semibold">Difficulty: {tour.difficulty}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;

//bg-[linear-gradient(to_right_bottom,${gradientTitle})]
