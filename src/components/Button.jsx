function Button({ children, animated, type, textColor, bgColor, borderColor }) {
  const buttonVariation = {
    primary: `hover:btn-hover active:btn-click inline-block rounded-full px-10 py-4 uppercase ${textColor} hover:shadow-lg active:shadow-md ${animated} ${bgColor}`,

    secondary: `hover:btn-hover hover:bg-defaultGreen hover:text-white active:btn-click inline-block border-b border-solid ${borderColor} p-1 ${textColor}`,
  };
  return (
    <a href="#" className={buttonVariation[type]}>
      {children}
    </a>
  );
}

export default Button;

Button.defaultProps = {
  textColor: "text-white",
  bgColor: "bg-black",
  borderColor: "border-defaultGreen",
  animated: undefined,
  type: "primary",
};
