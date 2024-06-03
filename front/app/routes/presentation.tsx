
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
                    imgSrc="/ComoFonctionado.webp"                    flexDirection={true}
                />
                <OpeningTimeTable/>
            </div>
        </>
    )
}