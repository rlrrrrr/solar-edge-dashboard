import OpeningTimeTable from "components/ui/openingTimeTable"
import ParagraphSection from "components/ui/paragraphSection"
import Section from "components/ui/section"
import {useLoaderData} from "@remix-run/react";

export async function loader(){
    const response = await fetch(`${process.env.API_URL}/calendar`)
    if (!response.ok) {
        throw new Error('Failed to fetch data planner');
    }
    const result = await response.json()
    return result;
}

export default function Component() {
    const openingHours = useLoaderData<typeof loader>();
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
                <OpeningTimeTable openingHours={openingHours}/>
            </div>
        </>
    )
}