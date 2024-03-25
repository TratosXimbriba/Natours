function Features({ icon, headText, paragraphText }) {
  return (
    <div className=" col-start-2 flex h-[23rem] flex-col items-center rounded bg-[rgba(255,255,255,0.8)] p-8 text-center text-2xl shadow-sm ">
      {icon}
      <h3 className="mb-2 pb-3 pt-7 font-bold">{headText}</h3>
      <p className="text-xl">{paragraphText}</p>
    </div>
  );
}

export default Features;
