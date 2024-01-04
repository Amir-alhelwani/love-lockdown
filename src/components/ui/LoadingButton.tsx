import Loading from "./Loading";

const LoadingButton = () => {
  return (
    <span className="flex justify-center items-center gap-2">
      <span>please wait..</span>
      <Loading />
    </span>
  );
};

export default LoadingButton;
