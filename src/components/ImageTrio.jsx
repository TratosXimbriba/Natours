function ImageTrio({ src1, src2, src3, alt }) {
  return (
    <div className="relative">
      <img
        src={src1}
        alt={alt}
        className="hover:img-hover absolute left-[40%] top-[-2rem] z-0 w-[65%] rounded-sm shadow outline-offset-[2rem] transition duration-[0.2s] hover:shadow-md"
      />
      <img
        src={src2}
        alt={alt}
        className="hover:img-hover absolute right-[-60%] top-0 z-0 w-[65%] rounded-sm shadow outline-offset-[2rem]  transition duration-[0.2s] hover:shadow-md"
      />
      <img
        src={src3}
        alt={alt}
        className="hover:img-hover absolute left-[70%] top-[5rem] z-0 w-[65%] rounded-sm shadow outline-offset-[2rem]  transition duration-[0.2s] hover:shadow-md"
      />
    </div>
  );
}

export default ImageTrio;
