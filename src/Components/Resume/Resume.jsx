import React from "react";
import { Link } from "react-router-dom";
import pdf from "./pdf/resume.pdf"; // Update the path to your PDF file

const Resume = () => {
  return (
    <div className="m-auto py-16 text-center">
      <Link to="/" className="animate-pulse text-blue-600 font-semibold">
        Back
      </Link>
      <object
        data={pdf}
        type="application/pdf"
        width="600"
        height="800"
        className="mx-auto"
      >
        <p>Your browser does not support PDF viewing. You can download the PDF file <a href={pdf}>here</a>.</p>
      </object>
    </div>
  );
};

export default Resume;
