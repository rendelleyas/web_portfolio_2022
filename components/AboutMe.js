import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="flex mb-10" id="rjse-about-me">
        <div className="grid grid-cols-2 grid-flow-col gap-2 overflow-hidden">
          <div>
            <div className="p-16">
              <div className="font-bold mb-5">
                I&apos;m the kind of person who isn&apos;t afraid of challenges.
              </div>

              <h1 className="font-bold mb-5 text-lg">ABOUT ME</h1>

              <div className="justify-center">
                Has more than two years of experience in the IT industry and is
                eager to learn more and explore new things that will help me
                improve my abilities and mindset as a professional. With this, I
                would gladly extend my efforts in order to contribute to the
                company&apos;s success.
              </div>
            </div>
          </div>
          <div>
            <div className="m-2.5 relative flex">
              <div className="absolute">
                <Image
                  fill={true}
                  src="/images/barong.jpg"
                  className="h-96 ml-14 rounded-md block grayscale hover:grayscale-0 duration-300"
                  alt="Picture of the author"
                />
              </div>
              <Image
                fill={true}
                src="/images/toga.jpg"
                className="h-36 rounded-md relative top-28"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default AboutMe;
