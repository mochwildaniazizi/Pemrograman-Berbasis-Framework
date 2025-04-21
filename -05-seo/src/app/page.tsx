"use client";

import Image from "next/image";
import { useState } from "react";
import { metadata } from "./metadata";

export default function About() {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = ((clientX - left) / width - 0.5) * 20;
        const y = ((clientY - top) / height - 0.5) * 20;
        setRotate({ x, y });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div className="mt-16 px-8 max-w-5xl mx-auto text-center p-10 rounded-lg shadow-lg">
            <header className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
                <div className="text-left max-w-lg">
                    <h1 className="font-bold text-4xl text-yellow-400">Mochamad Wildani Azizi</h1>
                    <p className="text-lg text-gray-700">Front End Engineer</p>
                    <p className="text-base mt-4 text-gray-600">
                        Saya adalah seorang Front End Engineer yang memiliki pengalaman dalam membangun antarmuka pengguna interaktif dan responsif. 
                        Saya berpengalaman dengan teknologi modern seperti React, Next.js, dan Tailwind CSS untuk menciptakan pengalaman pengguna yang optimal.
                    </p>
                    <button className="mt-6 bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600">
                        Lihat Portofolio
                    </button>
                </div>
                <div 
                    className="relative mt-6 md:mt-0 w-[250px] h-[250px] overflow-hidden rounded-full border-4 border-white shadow-lg"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `perspective(1000px) rotateY(${rotate.x}deg) rotateX(${rotate.y}deg)`,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <Image
                        src="/images/profile.jpg"
                        alt="Foto Profil"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
            </header>
            
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800">Keterampilan</h3>
                <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { name: "React.js", icon: "/icons/react.svg" },
                        { name: "Next.js", icon: "/icons/nextjs.svg" },
                        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
                        { name: "JavaScript", icon: "/icons/javascript.svg" },
                        { name: "TypeScript", icon: "/icons/typescript.svg" },
                        { name: "Figma", icon: "/icons/figma.svg" }
                    ].map(skill => (
                        <li key={skill.name} className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-center space-x-3">
                            <Image src={skill.icon} alt={skill.name} width={32} height={32} />
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800">Hubungi Saya</h3>
                <p className="text-gray-600 mt-2">Jika Anda ingin bekerja sama atau berdiskusi, silakan hubungi saya melalui:</p>
                <ul className="mt-3 flex justify-center space-x-6 text-orange-500">
                    <li>
                        <a href="mailto:mochwildaniazizi@gmail.com" className="hover:underline">Email</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mochwildaniazizi/" className="hover:underline">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/mochwildaniazizi" className="hover:underline">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
