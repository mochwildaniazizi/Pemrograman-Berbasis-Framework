'use client';

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="bg-gray-800 text-white px-4 py-2 rounded shadow-md hover:bg-gray-700 transition">
            Current Theme: {theme} (Click to toggle)
        </button>
    )
}