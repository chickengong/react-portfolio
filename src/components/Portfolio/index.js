import React from "react";
import myfitnutritionImage from "../../assets/small/my-fit-nutrition.jpg";
import quipspotImage from "../../assets/small/quipspot.jpg";
import theofficeImage from "../../assets/small/the-office.jpg";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/chickengong/Project-2-Late-Night-Coders">
                {" "}
                <img
                  src={myfitnutritionImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="my-fit-nutrition"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>My Fit Nutrition</h4>
              <p>
              In this Project we created a full stack calorie tracker app. Which utilizes an MVC framework using MySQL, Express.js, Sequelize, Chart.js and handlebars.js 
              in order to allow users to create secure accounts and perform appropriate CRUD operations allowed by the server, to better organize there daily calorie intake.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/chickengong/project-1-kool-cats-1">
                {" "}
                <img
                  src={quipspotImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Quipspot"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Quipspot</h4>
              <p>
              Purpose: During peak time during gym workout, there would be a wait for gym equipment. To avoid the wait, this app is designed
               to reserve the equipment ahead of time. Therefore, saving your spot and eliminating the frustration of waiting for your turn for the equipment.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://chickengong.github.io/TheOfficeQuiz/">
                {" "}
                <img
                  src={theofficeImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="The-Office-Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>The Office Quiz</h4>
              <p>
              This is a 5 question quiz about The Office show
              When clicking on the start button, the timer will start (50 secounds for each question)
              When you answer the question you will either get a Incorrect or Correct on the bottom of the page and will go to the next question
              If you answer it wrong, the time will get smaller and smaller and when you win you will add 5 secounds more to the next question
              when the game is over you can put you initials and see who got the best score{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
