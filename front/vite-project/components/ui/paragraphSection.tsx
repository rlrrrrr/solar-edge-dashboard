import Title from "./title"
export default function ParagraphSection({ title, text }: { title: string, text: string }) {
    return(
    <div className="space-y-4">
        <Title variant='primary'>{title}</Title>
        <p className="text-gray-500 max-w-[700px] text-lg">
            {text}
        </p>
    </div>)
}