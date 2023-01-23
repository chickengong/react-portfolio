import React from "react";
import profileImage from "../../assets/large/Profile/profile-pic.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Ellexandra Cox. I am currently living in Austin,TX. 
            I have a associates degree in Graphic Design and Digital Media Marketing
             Certificate from Johnson County Community College. 
            I am getting my fullstack web development certificate now at 
            University of Texas at Austin.
            I have 2 dogs, and a wonderful IT husband. 
            I love food and I am just a bubbly person. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
