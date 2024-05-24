import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRss, faTint, faCloud, faVolumeUp, faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import Paragraph from "./paragraph";
import Title from "./title";

export default function HorizontalPresentation() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-6 xl:grid-cols-6">
                <div className="grid gap-4">
                    <FontAwesomeIcon icon={faLightbulb} className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>Internet par la Lumière (LiFi)</Title>
                    <Paragraph variant="tertiary">
                        Utilise la lumière pour transmettre des données, offrant une alternative rapide et sécurisée au Wi-Fi traditionnel.
                    </Paragraph>
                </div>
                <div className="grid gap-4">
                    <FontAwesomeIcon icon={faRss} className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>Bornes RFID</Title>
                    <Paragraph variant="tertiary">
                        Facilitent la gestion et le suivi des stocks grâce à l'identification par radiofréquence, améliorant ainsi l'efficacité logistique.
                    </Paragraph>
                </div>
                <div className="grid gap-4">
                    <FontAwesomeIcon icon={faTint} className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>Diffuseur de Parfum</Title>
                    <Paragraph variant="tertiary">
                        Crée une ambiance olfactive agréable dans le magasin, enrichissant l'expérience des visiteurs.
                    </Paragraph>
                </div>
                <div className="grid gap-4">
                    <FontAwesomeIcon icon={faCloud} className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>Capteur de CO2</Title>
                    <Paragraph variant="tertiary">
                        Surveille la qualité de l'air en temps réel, assurant un environnement sain et sécurisé pour les étudiants et les visiteurs.
                    </Paragraph>
                </div>
                <div className="grid gap-4">
                    <FontAwesomeIcon icon={faVolumeUp} className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>Dalles Acoustiques</Title>
                    <Paragraph variant="tertiary">
                        Améliorent l'acoustique de l'espace, réduisant les nuisances sonores et créant un environnement propice à la concentration et à l'apprentissage.
                    </Paragraph>
                </div>
                <div className="grid gap-4">
                    <FontAwesomeIcon icon={faSolarPanel} className="h-12 w-12 text-primary" />
                    <Title variant='tertiary'>Panneaux Solaires</Title>
                    <Paragraph variant="tertiary">
                        Fournissent de l'énergie renouvelable au magasin, contribuant à l'autonomie énergétique et à la sensibilisation aux énergies renouvelables.
                    </Paragraph>
                </div>
            </div>
        </section>
    );
}
