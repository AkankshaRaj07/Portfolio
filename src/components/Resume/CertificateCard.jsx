import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiFileText } from 'react-icons/fi';

const CertificateCard = ({ cert }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        if (cert.image) setIsModalOpen(true);
        else if (cert.link) window.open(cert.link, '_blank');
    };

    const isPdf = cert.image?.endsWith('.pdf');

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-gray-900 border ${cert.featured ? 'border-primary-purple shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'border-gray-800'} rounded-2xl overflow-hidden shadow-lg flex flex-col group h-full`}
            >
                {/* Thumbnail Header Area */}
                <div
                    className="h-32 bg-gray-800 relative cursor-pointer overflow-hidden flex items-center justify-center p-4 border-b border-gray-800"
                    onClick={openModal}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-10" />

                    {cert.image && !isPdf ? (
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                    ) : cert.image && isPdf ? (
                        <div className="w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none overflow-hidden relative">
                            {/* The object tag loads the PDF. pointer-events-none prevents scrolling/interacting in the thumbnail */}
                            <object
                                data={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                type="application/pdf"
                                className="w-[120%] h-[120%] absolute top-[-10%] left-[-10%]"
                            >
                                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                    <FiFileText className="text-4xl text-primary-purple opacity-50" />
                                </div>
                            </object>
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-gray-800 flex flex-col items-center justify-center group-hover:from-primary-purple/30 group-hover:to-gray-700 transition-colors">
                            <span className="text-primary-purple/40 font-bold text-4xl mb-2">{cert.organization[0]}</span>
                            <span className="text-gray-500 text-xs font-medium uppercase tracking-widest">Verified</span>
                        </div>
                    )}

                    <div className="absolute top-3 right-3 z-20 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                        <FiExternalLink className="text-white text-sm" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col relative z-20 bg-gray-900">
                    <div className="flex justify-between items-start mb-2 gap-4">
                        <h3 className="text-xl font-bold text-white leading-tight">{cert.title}</h3>
                        {cert.featured && (
                            <span className="bg-primary-purple/20 text-primary-purple text-xs font-bold px-2 py-1 rounded border border-primary-purple/30 whitespace-nowrap">
                                Featured
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-primary-purple font-semibold text-sm">{cert.organization}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="text-gray-400 text-sm whitespace-nowrap">{cert.date}</span>
                    </div>

                    {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800/50">
                            {cert.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-800/80 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-gray-700 hover:border-primary-purple/50 hover:text-white transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Modal for PDF/Image viewing */}
            <AnimatePresence>
                {isModalOpen && cert.image && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl max-h-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-800">
                                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 transition-colors"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            <div className="p-4 overflow-auto flex-1 flex justify-center items-center align-middle h-[70vh]">
                                {isPdf ? (
                                    <iframe
                                        src={`${cert.image}#toolbar=0`}
                                        className="w-full h-full rounded bg-white"
                                        title={cert.title}
                                    />
                                ) : (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="max-w-full max-h-full object-contain rounded"
                                    />
                                )}
                            </div>
                            <div className="p-4 border-t border-gray-800 flex justify-end">
                                <a
                                    href={cert.image}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-primary-purple hover:bg-primary-purple/80 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Open Full Screen
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CertificateCard;
