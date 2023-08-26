import React from "react";
import cardDetail from "./Cards.json";
import { FaEye } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
const Cards = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-neutral-700 text-center w-fit sm:px-2 md:px-16 mb-12">
      {cardDetail.map((data) => {
        const { id, imageUrl, title, description, demo, sourceCode } = data;
        return (
          <div
            key={id}
            className="border-gray-300 border-8 bg-gray-300 pb-1 rounded shadow hover:shadow-lg"
          >
            <img src={imageUrl} alt={title} className="rounded" />
            <div className="py-2">
              <h2 className="text-xl text-black font-bold">{title}</h2>
              <span className="text-md px-2">{description}</span>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 text-neutral-900 bottom-0">
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-400 sm:mx-0 md:mx-6 my-0 sm:my-3 md:my-0 flex justify-center items-center px-1 rounded text-lg  hover:bg-neutral-500 hover:text-neutral-200 hover:font-semibold"
              >
                <span className="pr-1">view </span>
                <FaEye />
              </a>
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-400 sm:mx-0 md:mx-3 my-0 sm:my-3 md:my-0 flex justify-center items-center px-1 rounded text-lg hover:bg-neutral-500 hover:text-neutral-200 hover:font-semibold"
              >
                {" "}
                <span className="pr-1">Code</span>
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
