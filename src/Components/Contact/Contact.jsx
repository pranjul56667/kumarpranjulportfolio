import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";


const Contact = () => {
  return (
    <section
      className="my-10  flex flex-col text-center items-center text-neutral-800 bg-neutral-100"
      id="contact"
    >
      <span className="text-5xl my-10">Get In Touch</span>
      <p className="px-24 text-xl">
      I'm looking for exciting chances as a Frontend Developer! If you know about any cool job openings or just want to say hi, feel free to reach out to me at : {" "}
        <a
  href="mailto:kumarpranjulkp9236@gmail.com?subject=Reaching%20Out&body=Hello%20Prince,"
  className="text-blue-600"
  target="_blank"
  rel="noopener noreferrer"
>
  kumarpranjulkp9236@gmail.com 
</a>
      </p>
      <div className="flex text-4xl my-6">
        <a
          href="https://github.com/pranjul56667"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="m-2 hover:text-blue-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/pranjul56667/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin className="m-2 hover:text-blue-700" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
