import Paragraph from "./paragraph"
import Title from "./title"
export default function ParagraphSection({ title, text }: { title: string, text: string }) {
    return(
    <div className="space-y-4">
        <Title variant='primary'>{title}</Title>
        <Paragraph variant='secondary'>
            {text}
        </Paragraph>
    </div>)
}