import React, { useState } from "react";
import lumonLogo from "/lumonLogo.png";
import "./Header.css";

export default function Header() {
  const [projectName, setProjectName] = useState("Cold Harbor");
  const [currentIndex, setCurrentIndex] = useState(0);
  const names = [
    "Siena",
    "Allentown",
    "Tumwater",
    "Sunset Park",
    "Dranesville",
    "Cold Harbor",
  ];

  function handleName() {
    const nextIndex = (currentIndex + 1) % names.length;
    setProjectName(names[nextIndex]);
    setCurrentIndex(nextIndex);
  }
  return (
    <>
      <div className="header-container fixed-top">
        <div className="header mt-3 mb-4">
          <div className="row align-items-center">
            <div className="col-6">
              <p
                onClick={handleName}
                className="project-name ms-2 mb-0 fw-bolder"
              >
                {projectName}
              </p>
            </div>
            <div className="col-3">
              <p className="percentage mb-0 text-end">27% Complete</p>
              <img src={lumonLogo} alt="Lumon Logo" className="logo" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
