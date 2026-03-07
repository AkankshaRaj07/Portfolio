import React from "react";
import { motion } from "framer-motion";
import Badges from "./Badges";
import Github from "./Github";
import Leetcode from "./Leetcode";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";
import awardImg from "../../assets/award.jpg";

function About() {
    return (
        <section id="about" className="relative z-10 w-full min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* About Me Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">

                    <motion.div
                        className="w-full md:w-3/5 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">
                            Know Who <strong className="text-primary-purple">I'm</strong>
                        </h1>
                        <div className="text-lg text-gray-300 leading-relaxed max-w-2xl space-y-4">
                            <p>
                                Hi Everyone, I am <span className="text-primary-purple font-semibold">Akanksha Kumari</span>
                                .
                            </p>
                            <p>
                                I am currently pursuing my BTech in Computer Science from Lakshmi Narain College of Technology Excellence (Expected Graduation 2027).
                            </p>
                            <p>
                                I am passionate about building full-stack applications, solving complex algorithms, and integrating AI functionality into intuitive user interfaces. I've actively solved over 400+ problems across LeetCode, GFG, and Codeforces, and love participating in hackathons to push the limits of my skills.
                            </p>
                            <br />
                            <p className="text-primary-purple italic font-serif opacity-80 border-l-4 border-primary-purple pl-4">
                                "Striving to build elegant and functional software that makes an impact."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Tilt className="w-full max-w-sm">
                            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden glass flex items-center justify-center p-2 transform rotate-3 border-2 border-primary-purple/30 shadow-[0_0_40px_rgba(199,112,240,0.4)]">
                                <img
                                    src={awardImg}
                                    alt="First Prize Award LNCT"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </Tilt>
                    </motion.div>
                </div>

                {/* Skillset Sections */}
                <div className="mt-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Professional <strong className="text-primary-purple">Skillset</strong>
                    </h1>
                    <Techstack />
                </div>

                <div className="mt-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        <strong className="text-primary-purple">Tools</strong> I use
                    </h1>
                    <Toolstack />
                </div>

                {/* Activity Calendars */}
                <div className="mt-20 flex flex-col gap-16 justify-center items-center w-full">
                    <div className="w-full">
                        <Github />
                    </div>
                    <div className="w-full">
                        <Leetcode />
                    </div>
                </div>

                {/* Achivement Badges */}
                <Badges />

            </div>
        </section>
    );
}

export default About;
