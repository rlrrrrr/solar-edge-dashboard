/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hTD9waXxTvG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "@remix-run/react";
import PartnerSection from "components/ui/partnerSection";
import Section from "components/ui/section";
import HeroSection from "components/ui/heroSection";
//<Section btnValueBlack="En savoir plus" btnValueWhite="Nous contacter" text="le texteeeeeuuuuuu" title="un titre"/>
export default function Component() {
  return (
    <>
      <HeroSection/>
      <Section
        btnValueBlack="En savoir plus"
        btnValueWhite="Nous contacter"
        blackLink="#"
        whiteLink="#"
        text="le texteeeeeuuuuuu"
        title="un titre"
        imgSrc="https://images-ext-1.discordapp.net/external/VLQJbkqc9sUkkZdn5Hti6Qnzqt1kZlhcneq34gaZ3w4/%3Fq%3D80%26w%3D3087%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/images.unsplash.com/photo-1715622053361-4baf5ad2c51a?format=webp&width=376&height=565"
        flexDirection={true}
      />

      <Section
        text="Notre produit se distingue par ses fonctionnalités avancées, sa facilité d'utilisation et son
            excellent support. Découvrez pourquoi nos clients nous font confiance."
        title="Nos caractéristiques"
        imgSrc="https://images-ext-1.discordapp.net/external/VLQJbkqc9sUkkZdn5Hti6Qnzqt1kZlhcneq34gaZ3w4/%3Fq%3D80%26w%3D3087%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/images.unsplash.com/photo-1715622053361-4baf5ad2c51a?format=webp&width=376&height=565"
        flexDirection={false}
      >
        <ul className="grid gap-2 py-4">
          <li>
            <CheckIcon className="mr-2 inline-block h-4 w-4" />
            Fonctionnalités avancées pour une expérience optimale
          </li>
          <li>
            <CheckIcon className="mr-2 inline-block h-4 w-4" />
            Interface intuitive et ergonomique
          </li>
          <li>
            <CheckIcon className="mr-2 inline-block h-4 w-4" />
            Support client réactif et de qualité
          </li>
        </ul>
      </Section>

      <PartnerSection />

      <Section
        btnValueBlack="En savoir plus"
        btnValueWhite="Nous contacter"
        blackLink="#"
        whiteLink="#"
        text="Fondée en 2010, notre entreprise a connu une croissance rapide grâce à notre engagement envers
        l'innovation et la qualité. Nous sommes fiers d'avoir aidé des milliers de clients à atteindre leurs
        objectifs."
        title="Découvrez notre entreprise"
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