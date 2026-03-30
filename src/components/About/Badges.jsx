import React from "react";
import { motion } from "framer-motion";
import badgesData from "./leetcode_badges.json";
import gssocImg from "../../assets/badges/gssoc.jpg";

function Badges() {
    const badges = [
        ...badgesData.data.matchedUser.badges,
        {
            displayName: "GSSoC Contributor Badge",
            icon: gssocImg
        }
    ];

    return (
        <motion.div
            id="badges"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center justify-center pt-20 pb-12 w-full"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                My <strong className="text-primary-purple">Achievements</strong>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-5xl">
                {badges.map((badge, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="glass p-4 rounded-xl shadow-lg border border-primary-purple/20 flex flex-col items-center justify-center w-28 h-28 md:w-40 md:h-40 interactive"
                    >
                        <img
                            src={badge.icon?.startsWith('/static/') ? `https://leetcode.com${badge.icon}` : badge.icon}
                            alt={badge.displayName}
                            className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(199,112,240,0.5)]"
                            onError={(e) => {
                                e.currentTarget.parentElement.setAttribute("data-broken", "true");
                            }}
                        />
                        <div className="fallback-placeholder hidden w-full h-full items-center justify-center text-center text-xs text-primary-purple/80 font-semibold p-2">
                            {badge.displayName}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Badges;
