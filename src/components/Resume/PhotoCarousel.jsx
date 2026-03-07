import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const defaultImages = [
    '/slide1.jpeg',
    '/slide2.jpeg',
    '/slide3.jpeg'
];

function PhotoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % defaultImages.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + defaultImages.length) % defaultImages.length);
    };

    // Auto-swipe every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        },
        exit: (dir) => ({
            x: dir < 0 ? 1000 : -1000,
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };

    return (
        <div className="relative w-full  max-w-md mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-primary-purple/30 group mt-12 bg-gray-900/50 flex flex-col justify-center">

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                    key={currentIndex}
                    src={defaultImages[currentIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    alt={`Highlight ${currentIndex + 1}`}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />

            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-primary-purple transition-colors backdrop-blur-sm"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-primary-purple transition-colors backdrop-blur-sm"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {defaultImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-primary-purple w-6' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default PhotoCarousel;
