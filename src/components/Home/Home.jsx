import React from "react";
import { motion } from "framer-motion";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/Kitty.jpg";

function Home() {
    return (
        <section id="home" className="relative z-10 w-full min-h-[90vh] flex flex-col justify-center items-center py-20">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-3/5 text-center md:text-left space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Hi There! <span className="animate-wave inline-block origin-bottom-right">👋🏻</span>
                        </h1>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
                            I'm <strong className="text-primary-purple">Akanksha Kumari</strong>
                        </h1>

                        <div className="text-2xl md:text-3xl lg:text-4xl mt-8 h-16 md:h-20 flex items-center justify-center md:justify-start">
                            <Type />
                        </div>

                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mt-6 leading-relaxed">
                            I am a passionate BTech Computer Science student learning and building cool software.
                            I enjoy problem-solving, exploring new technologies, and crafting robust full-stack applications.
                        </p>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Tilt
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            transitionSpeed={1500}
                            scale={1.05}
                            className="w-full max-w-sm"
                        >
                            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                                <div className="absolute inset-0 bg-primary-purple/20 rounded-full blur-3xl animate-pulse"></div>
                                {/* Fallback avatar icon using lucide, but a photo works better. We use Github Avatar */}
                                <img
                                    src={myImg}
                                    alt="Avatar"
                                    className="rounded-full w-full h-full object-cover scale-100 border-4 border-primary-purple/30 shadow-[0_0_40px_rgba(199,112,240,0.4)] relative z-10"
                                />
                            </div>
                        </Tilt>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

export default Home;
