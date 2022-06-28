import Job from "./Job";
import { aboutData } from "./aboutData";
import { useLayoutEffect, useState } from "react";

const About = () => {
  const [abtData, setData] = useState();
  useLayoutEffect(() => {
    setData(aboutData);
  }, []);

  return (
    <div className="about-container flex" id="about">
      <h3>About</h3>
      <p>
        I'm a self-taught Front-End Developer with a passion for problem
        solving. Since I was a kid I loved technology, the ability to
        create/reproduce things and thoughts from the real world in the virtual
        world, limited only by your mind boundaries. The first touch with the
        programming world was back in 2014, when I tried creating a website
        using a 3rd party application. After that, I tried different approaches
        (creating games, creating servers, etc... ), but I was always ending up
        back to web development.
      </p>
      <ul className="about-list grid">
        {abtData &&
          aboutData.map((data) => (
            <Job
              key={data.jobTitle}
              jobTitle={data.jobTitle}
              jobIcon={data.jobIcon}
              jobDuration={data.jobDuration}
              currentJob={data.currentJob}
              tools={data.tools}
              company={data.company}
            />
          ))}
      </ul>
    </div>
  );
};

export default About;
