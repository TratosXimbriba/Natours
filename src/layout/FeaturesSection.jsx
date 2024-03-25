import { IoGlobeOutline } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

const divStyles =
  "hover:features-hover transition-all h-[23rem] flex flex-col items-center rounded bg-[rgba(255,255,255,0.8)] p-8 text-center text-2xl shadow-sm";
const iconStyles = "inline-block  text-[6rem] text-[#55c57a] ";

function FeaturesSection() {
  return (
    <section className="grid grid-cols-6 gap-[3.5rem] self-center bg-[linear-gradient(to_right_bottom,rgba(126,213,111,0.8),rgba(40,180,131,0.8)),url('../../public/img/nat-4.jpg')] bg-cover py-[20rem]">
      <div className={`${divStyles} col-start-2 `}>
        <IoGlobeOutline className={iconStyles} />
        <h3 className="mb-2 pb-3 pt-7 font-bold">Explore the world</h3>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore
          impedit ipsam corrupti et adipisci at quaerat optio!
        </p>
      </div>
      <div className={`${divStyles} col-start-3 `}>
        <IoCompassOutline className={iconStyles} />
        <h3 className="mb-2 pb-3 pt-7 font-bold">Meet nature</h3>
        <p className="text-xl">
          Doloribus harum adipisci vero molestiae laborum perspiciatis accusamus
          blanditiis praesentium nam eum provident quod!
        </p>
      </div>
      <div className={`${divStyles} col-start-4 `}>
        <IoMapOutline className={iconStyles} />
        <h3 className="mb-2 pb-3 pt-7 font-bold">Find your way</h3>
        <p className="text-xl">
          Nihil quas placeat, modi nam in aut voluptates delectus sed eos
          perspiciatis incidunt laudantium!
        </p>
      </div>
      <div className={`${divStyles} col-start-5 `}>
        <IoHeartOutline className={iconStyles} />
        <h3 className="mb-2 pb-3 pt-7 font-bold">Live a healthier life</h3>
        <p className="text-xl">
          veniam minima voluptates, dolorum architecto, laudantium commodi
          officiis modi nam in aut voluptates omnis error!
        </p>
      </div>
    </section>
  );
}

export default FeaturesSection;

{
  /* <Features
  icon={
    <IoGlobeOutline className="inline-block  text-[6rem] text-[#55c57a] " />
  }
  headText={"Explore the world"}
  paragraphText={
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore impedit ipsam corrupti et adipisci at quaerat optio!"
  }
/> */
}
