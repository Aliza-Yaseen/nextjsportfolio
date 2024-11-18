
'use client';
import { useState, useEffect } from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiConvertio } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import Navbar from '../components/navbar';

const skills = [
    { icon: <FaHtml5 size={40} color="#E34F26" /> },
    { icon: <DiCss3 size={40} color="#1572B6" /> },
    { icon: <IoLogoJavascript size={40} color="#F7DF1E" /> },
    { icon: <SiConvertio size={40} color="#3D8B3D" /> },
    { icon: <RiTailwindCssFill size={40} color="#06B6D4" /> },
    { icon: <RiNextjsFill size={40} color="#000000" /> },
    { icon: <FaGithub size={40} color="#181717" /> },
    { icon: <SiVercel size={40} color="#000000" /> },
    { icon: <SiTypescript size={40} color="#3178C6" /> },
    { icon: <SiFirebase size={40} color="#FFCA28" /> },
];

type Position = {
    x: number;
    y: number;
    angle: number;
    speed: number;
};

export default function ResponsiveSkillSection() {
    const [positions, setPositions] = useState<Position[]>(skills.map(() => ({
        x: 0,
        y: 0,
        angle: Math.random() * 360,
        speed: Math.random() * 2 + 0.5
    })));
    const [hovered, setHovered] = useState(false);

    const radius = 100;

    const getIconPosition = (angle: number, index: number) => {
        const totalAngle = angle + (index * (360 / skills.length));
        const x = Math.cos(totalAngle * (Math.PI / 180)) * radius;
        const y = Math.sin(totalAngle * (Math.PI / 180)) * radius;
        return { x, y };
    };

    useEffect(() => {
        let intervalId: number | undefined;

        if (!hovered) {
            intervalId = window.setInterval(() => {
                setPositions((prevPositions) =>
                    prevPositions.map((position, index) => {
                        const newAngle = position.angle + position.speed;
                        const { x, y } = getIconPosition(newAngle, index);
                        return {
                            ...position,
                            angle: newAngle,
                            x,
                            y,
                        };
                    })
                );
            }, 16);
        } else if (intervalId) {
            clearInterval(intervalId);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [hovered]);

    const handleHover = () => setHovered(true);
    const resetHoverState = () => setHovered(false);

    return (
        <div>
            <Navbar />
            <section className="flex flex-wrap w-full py-12">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg mb-4">
                    As a passionate and results-driven web developer, I specialize in building seamless, high-performance web applications using modern technologies like HTML5, CSS3, JavaScript, and cutting-edge frameworks such as Next.js and Tailwind CSS. I am highly skilled in converting designs from PSD to responsive, functional websites that deliver exceptional user experiences across all devices. My expertise extends to utilizing tools such as GitHub for version control, Vercel for cloud deployments, and Firebase for backend support. With a strong foundation in TypeScript and real-time data management, I strive to create web solutions that are not only aesthetically compelling but also highly efficient, scalable, and maintainable.
                    </p>
                </div>
                <div
                    className="w-full md:w-1/2 p-4 flex justify-center items-center"
                    onMouseEnter={handleHover}
                    onMouseLeave={resetHoverState}
                >
                    <div
                        className="relative w-72 h-72 md:w-80 md:h-80 flex justify-center items-center"
                        style={{
                            perspective: '1000px',
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '50%',
                            padding: '15px',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <div className="absolute w-full h-full flex justify-center items-center">
                            {skills.map((skill, index) => {
                                const { x, y } = positions[index];
                                return (
                                    <div
                                        key={index}
                                        className="absolute flex justify-center items-center"
                                        style={{
                                            transform: `translate(${x}px, ${y}px)`,
                                            transition: hovered ? 'transform 0.3s ease-out' : 'none',
                                        }}
                                    >
                                        <span className="text-3xl md:text-4xl text-white">
                                            {skill.icon}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
