import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Competitive Programmer",
                    "Full Stack Engineer",
                    "Tech Enthusiast"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                wrapperClassName: "text-primary-purple font-semibold",
            }}
        />
    );
}

export default Type;
