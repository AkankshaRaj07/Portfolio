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
        { icon: <DiJava />, name: "Java" },
        { icon: <DiPython />, name: "Python" },
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <DiExt name="C++" icon={<CgCPlusPlus />} />, name: "C++" },
        { icon: <DiReact />, name: "ReactJS" },
        { icon: <DiNodejs />, name: "NodeJS" },
        { icon: <SiExpress />, name: "ExpressJS" },
        { icon: <DiMongodb />, name: "MongoDB" },
        { icon: <DiMysql />, name: "MySQL" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <DiHtml5 />, name: "HTML" },
        { icon: <DiCss3 />, name: "CSS" },
        { icon: <DiGit />, name: "Git" }
    ];

    return (
        <div className="flex flex-wrap justify-center pb-12 gap-4 md:gap-6">
            {techs.map((tech, index) => (
                <TechIconWrapper key={index} name={tech.name}>
                    {tech.icon}
                </TechIconWrapper>
            ))}
        </div>
    );
}

const TechIconWrapper = ({ children, name }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass flex flex-col items-center justify-center p-4 border border-primary-purple/30 rounded-lg hover:border-primary-purple transition-all duration-300 group relative w-24 h-24 md:w-32 md:h-32 card-hover mb-6"
        >
            <div className="text-4xl md:text-5xl text-gray-300 group-hover:text-primary-purple transition-colors duration-300">
                {name === "C++" ? <CgCPlusPlus /> : children}
            </div>
            <div className="absolute inset-x-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-sm font-semibold text-primary-purple whitespace-nowrap z-20">
                {name}
            </div>
        </motion.div>
    );
};

// Fallback logic
const DiExt = ({ icon }) => icon;

export default Techstack;
