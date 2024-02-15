function Circles({ circle, index }) {
  return (
    <div
      className="absolute w-12 h-12 bg-blue-500 rounded-full"
      style={{
        left: `${circle.x - 25}px`,
        top: `${circle.y - 25}px`,
      }}
      key={index}
    ></div>
  );
}

export default Circles;
