export default function ParagraphSection({ title, text }: { title: string, text: string }) {
    return(
    <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{title}</h1>
        <p className="text-gray-500 max-w-[700px] text-lg">
            {text}
        </p>
    </div>)
}