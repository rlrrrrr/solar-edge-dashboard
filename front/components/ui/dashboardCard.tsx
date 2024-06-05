import Title from "./title";

export default function DashboardCard({ title, children }: { title?: string, children?: React.ReactNode }) {
    return (
        <div className="rounded-lg bg-white p-6 shadow w-full">
            <Title variant="secondary">{title}</Title>
            {children}
        </div>
    )
}