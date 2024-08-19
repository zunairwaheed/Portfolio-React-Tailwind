import React from "react";
import javascript from "../../public/javascript.jpg";
import mern from "../../public/mern.png";
import reactnative from "../../public/reactnative.png";
import tailwind from "../../public/tailwind.png";



function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: reactnative,
      name: "Event Hub",
      text: "This tech stack enables seamless interaction between customers and event planners, ensuring efficient management and selection of event services based on ratings and reviews",
    },
    {
      id: 2,
      logo: mern,
      name: "E-Commerce",
      text: ".The project involved creating a user-friendly interface with React.js.I designed and implemented RESTful APIs with Node.js and Express.js to handle user authentication, data validation, managed a MongoDB database to store and retrieve application data",
    },
    {
      id: 3,
      logo: tailwind,
      name: "Portfolio",
      text: " I developed a React-based and tailwind portfolio website showcasing my skills, projects, and resume for a dynamic and interactive online presence",
    },
    {
      id: 4,
      logo: javascript,
      name: "Form Validator",
      text: "This is javascript code for validate the form whether all fields are filled correctly or not.",
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        {cardItems.map(({ id, logo, name, text }) => (
          <div
            className="md:w-[300px] md:h-[450px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img
              src={logo}
              className="w-[120px] h-[120px] p-1 rounded-full border-[px] "
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">{name}</div>
              <div className="px-2 text-gray-700">{text}</div>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
