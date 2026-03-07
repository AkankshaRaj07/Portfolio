import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ title, description, ghLink, demoLink, tags }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass rounded-2xl overflow-hidden flex flex-col h-full border border-white/10 hover:border-primary-purple/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(199,112,240,0.2)]"
        >
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags && tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs font-semibold bg-primary-purple/20 text-primary-purple rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-300 text-sm flex-grow mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-4 mt-auto">
                    {ghLink && (
                        <a
                            href={ghLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2 px-4 rounded-lg transition-colors border border-white/10 text-sm font-medium w-full justify-center"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                    )}
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primary-purple hover:bg-primary-purple/80 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium w-full justify-center"
                        >
                            <ExternalLink size={18} />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
