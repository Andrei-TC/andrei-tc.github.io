const Header = () => {
  return (
    <div className="header-container flex" id="home">
      <p>Hello, I'm</p>
      <h1>
        Cojocaru Andrei <br /> Tiberius
      </h1>
      <span>Front-End Developer</span>
      <div className="header-action-btn">
        <button className="btn header-download">
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQ_Nr_nU5qaFv33MaM-cAnhdBgoaqK31nHchaI-y8GqoMVT23F8zG2RxilMepssDFheaUpgnydCrwrr/pub?embedded=true"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>
        </button>
        <button className="btn header-contact">
          <a href="#contact">Let's Talk</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
