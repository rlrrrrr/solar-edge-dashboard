import { useRef, useState, useEffect } from "react";
import { Card } from "./card";

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.play();
                    setIsPlaying(true);
                } else {
                    ref.current.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <Card className="w-full py-16 md:py-24 bg-black dark:bg-black relative">
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover filter blur-lg brightness-50"
                    loop
                    muted
                    autoPlay
                    playsInline
                >
                    <source src="MC.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-8">
                        Vu sur Made in Marseille !
                    </h1>
                    <div className="bg-black dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <div className="w-full max-w-[75vh] max-h-[75vh]">
                            <video
                                className="w-full h-full object-cover rounded-lg"
                                ref={ref}
                                controls
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            >
                                <source src="MC.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
