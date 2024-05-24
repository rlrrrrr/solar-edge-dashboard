
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "components/ui/table"
import OpeningTimeTable from "components/ui/openingTimeTable"
import ParagraphSection from "components/ui/paragraphSection"
import Section from "components/ui/section"

export default function Component() {
    return (
        <>
            <div className="space-y-8">
                <ParagraphSection
                    text={"L'épicerie solidaire du Magasin Connecté fonctionne grâce à une association étudiante indépendante qui propose des produits essentiels à des prix réduits pour soutenir les étudiants dans le besoin."}
                    title={'Présentation du Magasin Connecté 4.0'}
                    />
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