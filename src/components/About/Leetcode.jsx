import React from "react";
import { motion } from "framer-motion";

function Leetcode() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center pb-12 w-full"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                <strong className="text-primary-purple">LeetCode</strong> Activity
            </h2>
            <div className="glass p-6 md:p-8 rounded-xl shadow-2xl flex justify-center w-full max-w-[1200px] overflow-hidden">
                {/* 
                  Using JacobLin's LeetCard generator for heatmap extension.
                  We requested a dark theme to match the portfolio aesthetic.
                  Added a specific wrapper to crop out the large top text.
                */}
                <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
                    <img
                        src="https://leetcard.jacoblin.cool/7IZevn81O2?theme=dark&font=Syne&ext=heatmap"
                        alt="LeetCode Heatmap"
                        className="absolute w-full h-auto object-cover drop-shadow-lg"
                        style={{ bottom: "-15px" }}
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Leetcode;
