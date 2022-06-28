const Project = ({ id, name, imgM, imgD, desc, tech, ll, cl }) => {
  return (
    <div className="project-container">
      <div className="project-info">
        <img className="projMobile" src={imgM} alt="Project overview" />

        <div className="project-info-desc">
          <h2>{name}</h2>
          <p>
            <q>{desc}</q>
          </p>
          <ul className="tehnology-used">
            {tech &&
              tech.map((tec) => (
                <li key={tec}>
                  <img src={tec} alt="Icon" className="icons" />
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="project-action-btn flex">
        <a href={cl} target="_blank" rel="noreferrer">
          <button className="btn project-btn-code">Code</button>
        </a>
        <a href={ll} target="_blank" rel="noreferrer">
          <button className="btn project-btn-live">Live</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
