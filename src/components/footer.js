import React from "react";
import "../styling/footer.css";
function Footer() {
  return (
    <>
      <footer>
        <a className="github" href="https://github.com/JordyPena">
          <img
            src="https://pcdn.sharethis.com/wp-content/uploads/2018/02/github.png"
            width="30"
            height="30"
            alt="github logo"
          />
        </a>

        <a
          className="linkedin"
          href="https://www.linkedin.com/in/jordypenadev/"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/61/61109.png"
            width="30"
            height="30"
            alt="linkedin logo"
          />
        </a>

        <a className="folio" href="https://jordypena.github.io/Portfolio/">
          Portfolio
        </a>
      </footer>
    </>
  );
}

export default Footer;
