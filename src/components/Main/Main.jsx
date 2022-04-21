import React from "react";
import "./Main.css";


export const Main = () => {
  return (
    <div>
      <div className="container">
        <div className="text-exp row text-center m-5">
          <h4>Mi experiencia y stack</h4>
        </div>
      </div>
      <div className="container animate__animated animate__fadeInUp">
        <div className="row justify-content-center mt-5">
          <div className="col-10 col-lg-5 col-md-5 col-sm-10 box">
              <h5 className="mt-3">Frontend</h5>
            <div className="container col text-start">
              <div className="row d-flex ">
                <h6 className="col-6 mt-3"><i className="bi bi-check-circle-fill"></i>HTML</h6>
                <h6 className="col-6 mt-3"><i className="bi bi-check-circle-fill"></i>CSS</h6>
                <h6 className="col-6 mt-5"><i className="bi bi-check-circle-fill"></i>Bootstrap</h6>
                <h6 className="col-6 mt-5"><i className="bi bi-check-circle-fill"></i>Javascript</h6>
                <h6 className="col-6 mt-5"><i className="bi bi-check-circle-fill"></i>React</h6>
                <h6 className="col-6 mt-5"><i className="bi bi-check-circle-fill"></i>Git</h6>
              </div>
            </div>
          </div>
          <div className="col-10 col-lg-5 col-md-5 col-sm-10  box">
            <div className="container col text-center">
              <h5 className="mt-3">Backend</h5>
              <div className="row d-flex ">
                <h6 className="col-6 mt-3"><i className="bi bi-check-circle-fill"></i>Node JS</h6>
                <h6 className="col-6 mt-3"><i className="bi bi-check-circle-fill"></i>Express</h6>
                <h6 className="col-6 mt-5"><i className="bi bi-check-circle-fill"></i>Firebase</h6>
                <h6 className="col-6 mt-5"><i className="bi bi-check-circle-fill"></i>Sequelize</h6>
                <h6 className="col-6 mt-5"><i className="bi bi-check-circle-fill"></i>MongoDB</h6>
                <h6 className="col-6 mt-5"><i className="bi bi-check-circle-fill"></i>MySQL</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
