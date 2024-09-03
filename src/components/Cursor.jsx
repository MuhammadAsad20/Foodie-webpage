import React, { useEffect, useState } from 'react';
import '.././App.css'; // Ensure this file includes the advanced styles

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorType, setCursorType] = useState('default'); // 'default', 'link', 'button'

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = (e) => {
            if (e.target.tagName === 'A') {
                setCursorType('link');
            } else if (e.target.tagName === 'BUTTON') {
                setCursorType('button');
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', updateCursorPosition);
        window.addEventListener('mouseover', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            window.removeEventListener('mouseover', handleMouseEnter);
        };
    }, []);

    return (
        <div
            className={`custom-cursor custom-cursor--${cursorType}`}
            style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
            }}
        />
    );
};

export default CustomCursor;
