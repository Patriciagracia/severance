import React from "react";
import "./Footer.css";

const progressData = [
  { id: 1, value: 50 },
  { id: 2, value: 22 },
  { id: 3, value: 50 },
  { id: 4, value: 35 },
  { id: 5, value: 70 },
];

export default function Footer() {
  return (
    <footer className="footer-container fixed-bottom">
      <hr />
      <div className="container">
        <div className="row">
          {progressData.map(({ id, value }) => (
            <div key={id} className="col">
              <div className="number-box d-flex flex-column align-items-center w-100">
                <p>{`0${id}`}</p>
              </div>
              <div className="progress w-100">
                <div
                  className="progress-bar"
                  style={{ width: `calc(${value}% - 2px)` }}
                >
                  {value}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="footer-hr" />
      <div>
        <p className="code text-center">0x15DB4A : 0X0AEAFC</p>
      </div>
    </footer>
  );
}
