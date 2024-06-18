import React from "react";
import 'animate.css';
const frontend = [
  {
    icon: "frontendicon/html.png",
    title: "html",
  },
  {
    icon: "frontendicon/css.png",
    title: "css",
  },
  {
    icon: "frontendicon/javascript.png",
    title: "java script",
  },
  {
    icon: "frontendicon/typescript.png",
    title: "type script",
  },
  {
    icon: "frontendicon/reactjs.png",
    title: "react js",
  },
  {
    icon: "frontendicon/tailwind.png",
    title: "tailwind",
  },
  {
    icon: "frontendicon/material-ui.png",
    title: "material-ui",
  },
  {
    icon: "frontendicon/ant.png",
    title: "ant design",
  },
];
const backend = [
    {
        icon: "backendicon/apache-kafka.png",
        title: "apache-kafka",
    },
    {
        icon: "backendicon/aws-dynamodb.png",
        title: "aws-dynamodb",
    },
    {
        icon: "backendicon/laravel.png",
        title: "laravel",
    },
    {
        icon: "backendicon/memcached.png",
        title: "memcached",
    },
    {
        icon: "backendicon/mongodb.png",
        title: "mongodb",
    },
    {
        icon: "backendicon/nextjs.png",
        title: "nextjs",
    },
    {
        icon: "backendicon/node-js.png",
        title: "node-js",
    },
    {
        icon: "backendicon/php.png",
        title: "php",
    },
    {
        icon: "backendicon/postgresql.png",
        title: "postgresql",
    },
    {
        icon: "backendicon/redis.png",
        title: "redis",
    },
    {
        icon: "backendicon/sql-database.png",
        title: "sql-database",
    },
];
const devops = [
    {
        icon: "devopsicon/apache-tomcat.png",
        title: "apache-tomcat",
    },
    {
        icon: "devopsicon/aws.png",
        title: "aws",
    },
    {
        icon: "devopsicon/bitbucket.png",
        title: "bitbucket",
    },
    {
        icon: "devopsicon/docker.png",
        title: "docker",
    },
    {
        icon: "devopsicon/git.png",
        title: "git",
    },
    {
        icon: "devopsicon/github.png",
        title: "github",
    },
    {
        icon: "devopsicon/jenkins.png",
        title: "jenkins",
    },
    {
        icon: "devopsicon/kubernetes.png",
        title: "kubernetes",
    },
    {
        icon: "devopsicon/microsoft-azure.png",
        title: "microsoft-azure",
    },
];
const agile =[
    {
        icon: "agileicon/confluence.png",
        title: "confluence",
    },
    {
        icon: "agileicon/jira.png",
        title: "jira",
    },
    {
        icon: "agileicon/zoho.png",
        title: "zoho",
    },
];
const index = () => { 
  return (
    <div className="flex flex-row justify-between mx-24 col-span-4 gap-4">
      <div className="border-2 border-inherit border-solid rounded-lg h-auto w-full  animate__animated animate__zoomIn transition: transform 2.5s;">
        <h1 className="capitalize font-serif text-3xl font-extrabold flex justify-center mt-4">
          Frontend
        </h1>
        <div className="flex flex-wrap justify-center mt-2 gap-4 p-6">
          {frontend.map((image, index) => (
            <div key={index}>
               <p className="capitalize font-serif text-xl font-bold">
                {image.title}
              </p>
              {(index + 1) % 5 === 0 && index !== frontend.length - 1 && <br />}
            </div>
          ))}
        </div>
      </div>
      <div className="border-2 border-inherit border-solid rounded-lg h-auto w-full">
        <h1 className="capitalize font-serif text-3xl font-extrabold flex justify-center mt-4">
          Backend
        </h1>
        <div className="flex flex-wrap justify-center mt-2 gap-2 p-6">
          {backend.map((image, index) => (
            <div key={index}>

              <p className="capitalize font-serif text-xl font-bold">
                {image.title}
              </p>
              {(index + 1) % 5 === 0 && index !== frontend.length - 1 && <br />}
            </div>
          ))}
        </div>
      </div>
      <div className="border-2 border-inherit border-solid rounded-lg h-auto w-full">
        <h1 className="capitalize font-serif text-3xl font-extrabold flex justify-center mt-4">
          Devops
        </h1>
        <div className="flex flex-wrap justify-center mt-2 gap-4 p-6">
          {devops.map((image, index) => (
            <div key={index}>
              <p className="capitalize font-serif text-xl font-bold">
                {image.title}
              </p>
              {(index + 1) % 5 === 0 && index !== frontend.length - 1 && <br />}
            </div>
          ))}
        </div>
      </div>
      <div className="border-2 border-inherit border-solid rounded-lg h-auto w-full">
        <h1 className="capitalize font-serif text-3xl font-extrabold flex justify-center mt-4">
        Agile and Scrum <br/>Development
        </h1>
        <div className="flex flex-wrap justify-center mt-2 gap-4 p-6">
          {agile.map((image, index) => (
            <div key={index}>
              <p className="capitalize font-serif text-xl font-bold">
                {image.title}
              </p>
              {(index + 1) % 5 === 0 && index !== frontend.length - 1 && <br />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
