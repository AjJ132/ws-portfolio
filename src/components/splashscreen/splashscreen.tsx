'use client';

import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStage(1), 2000),
            setTimeout(() => setStage(2), 2250),
            setTimeout(() => setStage(3), 2500),
            setTimeout(() => setStage(4), 2600),
            setTimeout(() => {
                setStage(5);
                onComplete();
            }, 3100),
        ];

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [onComplete]);

    if (stage === 5) {
        return null;
    }

    return (
        <div className={`fixed inset-0 flex flex-row gap-4 items-center justify-center bg-primary z-50 transition-opacity duration-1000 ease-out
            ${stage === 4 ? 'opacity-0' : 'opacity-100'}`}>
            <h2 className={`text-secondary text-2xl font-light transition-opacity duration-250 ease-out
                ${stage >= 1 ? 'opacity-0' : 'opacity-100'}`}>
                AJ Johnson
            </h2>
            <h2 className={`text-secondary text-2xl font-light transition-opacity duration-250 ease-out
                ${stage >= 3 ? 'opacity-0' : 'opacity-100'}`}>
                |
            </h2>
            <h1 className={`text-secondary text-2xl font-medium transition-opacity duration-250 ease-out
                ${stage >= 2 ? 'opacity-0' : 'opacity-100'}`}>
                SWE Student
            </h1>
        </div>
    );
};

export default SplashScreen;