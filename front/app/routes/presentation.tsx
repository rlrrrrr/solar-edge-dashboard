
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "components/ui/table"
import OpeningTimeTable from "components/ui/openingTimeTable"
import ParagraphSection from "components/ui/paragraphSection"
import Section from "components/ui/section"

export default function Component() {
    return (
        <>
            <div className="space-y-8">
                <ParagraphSection
                    text={"Le Magasin Connecté, situé sur le campus de l'IUT de St Jérôme à Marseille, a été créé en 2021."}
                    title={'Présentation du Magasin Connecté 4.0'}
                    
                    />
                <Section
                    title={"C'est quoi le Magasin Connecté ?"}
                    text={"Le Magasin Connecté 4.0 est une plateforme technologique de 150 m² dédiée aux étudiants. Elle accueille plusieurs technologies : internet par la lumière (LiFi), des bornes RFID, un diffuseur de parfum, un capteur de CO2, des dalles acoustiques, etc. L'ensemble de ces technologies est étudié et installé par les étudiants de l'IUT à travers des projets. Cette plateforme technologique est une grande salle de TP où les étudiants peuvent déployer les technologies à l'échelle réelle."}
                    imgSrc="/ComoFonctionado.webp"                    flexDirection={true}
                />
                <OpeningTimeTable/>
            </div>
        </>
    )
}