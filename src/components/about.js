import React from "react";
import "../styling/about.css"

function About() {
  return (
    <>
      <header className="about-header">
        <h1>Pokemon Climate</h1>
      </header>
      <section className="about-p">
        <p>
          Pokemon Climate was created as a learning tool for kids to explore
          interest in meteorology and climate
        </p>
        <p>
          We make learning fun by involving pokemon and current weather
          conditions together to add a little flare!
        </p>
        <p>We update which pokemon appear frequently so make sure you return</p>
        <p>Never know which pokemon will appear in the wild!</p>
      </section>
    </>
  );
}

export default About;
