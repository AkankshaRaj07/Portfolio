import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: {
                            value: 120,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            enable: true,
                            color: "#ffffff",
                            opacity: 0.2,
                            distance: 150,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default Particle;
