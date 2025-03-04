import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { Line} from 'rc-progress';

import { AppWrap, MotionWrap } from "../../wrapper/index";
import { urlFor, client } from "../../client";
import "./Skills.scss";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = `*[_type=='experiences']`; // ✅ Fixed missing closing quote
    const skillsQuery = `*[_type=='skills']`;

    client.fetch(query)
      .then((data) => {
        setExperience(data || []); // ✅ Ensure we always set an array
      })
      .catch((err) => console.error("Error fetching experiences:", err));

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data || []); // ✅ Ensure we always set an array
      })
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        {/* Skills Section */}
        <motion.div className="app__skills-list">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill._id} // ✅ Use `_id` if available
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
                <br />
                <Line percent={Math.floor(Math.random() * (90 - 70 + 1)) + 70} strokeWidth={5} strokeColor="#313bac" />
              </motion.div>
            ))
          ) : (
            <p>Loading skills...</p> // ✅ Handle loading state
          )}
        </motion.div>

        {/* Experience Section
        <motion.div className="app__skills-exp">
          {experience.length > 0 ? (
            experience.map((exp) => (
              <div key={exp._id} className="app__skills-exp-item">
                <div className="app__skills-exp-year">
                  <p className="bold-text">{exp.year}</p>
                </div>
                <div className="app__skills-exp-works">
                  {exp.works && exp.works.length > 0 ? (
                    exp.works.map((work) => (
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tooltip-id={work.name} // ✅ Corrected Tooltip attribute
                        key={work._id}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                        <Tooltip id={work.name} effect="solid" className="skills-tooltip">
                          {work.desc}
                        </Tooltip>
                      </motion.div>
                    ))
                  ) : (
                    <p>No experience details available</p> // ✅ Handle empty work data
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading experience...</p> // ✅ Handle loading state
          )}
        </motion.div> */}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);

