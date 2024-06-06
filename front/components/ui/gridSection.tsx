import { Card } from "./card";
import Paragraph from "./paragraph";
import Title from "./title";

export default function GridSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-8">
            <div className="container px-0">
                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                    <Card>
                        <img className="rounded-xl h-full w-full object-cover" src="./frontImage2.webp" alt="Front Image" />
                    </Card>

                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
                        <Card className="p-4 md:p-8">
                            <Title variant="secondary">Magasin Connecté 4.0: Un Terrain d'Expérimentation Innovant</Title>
                            <Paragraph variant="secondary">
                            Lauréat d’un projet A*Midex Académie d’Excellence en 2018, le magasin connecté 4.0 a été créé pour repenser l’expérience client de demain et servir de terrain d’expérimentations. </Paragraph>
                        </Card>
                        <Card className="p-4 md:p-8">
                            <Paragraph variant="secondary">
                            Ce projet pluridisciplinaire a vu le jour grâce à l’implication de cinq départements de formation : Génie Electrique et Informatique Industrielle (Marseille et Salon de Provence), Mesures Physiques, Réseaux et Télécommunications, Technique de commercialisation (Marseille).                         </Paragraph>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
