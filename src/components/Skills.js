// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
// import React from "react";
// import { FaReact, FaPython, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
// import { SiCplusplus, SiTailwindcss, SiTensorflow, SiPytorch, SiJavascript } from "react-icons/si";
// import "../SkillsAnime.css"; // Create this CSS file for custom styles

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>I’m skilled in Python, C++, JavaScript, and C, with experience in building full-stack web apps using React.js, Next.js, Node.js, and Flask. I’ve worked on web scraping with Playwright and BeautifulSoup, and handled data with Redis and SQLite. My frontend styling uses TailwindCSS, ShadCN, and AceternityUI. I'm currently learning deep learning with TensorFlow and PyTorch, and use Git, GitHub, and Postman for development and collaboration.</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="Image" />
//                                 <h5>Brand Identity</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="Image" />
//                                 <h5>Logo Design</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }
/*
  To create an "anime" style skills section, you can use animated icons, vibrant gradients, and animated progress bars for each skill.
  Below is an example of how you might add an anime-inspired animated skills grid using CSS animations and icons.
  You can further enhance this with libraries like framer-motion or anime.js for more advanced effects.
*/

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./SkillsAnime.module.css";

import {
  FaCode, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGitAlt, FaPhp, FaJava, FaGithub,
} from "react-icons/fa";

import {
  SiCplusplus, SiTailwindcss, SiFlask, SiJupyter, SiNumpy, SiPandas, SiMongodb,
  SiScikitlearn, SiTensorflow, SiPytorch, SiPostman, SiVercel, SiGoogleanalytics,
  SiNextdotjs, SiExpress, SiRedis, SiSqlite
} from "react-icons/si";

const skillGroups = {
  Languages: [
    { icon: <FaPython />, name: "Python", color: "#3776ab", level: 85 },
    { icon: <SiCplusplus />, name: "C++", color: "#00599c", level: 80 },
    { icon: <FaJs />, name: "JavaScript", color: "#f7df1e", level: 85 },
    { icon: <FaJava />, name: "Java", color: "#007396", level: 70 },
    { icon: <FaPhp />, name: "PHP", color: "#777bb4", level: 65 },
    { icon: <span style={{ fontSize: "3rem", fontWeight: "700", color: "#555" }}>C</span>, name: "C", color: "#555", level: 75 },
  ],
  Full_Stack: [
    { icon: <FaHtml5 />, name: "HTML", color: "#e34c26", level: 90 },
    { icon: <FaCss3Alt />, name: "CSS", color: "#264de4", level: 85 },
    { icon: <FaJs />, name: "JavaScript", color: "#f7df1e", level: 85 },
    { icon: <FaReact />, name: "React.js", color: "#61dafb", level: 90 },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000", level: 80 },
    { icon: <SiTailwindcss />, name: "TailwindCSS", color: "#38bdf8", level: 80 },
    { icon: <span style={{ fontWeight: "100", color: "#1f2937" , fontSize: "20px"}}>ShadCN</span>, name: "ShadCN", color: "#1f2937", level: 70 },
    { icon: <FaNodeJs />, name: "Node.js", color: "#3c873a", level: 85 },
    { icon: <SiExpress />, name: "Express.js", color: "#000", level: 80 },
    { icon: <SiFlask />, name: "Flask", color: "#000000", level: 70 },
    { icon: <span style={{ fontWeight: "700", color: "#10b981", fontSize: "20px" }}>REST-APIs</span>, name: "REST APIs", color: "#10b981", level: 80 },
  ],
  "AI / ML Tools": [
    { icon: <SiScikitlearn />, name: "Scikit-learn", color: "#f7931e", level: 75 },
    { icon: <SiJupyter />, name: "Jupyter", color: "#f37626", level: 75 },
    { icon: <SiNumpy />, name: "NumPy", color: "#013243", level: 80 },
    { icon: <SiPandas />, name: "Pandas", color: "#150458", level: 80 },
    { icon: <SiTensorflow />, name: "TensorFlow", color: "#ff6f00", level: 60 },
    { icon: <SiPytorch />, name: "PyTorch", color: "#ee4c2c", level: 55 },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47a248", level: 65 },
  ],
  "Database & Caching": [
    { icon: <SiRedis />, name: "Redis", color: "#d82c20", level: 75 },
    { icon: <SiSqlite />, name: "SQLite", color: "#003b57", level: 70 },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47a248", level: 65 },
  ],
  Tools: [
    { icon: <FaGitAlt />, name: "Git", color: "#f34f29", level: 85 },
    { icon: <FaGithub />, name: "GitHub", color: "#000000", level: 90 },
    { icon: <SiPostman />, name: "Postman", color: "#ff6c37", level: 80 },
    { icon: <FaCode />, name: "VS Code", color: "#007acc", level: 90 },
    { icon: <SiGoogleanalytics />, name: "Google APIs", color: "#4285f4", level: 70 },
    { icon: <SiVercel />, name: "Netlify", color: "#000000", level: 70 },
  ],
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 8,
  slidesToScroll: 8,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 10, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export const Skills = () => (
  <section className={styles.animeSkillSection} aria-label="Technical Skills Section" id="skills">
    <h2 className={styles.animeTitle}>My Tech Stack</h2>
    {Object.entries(skillGroups).map(([group, skills]) => (
      <div key={group} className="mb-2">
        <h3 className={styles.groupTitle}>{group}</h3>
        <Slider {...sliderSettings}>
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={styles.skillCard}
              role="listitem"
              aria-label={`${skill.name} skill proficiency ${skill.level} percent`}
            >
              <div
                className={styles.skillIcon}
                style={{ color: skill.color }}
                aria-hidden="true"
              >
                {skill.icon}
              </div>
              <p className={styles.skillName}>{skill.name}</p>
              {/* <div className={styles.skillBarBg}>
                <div
                  className={styles.skillBar}
                  style={{
                    "--skill-color": skill.color,
                    "--skill-level": `${skill.level}%`,
                    width: `${skill.level}%`,
                  }}
                />
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    ))}
  </section>
);

