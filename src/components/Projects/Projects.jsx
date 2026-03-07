import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {
            title: "StudentConnect",
            description: "A full-stack campus utility platform enabling students to buy/sell items via a marketplace, report and recover lost belongings, and find hackathon teammates through a scalable RESTful web application.",
            ghLink: "https://github.com/AkankshaRaj07/StudentConnect",
            tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"]
        },
        {
            title: "EarlyGuard (Silent Disease Detection)",
            description: "An ML-driven early disease risk prediction system modeling pre-symptomatic health signals from clinical vitals to generate condition-wise risk scores and unified preventive assessments.",
            ghLink: "https://github.com/AkankshaRaj07/GFGBQ-Team-unocoders",
            demoLink: "https://gfgbq-team-unocoders.onrender.com/home",
            tags: ["Python", "Scikit-learn", "Node.js", "React"]
        },
        {
            title: "Surakshak",
            description: "A continuous authentication system using behavioral biometrics (typing rhythm, touch pressure) with real-time risk scoring and anomaly detection to enhance session security and prevent hijacking.",
            ghLink: "https://github.com/AkankshaRaj07/Surakshak",
            tags: ["Python", "Android (Java)", "Machine Learning"]
        },
        {
            title: "Votify",
            description: "A secure, scalable voting platform with QR-based voter ID and real-time face verification, designing an end-to-end computer-vision authentication flow.",
            ghLink: "https://github.com/AkankshaRaj07/Face-Auth-Voting",
            demoLink: "https://vote-160ee.web.app/",
            tags: ["Computer Vision", "JavaScript", "Google AI"]
        },
        {
            title: "AI-ActionPlan",
            description: "A multimodal Knowledge Execution Engine built with Gemini 3 Pro. Ingests screenshots/notes and generates personalized daily routines and mastery roadmaps.",
            ghLink: "https://github.com/AkankshaRaj07/AI-ActionPlan",
            demoLink: "https://ai.studio/apps/drive/1Dc33sv-NAUqfqxUu2jEcOAKCgU7w6h2f",
            tags: ["TypeScript", "Gemini 3 Pro"]
        },
        {
            title: "LiveContext",
            description: "AI-driven podcast generator with real-time interrupt handling, document chunking, evidence citations, and persona-based conversations via Gemini's long-context capabilities.",
            ghLink: "https://github.com/AkankshaRaj07/LiveContext",
            demoLink: "https://ai.studio/apps/drive/13exO_MkDzfVXViQrhRIEiE6CuSqWSmv-",
            tags: ["TypeScript", "AI", "Gemini"]
        },
        {
            title: "KrishiStore",
            description: "A front-end web application empowering farmers by providing a platform to sell their products directly to consumers, eliminating middlemen.",
            ghLink: "https://github.com/AkankshaRaj07/KrishiStore",
            tags: ["HTML", "CSS", "Frontend"]
        },
        {
            title: "Blogging-App",
            description: "A simple full-stack blogging application built with Node.js, Express, MongoDB, and EJS for users to create, edit, and delete posts.",
            ghLink: "https://github.com/AkankshaRaj07/Blogging-App",
            demoLink: "https://blogging-app-yv81.onrender.com/",
            tags: ["Node.js", "Express", "MongoDB", "EJS"]
        }
    ];

    return (
        <section id="project" className="relative z-10 w-full min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        My Recent <strong className="text-primary-purple">Works</strong>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Here are a few projects I've worked on recently.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
