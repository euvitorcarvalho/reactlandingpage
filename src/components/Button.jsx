function Button({ bgClass, bgHoverClass, children }) {
  return (
    <button className={`text-black text-center text-lg w-44 h-12 rounded-2xl transition-all ease-in-out duration-100 ${bgClass} ${bgHoverClass}`}>
      {children}
    </button>
  );
}

export default Button;
