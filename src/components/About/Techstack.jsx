import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiHtml5,
    DiCss3,
    DiMysql,
} from "react-icons/di";
import { SiExpress, SiFlask } from "react-icons/si";
import { motion } from "framer-motion";

function Techstack() {
    const techs = [
        { icon: <DiJava />, name: "Java", link: "https://www.java.com/" },
        { icon: <DiPython />, name: "Python", link: "https://www.python.org/" },
        { icon: <DiJavascript1 />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { icon: <DiExt name="C++" icon={<CgCPlusPlus />} />, name: "C++", link: "https://cplusplus.com/" },
        { icon: <DiReact />, name: "ReactJS", link: "https://react.dev/" },
        { icon: <DiNodejs />, name: "NodeJS", link: "https://nodejs.org/" },
        { icon: <SiExpress />, name: "ExpressJS", link: "https://expressjs.com/" },
        { icon: <DiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/" },
        { icon: <DiMysql />, name: "MySQL", link: "https://www.mysql.com/" },
        { icon: <SiFlask />, name: "Flask", link: "https://flask.palletsprojects.com/" },
        { icon: <DiHtml5 />, name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { icon: <DiCss3 />, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { icon: <DiGit />, name: "Git", link: "https://git-scm.com/" }
    ];

    return (
        <div className="flex flex-wrap justify-center pb-12 gap-4 md:gap-6">
            {techs.map((tech, index) => (
                <TechIconWrapper key={index} name={tech.name} link={tech.link}>
                    {tech.icon}
                </TechIconWrapper>
            ))}
        </div>
    );
}

const TechIconWrapper = ({ children, name, link }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass flex flex-col items-center justify-center p-4 border border-primary-purple/30 rounded-lg hover:border-primary-purple transition-all duration-300 group relative w-24 h-24 md:w-32 md:h-32 card-hover mb-6 cursor-pointer"
        >
            <div className="text-4xl md:text-5xl text-gray-300 group-hover:text-primary-purple transition-colors duration-300">
                {name === "C++" ? <CgCPlusPlus /> : children}
            </div>
            <div className="absolute inset-x-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-sm font-semibold text-primary-purple whitespace-nowrap z-20">
                {name}
            </div>
        </motion.a>
    );
};

// Fallback logic
const DiExt = ({ icon }) => icon;

export default Techstack;
