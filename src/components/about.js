import React from "react";
import "../styling/about.css";

function About() {
  return (
    <>
      <div className="bg-container">
        <header className="about-header">
          <h1>Pokemon Climate</h1>
        </header>
        <section className="about-p">
          <p className="about-p">
            Was created as a learning tool for kids to explore interest in
            meteorology and climates in the United States.
          </p>
          <p className="about-p">
            We make learning fun by involving pokemon and current weather
            conditions.
          </p>
          <p className="about-p">
            So kids can explore which pokemon will be found in certain climates.
          </p>
          <p className="about-p">
            We update the pokemon that appear in the wild so make sure you
            comeback.
          </p>
          <p className="about-p">
            You never know which pokemon will appear next.
          </p>
        </section>
      </div>
    </>
  );
}

export default About;
