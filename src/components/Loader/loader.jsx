import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      color="#194D33"
      borderColor="#101010"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
