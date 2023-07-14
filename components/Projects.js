import React from "react";
import { Tabs, Tab } from "./Tabs";
import Project from "./Project/ProjectTemplate";
import Image from "next/image";
import conx from "../public/images/conx.jpg";
import strangedomain from "../public/images/strangedomain.jpg";
import certovax from "../public/images/certovax.jpg";
import cpms from "../public/images/cpms.jpg";

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
                <Image
                  fill={true}
                  className="w-[750px]"
                  src="/images/conx.jpg"
                  alt=""
                />

                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  PRTC - SMAH
                </div>
              </Project>
              <Project>
                <Image fill={true} className="w-[750px]" src={conx} alt="" />
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
                <Image
                  width={"300"}
                  className="w-[750px]"
                  src={strangedomain}
                  alt=""
                />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  StrangeDomains
                </div>
              </Project>
              <Project>
                <Image
                  width={"300"}
                  className="w-[750px]"
                  src={strangedomain}
                  alt=""
                />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  StrangeDomains
                </div>
              </Project>
            </div>
            <div className="grid grid-cols-2 mb-8">
              <Project>
                <Image
                  width={"300"}
                  className="w-[750px]"
                  src={certovax}
                  alt=""
                />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">
                  CertoVax
                </div>
              </Project>
              <Project>
                <Image
                  fill={true}
                  className="w-[750px]"
                  src="/images/smah-prtc.jpg"
                  alt=""
                />
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
              <Image width={"300"} className="w-[750px]" src={cpms} alt="" />
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
