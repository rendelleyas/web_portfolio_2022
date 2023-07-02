
const AboutMe = () => {
    return (
        <>
        <div className="flex mb-10" id="rjse-about-me">
            <div className="grid grid-cols-2 grid-flow-col gap-2 overflow-hidden">
                <div>
                    <div className="p-16">
                        <div className="font-bold mb-5">
                            I'm the kind of person who isn't afraid of challenges.
                        </div>

                        <h1 className="font-bold mb-5 text-lg">
                            ABOUT ME
                        </h1>

                        <div className="justify-center">
                            Has more than two years of experience in the IT industry and is eager to learn more and explore new things that will help me improve my abilities and mindset as a professional. 
                            With this, I would gladly extend my efforts in order to contribute to the company's success.
                        </div>
                    </div>
                </div>
                <div>
                    <div class="m-2.5 relative flex">
                        <div className="absolute">
                            <img src="/images/barong.jpg" class="h-96 ml-14 rounded-md block grayscale hover:grayscale-0 duration-300" alt="" />
                        </div>
                        <img src="/images/toga.jpg" class="h-36 rounded-md relative top-28" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
        <br />
        </>
    )
}

export default AboutMe;