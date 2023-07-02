import React from "react";
import { Tabs, Tab } from "./Tabs";
import Project from "./Project/ProjectTemplate";

const Projects = () => {
  return (
    <div id="rjse-projects">
      <div className="justify-center text-center my-5">
        <h1 className="font-bold text-4xl">Projects</h1>
      </div>
      <Tabs>
        <Tab label="NetlinkVoice">
          <div className="py-4">
            <div className="grid grid-cols-2 mb-8">
              <Project>
                <img className="w-[750px]" src="/images/conx.jpg" alt="" />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  PRTC - SMAH
                </div>
              </Project>
              <Project>
                <img className="w-[750px]" src="/images/conx.jpg" alt="" />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  PRTC - SMAH
                </div>
              </Project>
            </div>
          </div>
        </Tab>
        <Tab label="Eversun">
          <div className="py-4">
            <div className="grid grid-cols-2 mb-8">
              <Project>
                <img
                  className="w-[750px]"
                  src="/images/strangedomain.jpg"
                  alt=""
                />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  StrangeDomains
                </div>
              </Project>
              <Project>
                <img className="w-[750px]" src="/images/conx.jpg" alt="" />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  ConX
                </div>
              </Project>
            </div>
            <div className="grid grid-cols-2 mb-8">
              <Project>
                <img className="w-[750px]" src="/images/certovax.jpg" alt="" />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  CertoVax
                </div>
              </Project>
              <Project>
                <img className="w-[750px]" src="/images/smah-prtc.jpg" alt="" />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  PRTC-SMAH
                </div>
              </Project>
            </div>
          </div>
        </Tab>
        <Tab label="DSWD">
          <div className="py-4">
            <Project>
              <img className="w-[750px]" src="/images/cpms.jpg" alt="" />
              <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                DSWD-CPMS
              </div>
            </Project>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
