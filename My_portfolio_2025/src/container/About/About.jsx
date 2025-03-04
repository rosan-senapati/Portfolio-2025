import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { images } from "../../constants/index.js";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper/index";

import { urlFor, client } from "../../client.js";

// const abouts = [
//   {title:'Web Development', description:"I am a good web developer",imgurl:images.about01},
//   {title:'Web Design', description:"I am a good web designer",imgurl:images.about02},
//   {title:'UI/UX', description:"I am a good UI/UX designer",imgurl:images.about03},
//   {title:'Backend Developer', description:"I am a good backend developer",imgurl:images.about04},
// ]
function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Education</span>
        <br /> means <span>Good Future</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
