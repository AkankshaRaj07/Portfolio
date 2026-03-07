import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Medal, Award, Zap } from 'lucide-react';

const icons = [Trophy, Star, Target, Medal, Award, Zap];

const AchievementCard = ({ achievement, index }) => {
    // Pick a random icon based on index or text matching (keeping it simple with modulo for visual variety)
    const Icon = icons[index % icons.length];

    // Parse out potential titles versus descriptions if they have a split character like '—' or '–'
    const parts = achievement.split(/ — | – | - /);
    const title = parts[0];
    const description = parts.slice(1).join(' - ');

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative bg-gray-900 border border-gray-800 hover:border-primary-purple shadow-lg hover:shadow-primary-purple/20 transition-all flex items-center gap-4 rounded-full px-6 py-4 max-w-2xl cursor-default"
        >
            <div className="p-3 bg-gray-800 rounded-full text-primary-purple group-hover:bg-primary-purple group-hover:text-white transition-colors shrink-0">
                <Icon size={24} />
            </div>

            <div className="flex flex-col">
                <h3 className="text-md sm:text-lg font-bold text-white leading-snug">{title}</h3>
                {description && (
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default AchievementCard;
