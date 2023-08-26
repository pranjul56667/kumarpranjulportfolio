import React from "react";
import { Link } from "react-router-dom";
const Aboutme = () => {
  return (
    <section className=" mx-20 flex flex-col text-center items-center text-neutral-800">
      <span className="text-5xl my-10 ">About Me</span>
      <span className="text-2xl">
      Hi i'm Kumar Pranjul, a dedicated IT professional with 1 year of hands-on experience in web development. I specialize in HTML, CSS, JavaScript, and React. I'm good at making websites look great and easy to use, and I understand how front-end technologies work. I've shown that I can work well with different teams to get projects done on time and with quality. I'm excited to use my skills and learn even more in the ever-changing IT world.</span>
      <Link
        to="/resume"
        className="border-4 block w-fit my-12 px-2 py-1 rounded font-semibold text-xl hover:bg-neutral-400"
      >
        Resume
      </Link>
    </section>
  );
};

export default Aboutme;
