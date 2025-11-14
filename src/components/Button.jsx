function Button({ bgClass, children }) {
  return (
    <button className={`text-center text-lg w-44 h-12 rounded-2xl ${bgClass}`}>
      {children}
    </button>
  );
}

export default Button;
