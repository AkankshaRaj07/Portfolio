import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer className="w-full glass py-6 mt-16 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 space-y-4 md:space-y-0 text-sm">

                    <div className="text-center md:text-left">
                        <p>Designed and Developed by Akanksha Kumari</p>
                    </div>

                    <div className="text-center text-primary-purple font-semibold tracking-wider">
                        <p>Copyright © {year} Akr.</p>
                    </div>

                    <div className="flex justify-center md:justify-end space-x-6">
                        <a
                            href="https://github.com/AkankshaRaj07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-primary-purple transition-colors transform hover:-translate-y-1 duration-300"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akanksha-kumari-325b07248/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-primary-purple transition-colors transform hover:-translate-y-1 duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:akanksha9123@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-primary-purple transition-colors transform hover:-translate-y-1 duration-300"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
