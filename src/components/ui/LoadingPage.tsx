import Loading from "./Loading";

const LoadingPage = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">please wait..</h1>
      <div>
        <Loading size="xl" />
      </div>
    </div>
  );
};

export default LoadingPage;
