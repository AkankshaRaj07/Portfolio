import React from "react";
import {
    SiAndroidstudio,
    SiPostman,
    SiRender,
    SiFigma,
} from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { motion } from "framer-motion";

function Toolstack() {
    const tools = [
        { icon: <SiAndroidstudio />, name: "Android Studio" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <VscGithubInverted />, name: "GitHub" },
        { icon: <SiRender />, name: "Render" },
        { icon: <SiFigma />, name: "Figma" },
    ];

    return (
        <div className="flex flex-wrap justify-center pb-12 gap-4 md:gap-6">
            {tools.map((tool, index) => (
                <ToolIconWrapper key={index} name={tool.name}>
                    {tool.icon}
                </ToolIconWrapper>
            ))}
        </div>
    );
}

const ToolIconWrapper = ({ children, name }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass flex flex-col items-center justify-center p-4 border border-primary-purple/30 rounded-lg hover:border-primary-purple transition-all duration-300 group relative w-24 h-24 md:w-32 md:h-32 card-hover mb-6"
        >
            <div className="text-4xl md:text-5xl text-gray-300 group-hover:text-primary-purple transition-colors duration-300">
                {children}
            </div>
            <div className="absolute inset-x-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-sm font-semibold text-primary-purple whitespace-nowrap z-20">
                {name}
            </div>
        </motion.div>
    );
};

export default Toolstack;
