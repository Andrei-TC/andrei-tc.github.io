const Footer = () => {
  return (
    <footer className="flex">
      <ul className="contact-links">
        <li>
          <a
            href="https://github.com/Andrei-TC"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/github.png" alt="Github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/andrei-tiberius-cojocaru"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/linkedin.png" alt="Linkedin" />
          </a>
        </li>
      </ul>
      <a href="#home" className="back-top">
        Back to the top
        <img className="top-icon" src="./images/top.svg" alt="Go top page" />
      </a>
    </footer>
  );
};

export default Footer;
