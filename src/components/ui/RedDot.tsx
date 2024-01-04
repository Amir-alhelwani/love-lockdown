const RedDot = () => {
  return (
    <>
      <span className="absolute top-0 z-10 w-3 h-3 bg-red-500 rounded-full -right-1 animate-ping" />
      <span className="absolute top-0 -right-1  w-2 h-2 -translate-x-[2px] translate-y-[2px] rounded-full bg-red-500 z-20" />
    </>
  );
};

export default RedDot;
