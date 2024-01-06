import React from "react";
import { Tabs, Tab } from "./Tabs";
import Project from "./Project/ProjectTemplate";
import Image from "next/image";
import { cpms, certovax, prtc, strangedomain, conx } from "../public/images/";

import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  return (
    <div id="rjse-projects">
      <div className="justify-center text-center my-5">
        <h1 className="font-bold text-4xl">Projects</h1>
      </div>
      <Tabs>
        <Tab label="NetlinkVoice">
          <Animation>
            <div className="py-4">
              <div className="grid grid-cols-2 mb-8">
                <ProjectComponent
                  img={strangedomain}
                  description={"Strange Domains"}
                />

                <ProjectComponent img={conx} description={"PRTC - SMAH"} />
              </div>
            </div>
          </Animation>
        </Tab>
        <Tab label="Eversun">
          <Animation>
            <div className="py-4">
              <div className="grid grid-cols-2 mb-8">
                <ProjectComponent
                  img={strangedomain}
                  description={"StrangeDomains"}
                />
                <ProjectComponent img={conx} description={"PRTC - SMAH"} />
              </div>
              <div className="grid grid-cols-2 mb-8">
                <ProjectComponent img={certovax} description={"CertoVax"} />
                <ProjectComponent img={prtc} description={"PRTC-SMAH"} />
              </div>
            </div>
          </Animation>
        </Tab>
        <Tab label="DSWD">
          <Animation>
            <div className="py-4">
              <ProjectComponent img={cpms} description={"DSWD-CPMS"} />
            </div>
          </Animation>
        </Tab>
      </Tabs>
    </div>
  );
};

const ProjectComponent = ({ img, description }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Project onClick={() => setShowModal(true)}>
      <Image
        width={"300"}
        className="w-[750px] rounded-md"
        src={img}
        alt=""
        unoptimized
      />
      <div className="absolute flex opacity-0 group-hover:opacity-100 m-auto content-center justify-center font-bold items-center  bottom-4">
        {description}
      </div>

      <Modal />
    </Project>
  );
};

const Animation = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, duration: 5 }}
      transition={{
        ease: "linear",
        duration: 2,
      }}
    >
      {props.children}
    </motion.div>
  );
};

const Modal = ({ showModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Projects;
