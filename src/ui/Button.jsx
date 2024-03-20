function Button({ children, animated }) {
  return (
    <a
      href="#"
      className={`hover:btn-hover active:btn-click inline-block rounded-full bg-white px-10 py-4 uppercase text-gray-700 hover:shadow-lg active:shadow-md ${animated}`}
    >
      {children}
    </a>
  );
}

export default Button;
