import React from "react";
import Layout from "../shared/layout/index";
const index = () => {
  const contact = [
    {
      icon: <i class="ri-phone-line"></i>,
      title: "Phone",
      details: "+91 7982875924",
    },
    {
      icon: <i class="ri-mail-line"></i>,
      title: "Email",
      details: "hansrajyadav9041@gmail.com",
    },
    {
      icon: <i class="ri-map-pin-user-line"></i>,
      title: "Address",
      details: "H.00 C-1 Phase-4 Aya Nagar New Delhi 110047",
    },
  ];
  const socialicon = [
    {
      sicon: <i class="ri-facebook-circle-line"></i>,
      name:"facebook"
    },
    {
      sicon: <i class="ri-twitter-line"></i>,
      name:"twitter",
    },
    {
      sicon: <i class="ri-instagram-line"></i>,
      name:"instagram",
    },
    {
      sicon: <i class="ri-linkedin-fill"></i>,
      name:"linkedin",
    },
    {
      sicon: <i class="ri-github-fill"></i>,
      name:"github",
    },
    {
      sicon: <i class="ri-youtube-line"></i>,
      name:"youtube",
    },
  ];
  return (
    <Layout>
      <div className="mx-24 gap-6 my-16">
        <div className=" flex justify-between">
          <div
            style={{ height: "600px", width: "450px" }}
            className="p-4 space-y-4"
          >
            <h3 className="text-xl font-semibold font-serif text-pink-700">
              Contact Info
            </h3>
            <h1 className="text-4xl font-semibold font-serif">Get In Touch</h1>
            <h3 className="text-xl font-semibold font-serif">
              Don't be afraid man! just
              <br />
              say hello
            </h3>
            <div>
              <ul>
                {contact.map((item, index) => (
                  <div className=" flex flex-row gap-6 mt-2">
                    <li
                      key={index}
                      className="border-2 border-solid p-6 space-y-2 rounded-full mt-4 text-4xl border-cyan-700"
                    >
                      {item.icon}
                    </li>
                    <div className="flex flex-col mt-6">
                      <h1 className="font-sans text-2xl font-semibold">
                        {item.title}
                      </h1>
                      <h2 className="font-sans text-lg font-semibold">
                        {item.details}
                      </h2>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{ height: "500px", width: "850px" }}
            className="border-2 border-inherit border-solid rounded-md bg-white p-8 mt-8"
          >
            <form>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Hansraj Yadav"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="hansyadav9041@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="7982875924"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
                <div>
                  <label
                    for="message"
                    class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <a
                      href="Hans"
                      class="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-4">
        <ul className="flex flex-row gap-6 justify-between">
          {
            socialicon.map((icon,index) => (
             <div className=" flex flex-row border-solid border-black border-2 rounded-2xl p-4">
              <li key={index} className="text-3xl font-semibold">{icon.sicon}</li>
              <h1 className="ml-4 capitalize text-2xl font-semibold">{icon.name}</h1>
             </div>
            ))
          }
        </ul>
     
        </div>
      </div>
    </Layout>
  );
};

export default index;
