import Card from "../components/Card";
import Button from "../components/Button";

const tours = {
  tourSea: {
    title: "The sea explorer",
    daysNum: "3",
    peopleMax: "30",
    guidesNum: "2",
    sleep: "cozy hotels",
    difficulty: "easy",
    price: "297",
    primaryColor: "orange",
  },
  tourFlorest: {
    title: "The forest hiker",
    daysNum: "7",
    peopleMax: "40",
    guidesNum: "6",
    sleep: "provided tents",
    difficulty: "medium",
    price: "497",
    primaryColor: "green",
  },
  tourSnow: {
    title: "The snow adventurer",
    daysNum: "5",
    peopleMax: "3",
    guidesNum: "15",
    sleep: "provided tents",
    difficulty: "hard",
    price: "897",
    primaryColor: "blue",
  },
};

const orangeImg =
  "bg-[linear-gradient(to_right_bottom,rgba(255,185,0,0.8),rgba(255,119,48,0.8)),url('../../public/img/nat-5.jpg')]";

const orangeGradient =
  "bg-[linear-gradient(to_right_bottom,rgba(255,185,0,0.8),rgba(255,119,48,0.8))]";

const greenImg = `bg-[linear-gradient(to_right_bottom,rgba(126,213,111,0.8),rgba(40,180,131,0.8)),url('../../public/img/nat-6.jpg')]`;

const greenGradient =
  "bg-[linear-gradient(to_right_bottom,rgba(126,213,111,0.8),rgba(40,180,131,0.8))]";

const blueImg = `bg-[linear-gradient(to_right_bottom,rgba(41,152,255,0.8),rgba(86,67,250,0.8)),url('../../public/img/nat-7.jpg')]`;

const blueGradient =
  "bg-[linear-gradient(to_right_bottom,rgba(41,152,255,0.8),rgba(86,67,250,0.8))]";

function ToursSection() {
  return (
    <section className=" mt-[-32vh] bg-[#f7f7f7] pb-[10rem] pt-[25rem]">
      <div className="text-center">
        <span className="inline-block bg-green-gradient bg-clip-text pb-[8rem] text-5xl font-bold uppercase text-transparent">
          Most popular tours
        </span>
      </div>

      <div className=" perspective-card grid h-[35rem]  grid-cols-5  gap-x-[5rem] rounded bg-transparent text-center">
        <Card
          col={2}
          gradientImg={orangeImg}
          gradientTitle={orangeGradient}
          tour={tours.tourSea}
        />
        <Card
          col={3}
          gradientImg={greenImg}
          gradientTitle={greenGradient}
          tour={tours.tourFlorest}
        />
        <Card
          col={4}
          gradientImg={blueImg}
          gradientTitle={blueGradient}
          tour={tours.tourSnow}
        />
      </div>
      <div className="mt-20 text-center">
        <Button
          textColor={"text-white"}
          bgColor={"bg-[#55c57a]"}
          animated={"transition-all"}
        >
          Discover our tours
        </Button>
      </div>
    </section>
  );
}

export default ToursSection;
