import { Card } from "./card";



export default function GridSection(){
    return (
        <section className="w-full py-12 md:py-24 lg:py-8">
            <div className="container px-0">
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            <Card>
                    <article className="relative w-full h-full p-4 md:p-8">
                        <div className="flex items-center justify-between gap-2">
                            <div className="text-xs text-zinc-100">
                                TEST
                            </div>
                            <span className="flex items-center gap-1 text-xs text-zinc-500"></span>
                        </div>

                        <h2
                            id="featured-post"
                            className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                        >
                            TEST
                        </h2>
                        <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                TEST
                        </p>
                    </article>
            </Card>

            <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0  ">
                    <Card className="p-4 md:p-8">

                            <p>
                                Le Magasin Connecté a pour mission de fournir un environnement d'apprentissage pratique et innovant pour les étudiants, tout en promouvant les énergies renouvelables et en soutenant la communauté étudiante. Voici nos principaux objectifs
                            </p>
                    </Card>
                    <Card className="p-4 md:p-8">
                        <div>
                            <h1>test</h1>
                            <p>                                Le Magasin Connecté a pour mission de fournir un environnement d'apprentissage pratique et innovant pour les étudiants, tout en promouvant les énergies renouvelables et en soutenant la communauté étudiante. Voici nos principaux objectifs
                            </p>
                        </div>
                    </Card>
            </div>

        </div>
                </div>
        </section>
    )
}