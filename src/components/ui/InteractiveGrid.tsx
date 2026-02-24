"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, motion, useMotionTemplate } from "framer-motion";

export function InteractiveGrid() {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if (ref.current) {
                const { left, top } = ref.current.getBoundingClientRect();
                mouseX.set(clientX - left);
                mouseY.set(clientY - top);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const maskImage = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, black, transparent)`;

    return (
        <div ref={ref} dir="ltr" className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
            {/* The base grid */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                }}
            />

            {/* The interactive spotlight mask to reveal a brighter grid */}
            <motion.div
                className="absolute inset-0 opacity-40 mix-blend-screen"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(200,168,86,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200,168,86,0.3) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    maskImage,
                    WebkitMaskImage: maskImage,
                }}
            />

            {/* A soft glowing spotlight orbit directly on the background */}
            <motion.div
                className="absolute inset-0 opacity-[0.25] mix-blend-screen"
                style={{
                    background: `radial-gradient(circle 300px at 0 0, rgba(200,168,86,1), transparent)`,
                    x: springX,
                    y: springY,
                    transform: "translate(-50%, -50%)",
                    width: "200%",
                    height: "200%",
                }}
            />
        </div>
    );
}
