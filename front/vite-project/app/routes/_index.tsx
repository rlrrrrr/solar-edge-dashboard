import type { MetaFunction } from "@remix-run/node";
import PartnerSection from "components/ui/partnerSection";
import Section from "components/ui/section";
import HeroSection from "components/ui/heroSection";
import OpeningTimesSelector from "components/ui/selectOpeningTime";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Home() {
  return (
      <>
        <OpeningTimesSelector/>
        <HeroSection title={"Le Magasin Connecté 4.0"} paragraph={ "Une épicerie indépendante de l'IUT, gérée par une association d'étudiants pour les étudiants."} presentation={"une plateforme technologique de 150 m2 dédiée aux étudiants. "}/>
        <Section
            btnValueBlack="En savoir plus"
            btnValueWhite="Nous contacter"
            blackLink="/presentation"
            whiteLink="/contact"
            text="Un projet novateur situé sur le campus de l'IUT de St Jérôme à Marseille. Créé en 2021 grâce à un financement de plus de 300 000 € d'AMideX et à l'implication de cinq départements de l'IUT (TC, MP, GEII Salon, GEII Marseille et R&T), ce magasin est une plateforme technologique avant-gardiste de 150 m² dédiée aux étudiants. C'est un véritable laboratoire grandeur nature où les étudiants peuvent installer et étudier diverses technologies innovantes. Le projet phare du Magasin Connecté est le MEPOS (Magasin Connecté à Énergie Positive), visant à rendre la boutique autonome en énergie grâce à l'installation de panneaux solaires sur son toit. Ces panneaux permettront de collecter des données précieuses sur la production et la consommation d'énergie, contribuant ainsi à la recherche et à la sensibilisation aux énergies renouvelables. Le Magasin Connecté accueille également une épicerie solidaire, gérée par une association étudiante indépendante de l'IUT, qui offre des produits essentiels à des prix réduits pour soutenir les étudiants dans le besoin."
            title="Bienvenue au Magasin Connecté 4.0"
            imgSrc="https://images-ext-1.discordapp.net/external/VLQJbkqc9sUkkZdn5Hti6Qnzqt1kZlhcneq34gaZ3w4/%3Fq%3D80%26w%3D3087%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/images.unsplash.com/photo-1715622053361-4baf5ad2c51a?format=webp&width=376&height=565"
            flexDirection={true}
        />

        <Section
            text="Le Magasin Connecté a pour mission de fournir un environnement d'apprentissage pratique et innovant pour les étudiants, tout en promouvant les énergies renouvelables et en soutenant la communauté étudiante. Voici nos principaux objectifs :"
            title="Nos Objectifs"
            imgSrc="https://images-ext-1.discordapp.net/external/VLQJbkqc9sUkkZdn5Hti6Qnzqt1kZlhcneq34gaZ3w4/%3Fq%3D80%26w%3D3087%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/images.unsplash.com/photo-1715622053361-4baf5ad2c51a?format=webp&width=376&height=565"
            flexDirection={false}
        >
          <ul className="grid gap-2 py-4">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Offrir une plateforme technologique avant-gardiste pour l'expérimentation et l'étude des nouvelles technologies.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Encourager l'autonomie énergétique grâce à l'installation et au suivi de panneaux solaires.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Sensibiliser les étudiants et le public aux énergies renouvelables et à leur importance.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Gérer une épicerie solidaire fournissant des produits essentiels à des prix réduits pour soutenir les étudiants dans le besoin.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Créer un environnement de collaboration interdisciplinaire en impliquant plusieurs départements de l'IUT.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Promouvoir la recherche et l'innovation dans les domaines technologiques et énergétiques.
            </li>
          </ul>
        </Section>

        <PartnerSection />

        <Section
            btnValueBlack="Nous rendre visite"
            btnValueWhite="Nous contacter"
            blackLink="/presentation"
            whiteLink="/contact"
            text="Nous vous invitons chaleureusement à venir découvrir le Magasin Connecté sur le campus de l'IUT de St Jérôme à Marseille. Plongez dans un univers technologique avant-gardiste où innovation et durabilité se rencontrent. Explorez notre plateforme, interagissez avec nos installations high-tech, et découvrez comment nos étudiants façonnent l'avenir des technologies et des énergies renouvelables. Nous serons ravis de vous accueillir et de partager avec vous notre passion pour l'innovation et la durabilité."
            title="Venez Nous Rendre Visite"
            imgSrc="https://images-ext-1.discordapp.net/external/VLQJbkqc9sUkkZdn5Hti6Qnzqt1kZlhcneq34gaZ3w4/%3Fq%3D80%26w%3D3087%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/images.unsplash.com/photo-1715622053361-4baf5ad2c51a?format=webp&width=376&height=565"
            flexDirection={true}
        />

      </>
  )
}

function CheckIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
  )
}
