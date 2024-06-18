import React from "react";
import Layout from "../shared/layout/index";
import User from "../user/index";
import Resumecard from "../resumecard/index";
import Ourskills from "../ourskills/index";
import Socialicon from "../social/index";
const Index = () => {
  const services = [
    {
      icon: "images/serviceone.png",
      title: "UI/UX Design",
    },
    {
      icon: "images/servicetwo.png",
      title: "Digital Drawing",
    },
    {
      icon: "images/servicethree.png",
      title: "Programming",
    },
    {
      icon: "images/servicefour.png",
      title: "Web Development",
    },
  ];
  const ourdetails = [
    {
      count: "2.7",
      title: "YEARS EXPERIENCE",
    },
    {
      count: "+06",
      title: "TOTAL OUR PROJECTS",
    },
    {
      count: "+100",
      title: "CLENTS WORLDWIBE",
    },
  ];
  return (
    <Layout>
      <div className="mx-4 md:mx-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:justify-between">
        <div
          className="md:mt-8 md:mb-8 xl:w-1/3"
          style={{ marginRight: "16px" }}
        >
          <User />
          <div className="h-40 md:h-auto w-full md:w-66 rounded-2xl mt-7">
            <Socialicon/>
          </div>
        </div>
        <div
          className="flex flex-col justify-between gap-4"
          style={{ marginRight: "16px" }}
        >
          <div className="flex flex-row justify-between gap-4">
            <div className="mt-8 h-56 w-full md:w-96 rounded-xl flex-row">
              <Resumecard />
            </div>
            <div
              className=" mt-8 mb-2 h-56 rounded-xl"
              style={{ width: "350px" }}
            >
              <div>
                <img src="images/dev.jpg" alt="Dev"  className="h-56 w-64 p-2"/>
              </div>
            </div>
          </div>
          <div
            className="border-2 border-inherit-400 border-solid mb-8 rounded-xl"
            style={{ width: "100%", height: "355px" }}
          >
            <h1 className="font-bold text-2xl p-4 ml-10">Services Offering</h1>
            <div className="flex flex-row">
              <ul className="flex flex-wrap">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center mb-4 mr-4 justify-between gap-12 ml-16"
                  >
                    <div className="flex items-center">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-12 h-12 mr-2"
                      />
                    </div>
                    <span className="text-lg font-medium">{service.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row ml-16 items-center mt-2 p-4">
              <h1 className="font-extrabold text-2xl">Things I'm good at</h1>
              <img src="images/goods.png" alt="goods" className="h-12 w-12" />
            </div>
            <div className="flex justify-between mx-16 ">
              <h1 className="text-lg font-medium">All Services</h1>
              <button className=" text-black font-medium text text-2xl">
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-6">
          <div
            className="border-2 border-inherit-400 border-solid rounded-xl"
            style={{ width: "250px", height: "100px" }}
          >
            <span className=" text-black font-medium text text-2xl">
              <marquee className="mt-8">LATEST WORKS AND FEATURED</marquee>
            </span>
          </div>
          <div
            className="border-2 border-inherit-400 border-solid rounded-xl"
            style={{ width: "250px", height: "450px" }}
          >
            <ul>
              {ourdetails.map((item, index) => (
                <div key={index} className="p-8">
                  <li className="ml-12 font-bold text-4xl font-serif">
                    {item.count}
                  </li>
                  <h1 className="font-medium">{item.title}</h1>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8 mx-24 flex justify-center">
        <button class="font-serif relative py-2 px-8 text-black text-3xl font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
        Technical Skills
        </button>
      </div>
      <Ourskills />
    </Layout>
  );
};

export default Index;
