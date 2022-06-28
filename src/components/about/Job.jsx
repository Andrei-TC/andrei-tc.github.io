const Job = ({
  jobTitle,
  jobIcon,
  jobDuration,
  currentJob,
  tools,
  company,
}) => {
  return (
    <li className="about-list-card flex">
      <img src={jobIcon} alt="Job logo" className="job-icon" title={company} />
      <span className="job-icon-desc">{company}</span>
      <div className="job-desc electronic-arts">
        <h4 className="job-title">{jobTitle}</h4>
        <span className="job-duration">
          {jobDuration}{" "}
          {currentJob && <span className="current-job">(current job)</span>}
        </span>
        <ul className="tools-used flex">
          {tools &&
            tools.map((tool) => (
              <li className="tool-used" key={tool}>
                {tool}
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};

export default Job;
