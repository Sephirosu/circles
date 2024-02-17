function Button({ onClick, children, className }) {
  return (
    <div>
      <button onClick={onClick} className={`flex p-5 rounded-lg ${className}`}>
        {children}
      </button>
    </div>
  );
}

export default Button;
