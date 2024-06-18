import React from "react";
import Layout from "../shared/layout/index";
import Myskills from "../ourskills/index";
const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col mx-24 my-6 gap-4">
        <div className="flex flex-row gap-6 justify-between">
          <div
            className="border-2 border-inherit border-solid rounded-md responsive-element"
            style={{ height: "300px", width: "900px" }}
          >
            <div className="p-4 m-4">
              <h1 className="font-extrabold text-3xl font-serif">
                Hello,
                <br />
                I’m Hansraj Yadav, Full Stack Developer
                <br />
                (Mern Technology)
              </h1>
              <p className="text-base font-serif mt-1">
                Experienced in MERN stack development, my forte lies in crafting
                robust web applications using MongoDB, Express.js, React, and
                Node.js. Proficient across front-end and back-end technologies,
                I specialize in tailoring scalable solutions to meet user
                demands. With a keen focus on optimizing performance and
                ensuring code integrity, I employ rigorous testing and
                continuous refinement methodologies to deliver reliable and
                efficient software solutions.
              </p>
            </div>
          </div>
          <div
            className="border-2 border-inherit border-solid rounded-md responsive-element"
            style={{ height: "300px", width: "400px" }}
          >
            <div>
              <img
                src="images/Hanswap.png"
                alt="profilepic"
                className="h-64 w-56 p-4 m-4 ml-16"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 justify-between">
          <div
            className="border-2 border-inherit border-solid rounded-md responsive-element"
            style={{ height: "250px", width: "450px" }}
          >
            <div className="p-4 m-4">
              <h1 className="text-3xl font-serif font-semibold mt-5">
                My Experience
              </h1>
              <div className="flex flex-row text-lg font-serif font-semibold">
                <i className="ri-arrow-right-double-line"></i>
                <h1> 2021 // March - Tech Sunset</h1>
              </div>
              <div className="flex flex-row text-lg font-serif font-semibold">
                <i className="ri-arrow-right-double-line"></i>
                <p>Phase 1, Electronics City, Bengaluru 560100</p>
              </div>
            </div>
          </div>
          <div
            className="border-2 border-inherit border-solid rounded-md responsive-element flex flex-row justify-between p-4"
            style={{ height: "250px", width: "350px" }}
          >
            <div>
              <h1 className="text-3xl font-serif font-semibold mt-8 ">
                What I do
              </h1>
              <div className="p-4">
                <ul className="font-serif text-base font-semibold">
                  <li>
                    <i className="ri-arrow-right-double-line"></i>Web
                    Development
                  </li>
                  <li>
                    <i className="ri-arrow-right-double-line"></i>Mobile App
                    Development
                  </li>
                  <li>
                    <i className="ri-arrow-right-double-line"></i>Digital
                    Marketing
                  </li>
                  <li>
                    <i className="ri-arrow-right-double-line"></i>Web Develoment
                    in MERN
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="border-2 border-inherit border-solid rounded-md responsive-element"
            style={{ height: "250px", width: "450px" }}
          >
            <div className="p-8 flex flex-row justify-between">
              <div>
                <h1 className="text-3xl font-serif font-semibold">02+</h1>
                <p className="font-serif text-base font-medium">
                  YEARS OF EXPERIENCE
                </p>
                <h1 className="text-3xl font-serif font-semibold mt-7">09</h1>
                <p className="font-serif text-base font-medium">RECOGNITIONS</p>
              </div>
              <div>
                <h1 className="text-3xl font-serif font-semibold">100+</h1>
                <p className="font-serif text-base font-medium">
                  TOTAL PROJECTS
                </p>
                <h1 className="text-3xl font-serif font-semibold mt-12">00</h1>
                <p className="font-serif text-base font-medium">
                  UNHAPPY CLIENTS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div
            className="border-2 border-inherit border-solid rounded-md responsive-element"
            style={{ height: "250px", width: "300px" }}
          >
            <div className="p-4 flex justify-between text-5xl">
              <span>
                <i class="ri-github-fill"></i>
              </span>
              <span className="text-cyan-500">
                <i class="ri-linkedin-box-line"></i>
              </span>
            </div>
            <div className="p-4 flex justify-between text-5xl">
              <span className="text-fuchsia-500">
                <a href="https://tailwindcss.com/docs/text-color">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span className="text-red-500">
                <i class="ri-youtube-line"></i>
              </span>
            </div>
            <h1 className="p-4 text-3xl font-serif font-semibold">
              Social Profile
            </h1>
          </div>
          <div
            className="border-2 border-inherit border-solid rounded-md responsive-element"
            style={{ height: "250px", width: "650px" }}
          >
            <div className="p-8">
              <h1 className="text-3xl font-serif font-semibold">Education</h1>
              <div className=" flex flex-row justify-between mt-10">
                <div className="">
                  <h3 className="font-medium">2011 - 2012</h3>
                  <h1 className="text-xl font-serif font-semibold">
                    {" "}
                    12th Pass 90%
                  </h1>
                  <h3 className="capitalize font-medium">up board allahabad</h3>
                </div>
                <div>
                  <h3 className="font-medium">2020 - 2021</h3>
                  <h1 className="text-xl font-serif font-semibold">
                    MERN TECHNOLOGY{" "}
                  </h1>
                  <h3 className="capitalize font-medium">WAP INSTITUTE</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="border-2 border-inherit border-solid rounded-md responsive-element"
            style={{ height: "250px", width: "320px" }}
          >
            <div className="p-8">
              <h1 className="text-3xl font-serif font-semibold">Let's Work</h1>
              <h1 className="text-3xl font-serif font-semibold ml-10">
                Together...!
              </h1>
              <button className=" mt-10 text-3xl font-serif font-semibold ml-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                  fill="currentColor"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 mx-24 flex justify-center">
        <button class="font-serif relative py-2 px-8 text-black text-3xl font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
        Technical Skills
        </button>
      </div>
      <Myskills />
    </Layout>
  );
};

export default Index;
