function Header() {
  return (
    <header className="clip-hero relative m-7 h-[95vh] bg-hero-img bg-cover bg-top">
      <div className="absolute left-10 top-10">
        <img src="./../public/img/logo-white.png" alt="Logo" className="h-9" />
      </div>

      <div className="absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%]  ">
        <h1 className="text-white uppercase">
          <span className="block animate-[move-in-left_2s_ease-out] text-6xl font-bold tracking-[35px]">
            Outdoors
          </span>
          <span className="block animate-[move-in-right_2s_ease-out] text-xl font-normal tracking-[17.4px]">
            is where life happens
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
