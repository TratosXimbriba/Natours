function Button({ children, animated, type }) {
  const buttonVariation = {
    primary: `hover:btn-hover active:btn-click inline-block rounded-full bg-white px-10 py-4 uppercase text-gray-700 hover:shadow-lg active:shadow-md ${animated}`,

    secondary: `hover:btn-hover hover:bg-[#55c57a] hover:text-white active:btn-click inline-block border-b border-solid border-[#55c57a] p-1 text-[#55c57a]`,
  };
  return (
    <a href="#" className={buttonVariation[type]}>
      {children}
    </a>
  );
}

export default Button;

Button.defaultProps = {
  animated: undefined,
  type: "primary",
};
