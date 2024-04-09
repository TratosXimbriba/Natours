function Button({ children, animated, type, textColor, bgColor }) {
  const buttonVariation = {
    primary: `hover:btn-hover active:btn-click inline-block rounded-full bg-white px-10 py-4 uppercase text-${textColor} hover:shadow-lg active:shadow-md ${animated} bg-${bgColor}`,

    secondary: `hover:btn-hover hover:bg-${bgColor} hover:text-white active:btn-click inline-block border-b border-solid border-${bgColor} p-1 text-${textColor}`,
  };
  return (
    <a href="#" className={buttonVariation[type]}>
      {children}
    </a>
  );
}

export default Button;

Button.defaultProps = {
  textColor: "white",
  bgColor: "black",
  animated: undefined,
  type: "primary",
};
