import {useRef,useState} from "react";



export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        if (nextIsPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-8 bg-gray-100 dark:bg-gray-800">
            <div className="container px-0">
                <button onClick={handleClick}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <video controls width="250"
                       ref={ref}
                       onPlay={() => setIsPlaying(true)}
                       onPause={() => setIsPlaying(false)}>
                    <source
                        src="MC.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </section>
    )
}