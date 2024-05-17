import Paragraph from "./paragraph"
import Title from "./title"
export default function HorizontalPresentation() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4 xl:grid-cols-4">
                <div className="grid gap-4">
                    <BotIcon className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>Robotic Assistance</Title>
                    <Paragraph variant="tertiary">
                        Our advanced robots navigate the aisles, restocking shelves and assisting customers with their shopping
                        needs.
                    </Paragraph>
                </div>
                <div className="grid gap-4">
                    <RadarIcon className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>RFID Technology</Title>
                    <Paragraph variant="tertiary">
                        RFID tags on our products allow for seamless inventory management and checkout, reducing wait times and
                        improving efficiency.
                    </Paragraph>
                </div>
                <div className="grid gap-4">
                    <WifiIcon className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>LiFi Connectivity</Title>
                    <Paragraph variant="tertiary">
                        Our store utilizes LiFi technology, providing high-speed, secure internet access throughout the
                        supermarket.
                    </Paragraph>
                </div>
                <div className="grid gap-4">
                    <VideoIcon className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>VLC Navigation</Title>
                    <Paragraph variant="tertiary">
                        Visible Light Communication (VLC) guides customers through the store, providing real-time information and
                        personalized recommendations.
                    </Paragraph>
                </div>
            </div>
        </section>
    )
}

function BotIcon(props) {
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
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}


function RadarIcon(props) {
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
            <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
            <path d="M4 6h.01" />
            <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
            <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
            <path d="M12 18h.01" />
            <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
            <circle cx="12" cy="12" r="2" />
            <path d="m13.41 10.59 5.66-5.66" />
        </svg>
    )
}


function VideoIcon(props) {
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
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    )
}


function WifiIcon(props) {
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
            <path d="M12 20h.01" />
            <path d="M2 8.82a15 15 0 0 1 20 0" />
            <path d="M5 12.859a10 10 0 0 1 14 0" />
            <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        </svg>
    )
}