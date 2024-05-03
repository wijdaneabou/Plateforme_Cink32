import React, { useState, useEffect, useRef } from 'react';

const logos = [
    { id: 1, name: 'Relume', src: '/relume-logo.png' },
    { id: 2, name: 'VISA', src: '/visa_logo.png' },
    { id: 3, name: 'Microsoft', src: '/microsoft-logo.png' },
    { id: 4, name: 'Google', src: '/google-logo.png' },
    { id: 5, name: 'Oracle', src: '/oracle-logo.png' },
];

const Partners = () => {
    const [translateX, setTranslateX] = useState(0);
    const logosWidth = logos.length * 140; // Assume each logo block is 140px wide
    const intervalRef = useRef(null);

    const handleMouseEnter = (direction) => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setTranslateX(current => {
                let increment = direction === 'left' ? -20 : 20; // Adjust speed by changing 20 to a different value
                let newTranslate = current + increment;
                // Wrap-around logic corrected for both directions
                if (newTranslate > 0) newTranslate -= logosWidth; // If translating left beyond initial start, wrap around by subtracting width
                if (newTranslate < -logosWidth) newTranslate += logosWidth; // If translating right beyond set, wrap around by adding width
                return newTranslate;
            });
        }, 100); // This dictates the speed of scrolling
    };

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current);
    };

    const renderLogos = () => [...logos, ...logos].map((logo, index) => (
        <div key={`${logo.id}-${index}`} style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '24px', margin: '10px', padding: '10px' }}>
            <img src={logo.src} alt={logo.name} />
        </div>
    ));

    return (
        <div className="partners-content">
            
            <div className="carousel">
            <h6 className="title">Trusted by top companies around the globe</h6>
                <button className="carousel-control-left" onMouseEnter={() => handleMouseEnter('left')} onMouseLeave={handleMouseLeave}>
                    {'<'}
                </button>
                <div className="logos" style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.5s ease', width: `${2 * logosWidth}px` }}>
                    {renderLogos()}
                </div>
                <button className="carousel-control-right" onMouseEnter={() => handleMouseEnter('right')} onMouseLeave={handleMouseLeave}>
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Partners;
