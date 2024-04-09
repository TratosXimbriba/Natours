import Button from "../components/Button";

function Header() {
  return (
    <header className="clip-hero relative h-[95vh] bg-[linear-gradient(to_right_bottom,rgba(126,213,111,0.8),rgba(40,180,131,0.8)),url('/public/img/hero.jpg')] bg-cover bg-top">
      <div className="absolute left-10 top-10">
        <img src="./../public/img/logo-white.png" alt="Logo" className="h-11" />
      </div>

      <div className="absolute left-[50%] top-[40%] mb-10 translate-x-[-50%] translate-y-[-50%] text-center ">
        <h1 className="uppercase text-white">
          <span className="block animate-[move-in-left_2s_ease-out] text-7xl font-bold tracking-[35px]">
            Outdoors
          </span>
          <span className="mb-10 block animate-[move-in-right_2s_ease-out] text-xl font-normal tracking-[17.4px] ">
            is where life happens
          </span>
        </h1>

        <Button
          animated={
            "fill-mode-backwards animate-[move-in-bottom_0.5s_ease-out_0.75s] transition-all"
          }
          textColor={"#000"}
          bgColor={"#fff"}
        >
          Discover our tours
        </Button>
      </div>
    </header>
  );
}

export default Header;
