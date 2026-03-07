import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import PhotoCarousel from "./PhotoCarousel";
import CertificateCard from "./CertificateCard";
import AchievementCard from "./AchievementCard";

function Resume() {
    const education = [
        {
            degree: "BTech in Computer Science",
            institution: "Lakshmi Narain College of Technology Excellence",
            year: "Expected 2027",
            score: "8.72 CGPA"
        },
        {
            degree: "Higher Secondary",
            institution: "Loyola Convent School",
            year: "2022",
            score: "90.2%"
        },
        {
            degree: "Secondary",
            institution: "St. Anne’s Girls’ High School",
            year: "2020",
            score: "95.4%"
        }
    ];

    const achievements = [
        "Selected, PwC Launchpad Program 2026 — Industry-focused engineering upskilling initiative (Top 50 in 2200).",
        "Winner, Research Conclave 2025 – Winner in Research Paper writing over 50 teams.",
        "Winner, Smart India Internal Hackathon (SIH) 2025 – Won in about 150 teams.",
        "Finalist, Suraksha Cyber Hackathon by Canara Bank, 2025 – Prototype submission Round.",
        "Finalist, HackOrbit National Hackathon by MITS Gwalior 2025.",
        "GDG Solution Challenge 2025 – Participated as a team of 3, Prototype Development Phase.",
        "Dainik Jagran Genius Award (2022) — Academic excellence",
        "Prabhat Khabar Samman Samaroh Award (2020 & 2022) — Academic achievement & School Topper"
    ];

    const certificationsData = [
        {
            title: "GEN AI - 2024",
            organization: "GDG LNCTE",
            date: "Dec 2024",
            skills: ["Generative AI"],
            image: "/certifications/GDG_Certification.png",
            featured: true
        },
        {
            title: "Oracle certified foundations Associate",
            organization: "Oracle",
            date: "Sep 2025",
            skills: ["Cloud Infrastructure"],
            image: "/certifications/Oracle Certificate.pdf",
            featured: true
        },
        {
            title: "Google Solution Challenge",
            organization: "Hack2skill",
            date: "Aug 2025",
            skills: ["Python", "Node.js", "Prototyping"],
            image: "/certifications/Hack2skill-Certificate (1).png",
            featured: true
        },
        {
            title: "GSSOC Contributor Badge 2025",
            organization: "GSSoC 'ITMBU",
            date: "Aug 2025",
            skills: ["Open Source"],
            image: "/certifications/Contributor's badge.jpg",
            featured: false
        },
        {
            title: "Adobe India Hackathon",
            organization: "Adobe",
            date: "Jul 2025",
            skills: ["Hackathon", "Problem Solving"],
            image: "/certifications/Certificate of Participation-Adobe India Hackathon.pdf",
            featured: false
        },
        {
            title: "End-to-End Machine Learning on Vertex AI",
            organization: "Unstop",
            date: "Dec 2025",
            skills: ["Machine Learning", "Vertex AI"],
            image: "/certifications/ML.jpg",
            featured: false
        },
        {
            title: "HackOrbit 2025 - National Hackathon",
            organization: "MITS, Gwalior",
            date: "Jul 2025",
            skills: ["Machine Learning"],
            image: "/certifications/Certificate of participation-Hackorbit by MITS.pdf",
            featured: false
        },
        {
            title: "Associate in IT Foundations (JAVA)",
            organization: "Infosys Springboard",
            date: "Dec 2025",
            skills: ["DBMS", "Software Engineering", "Java"],
            image: "/certifications/1-f0360479-56a7-4578-9939-d112f1fce989.pdf",
            featured: false
        },
        {
            title: "Introduction to Cybersecurity",
            organization: "Cisco Networking Academy",
            date: "Apr 2025",
            skills: ["Cybersecurity"],
            image: "/certifications/CertificateOfCyberSecurity.pdf",
            featured: false
        }
    ];

    return (
        <section id="resume" className="relative z-10 w-full min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.a
                        href={`${import.meta.env.BASE_URL}RESUME AKANKSHA 5th March.pdf`}
                        target="_blank"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-primary-purple hover:bg-primary-purple/80 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                    >
                        <Download size={20} />
                        Download CV
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Carousel (Left side) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full flex justify-center"
                    >
                        <PhotoCarousel />
                    </motion.div>

                    {/* Education Timeline (Right side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="pl-4 lg:pl-12"
                    >
                        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                            <span className="text-primary-purple">Education</span>
                        </h2>
                        <div className="space-y-8 border-l-2 border-primary-purple/30 ml-3 pl-8 relative">
                            {education.map((item, index) => (
                                <div key={index} className="relative group">
                                    <div className="absolute w-4 h-4 bg-primary-purple rounded-full -left-[41px] top-1 border-2 border-[#0a0416] group-hover:scale-125 transition-transform"></div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-purple transition-colors">{item.degree}</h3>
                                    <h4 className="text-lg text-gray-300 font-medium mt-1">{item.institution}</h4>
                                    <p className="text-primary-purple/80 font-semibold text-sm mt-2">{item.year} | Score: {item.score}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Achievements (Below Education & Carousel) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-32 w-full"
                >
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                            <span className="text-primary-purple">Achievements</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Milestones and awards earned throughout my academic and professional journey.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {achievements.map((achieve, index) => (
                            <AchievementCard key={index} achievement={achieve} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* New Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 w-full"
                >
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                            <span className="text-primary-purple">Certifications</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Professional Certifications validating my skills in Software Development, Web Technologies, and Computer Science.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {certificationsData.map((cert, index) => (
                            <div key={index} className={`${cert.featured ? 'md:col-span-2 lg:col-span-1 border border-primary-purple/30 rounded-2xl' : ''}`}>
                                <CertificateCard cert={cert} />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Resume;
