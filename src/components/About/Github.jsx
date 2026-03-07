import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

function Github() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center pb-12 w-full"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Days I <strong className="text-primary-purple">Code</strong>
            </h2>
            <div className="glass p-6 md:p-8 rounded-xl shadow-2xl overflow-x-auto max-w-full">
                <GitHubCalendar
                    username="AkankshaRaj07"
                    blockSize={15}
                    blockMargin={5}
                    color="#c770f0"
                    fontSize={16}
                />
            </div>
        </motion.div>
    );
}

export default Github;
