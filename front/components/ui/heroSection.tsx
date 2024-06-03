import { cn } from "lib/utils";
import { Button } from "components/ui/button";
import { Link } from "@remix-run/react";
import Title from "./title";
import Paragraph from "./paragraph";
import { Card } from "components/ui/card";
import AnimatedGridPattern from "../magicui/animated-grid-pattern";

export default function HeroSection({ title, presentation, paragraph }) {
    return (
        <Card className="relative flex h-screen w-full items-center justify-center overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container relative z-10 px-4 md:px-6">
                <div style={{backgroundImage: 'radial-gradient(circle, white, rgba(255,255,255,0) 70%)'}} className="flex flex-col h-screen items-center justify-center space-y-4 p-10 text-center">
                    <div className="space-y-2">
                        <Title>
                            {title}
                        </Title>
                        <Paragraph variant="secondary">
                            {presentation}
                        </Paragraph>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                            <Link to="presentation">
                                <Button variant="outline">
                                    <BarChartIcon className="mr-2 h-4 w-4" />
                                    Présentation
                                </Button>
                            </Link>
                            <Link to="/technologies">
                                <Button variant="outline">
                                    <PieChartIcon className="mr-2 h-4 w-4" />
                                    Technologies
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                    <AnimatedGridPattern
                        numSquares={20}
                        maxOpacity={0.25}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "absolute inset-0 h-full w-full skew-y-12",
                            "mask-image-[radial-gradient(200px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                        )}
                    />
                </div>
            </div>
        </Card>
    );
}

function BarChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
    );
}

function PieChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
    );
}
