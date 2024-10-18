const ProgressBar = ({ step }) => {
  return (
    <div className="relative flex justify-between items-center w-full">
      {["Intro", "Contact", "Password"].map((title, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center w-full"
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 text-xl font-bold flex items-center justify-center border rounded-full z-10 ${
                index <= step
                  ? "bg-[#010409] text-gray-200"
                  : "bg-transparen text-gray-200 opacity-30"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={` text-xl font-bold ${
                index <= step ? "text-gray-200" : "text-gray-200"
              } text-xs mt-2`}
            >
              {title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProgressBar;
