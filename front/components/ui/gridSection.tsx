import { Card } from "./card";

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
                            <p>
                                Le Magasin Connecté a pour mission de fournir un environnement d'apprentissage pratique et innovant pour les étudiants, tout en promouvant les énergies renouvelables et en soutenant la communauté étudiante. Voici nos principaux objectifs
                            </p>
                        </Card>
                        <Card className="p-4 md:p-8">
                            <div>
                                <h1>Test</h1>
                                <p>
                                    Le Magasin Connecté a pour mission de fournir un environnement d'apprentissage pratique et innovant pour les étudiants, tout en promouvant les énergies renouvelables et en soutenant la communauté étudiante. Voici nos principaux objectifs
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
