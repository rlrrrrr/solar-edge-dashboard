import OpeningTimeTable from "components/ui/openingTimeTable"
import ParagraphSection from "components/ui/paragraphSection"
import Section from "components/ui/section"

export default function Component() {
    return (
        <>
            <div className="space-y-8">
                <ParagraphSection text={"Notre outil est conçu pour vous simplifier la vie et vous aider à atteindre vos objectifs de manière efficace. Il vous permet de gérer vos tâches, de collaborer avec votre équipe et de suivre vos progrès en temps réel."} title={'Présentation de notre outil'} />
                <Section
                    title={"Comment ça fonctionne ?"}
                    text={"Notre outil est conçu pour être intuitif et facile à utiliser. Vous pouvez facilement ajouter des tâches, les organiser en projets et suivre leur avancement. Vous pouvez également inviter des membres de votre équipe à collaborer avec vous."}
                    imgSrc="https://images-ext-1.discordapp.net/external/VLQJbkqc9sUkkZdn5Hti6Qnzqt1kZlhcneq34gaZ3w4/%3Fq%3D80%26w%3D3087%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/images.unsplash.com/photo-1715622053361-4baf5ad2c51a?format=webp&width=376&height=565"
                    flexDirection={true}
                />
                <OpeningTimeTable/>
            </div>
        </>
    )
}