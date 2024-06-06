import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { MetaFunction } from "@remix-run/node";
import PartnerSection from "components/ui/partnerSection";
import Section from "components/ui/section";
import HeroSection from "components/ui/heroSection";
import GridSection from "../../components/ui/gridSection";
import VideoSection from "../../components/ui/videoSection";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem('hasRedirected', 'false');
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  useEffect(() => {
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    const hasRedirected = localStorage.getItem('hasRedirected') === 'true';

    if (isPWA && !hasRedirected) {
      localStorage.setItem('hasRedirected', 'true');
      navigate('/solarPanelDashboard');
    }
  }, [navigate]);

  return (
    <>
      <HeroSection title={"Magasin Connecté 4.0"} presentation={"Un projet Aix-Marseille Université"} paragraph={"test"} ></HeroSection>
      <VideoSection />
      <GridSection />
      <Section
        text="Le Magasin Connecté a pour mission de fournir un environnement d'apprentissage pratique et innovant pour les étudiants, tout en promouvant les énergies renouvelables et en soutenant la communauté étudiante. Voici nos principaux objectifs :"
        title="Nos Objectifs"
        imgSrc="./frontImage.webp"
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
        imgSrc="./venezNousVoir.webp"
        flexDirection={false}
      />
    </>
  );
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
  );
}
