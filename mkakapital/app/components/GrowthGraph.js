'use client';

import { useEffect, useState, useRef } from 'react';

export default function GrowthGraph() {
    const [isVisible, setIsVisible] = useState(false);
    const graphRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (graphRef.current) {
            observer.observe(graphRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const data = [
        { year: '2017', height: '20%', label: 'Start' },
        { year: '2019', height: '35%', label: 'Expansion' },
        { year: '2021', height: '55%', label: 'Partnerships' },
        { year: '2023', height: '75%', label: 'Innovation' },
        { year: '2025', height: '100%', label: 'Future' },
    ];

    return (
        <div ref={graphRef} className="mt-8 h-64 w-full flex justify-between gap-2 sm:gap-4">
            {data.map((bar, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 group w-full h-full">
                    <div className="w-full bg-white/5 rounded-t-xl relative flex-1 flex items-end overflow-hidden group-hover:bg-white/10 transition-colors">
                        <div
                            className="w-full bg-gradient-to-t from-primary-red to-red-400 rounded-t-xl relative transition-all duration-[1500ms] ease-out group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                            style={{
                                height: isVisible ? bar.height : '0%',
                                transitionDelay: `${idx * 200}ms`
                            }}
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/50"></div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-bold text-white">{bar.year}</p>
                        <p className="text-[10px] text-gray-500 uppercase hidden sm:block">{bar.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
