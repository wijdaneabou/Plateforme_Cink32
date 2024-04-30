import React, { useState, useEffect } from 'react';

const logos = [
    { id: 1, name: 'Relume', color: 'white' },
    { id: 2, name: 'VISA', color: 'blue' },
    { id: 3, name: 'Microsoft', color: 'green' },
    { id: 4, name: 'Google', color: 'blue' },
    { id: 5, name: 'Oracle', color: 'red' },
];

const Partners = () => {
    const [current, setCurrent] = useState(0);
    const [isHoveringLeft, setIsHoveringLeft] = useState(false);
    const [isHoveringRight, setIsHoveringRight] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isHoveringLeft) {
            interval = setInterval(() => {
                setCurrent(current => (current === 0 ? logos.length - 1 : current - 1));
            }, 200);
        } else if (isHoveringRight) {
            interval = setInterval(() => {
                setCurrent(current => (current === logos.length - 1 ? 0 : current + 1));
            }, 200);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isHoveringLeft, isHoveringRight]);

    const renderLogos = () => {
        return logos.map((logo, index) => (
            <div key={logo.id} style={{ color: logo.color, display: index === current ? 'block' : 'none' }}>
                {logo.name}
            </div>
        ));
    };

    return (
        <div className="partners-content">
            <h6 className="title">Trusted by top companies around the globe</h6>
            <div className="carousel">
                <button
                    className="carousel-control-left"
                    onMouseEnter={() => setIsHoveringLeft(true)}
                    onMouseLeave={() => setIsHoveringLeft(false)}
                >
                    {'<'}
                </button>
                <div className="logos">
                    {renderLogos()}
                </div>
                <button
                    className="carousel-control-right"
                    onMouseEnter={() => setIsHoveringRight(true)}
                    onMouseLeave={() => setIsHoveringRight(false)}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Partners;
