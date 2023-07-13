const FourthExperience = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <div>
            <div className="text-right">
              <h1 className="m-2">2023-Present</h1>
              <h3 className="font-bold m-2">Junior Web Developer</h3>
              <h3 className="m-2 text-xs">NetlinkVoice</h3>
              <p className="m-2">
                Department of Social Welfare and Development is where I do my
                internship program. As an intern we create a functional system
                that helps the employee provide a fast and easy way of
                processing and monitoring of data
              </p>
            </div>
          </div>
        </div>
        <div className="justify-center text-center">
          {/* Black Circle Itself */}
          <div clclassName="border-primary last:font-semibold text-xl w-7 h-7 rounded-full inline-flex items-center justify-center select-none z-10 bg-black mt-2.5">
            {/* Dot at the middle of black circle */}
            <div clclassName="text-white text-center w-2 h-2 rounded-full bg-white"></div>
          </div>
          {/* The black line */}
          <div clclassName="items-center justify-center h-full border-2 border-solid border-black w-px z-0 mx-[49%] mr-[50%]"></div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};

export default FourthExperience;
