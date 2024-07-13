import Resume from "../assets/Resume.pdf";
import Transcript from "../assets/Transcript.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  return (
    <nav>
      <div className="links">
        <a href={Resume} className="link_item" target="_blank" rel="noreferrer">
          Resume
        </a>
        <a
          href={Transcript}
          className="link_item"
          target="_blank"
          rel="noreferrer"
        >
          Transcript
        </a>
        <a
          href="https://www.linkedin.com/in/jchen2002/"
          className="link_item"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
          LinkedIn
        </a>

        <a
          href="https://github.com/JASONCHENEHCNOSAJ"
          className="link_item"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icons" />
          GitHub
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
