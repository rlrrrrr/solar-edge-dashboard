import Paragraph from "./paragraph";
import Title from "./title";
import { BorderBeam } from "../magicui/border-beam";
import { Card } from "./card";
import Section from "./section";

export default function PartnerSection() {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
        <div className="space-y-3">
          <Title variant="primary">Nos partenaires</Title>
          <Paragraph variant="secondary">
            Nous collaborons avec les meilleures entreprises pour offrir à nos clients des solutions complètes et
            innovantes.
          </Paragraph>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <a href="https://www.lopcommerce.com/" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/CO.webp"
              width="140"
            />
          </a>
          <a href="https://www.connectwave.fr/" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/connectWave.webp"
              width="140"
            />
          </a>
          <a href="https://dracula-technologies.com/" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/draculalight.webp"
              width="140"
            />
          </a>
          <a href="https://www.insiteo.com/" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/insiteo.png"
              width="140"
            />
          </a>
          <a href="https://www.eurofins.fr/" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/Eurofins_Scientific_logo.png"
              width="140"
            />
          </a>
          <a href="https://lucibel.com/" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/lucibelRetail.png"
              width="140"
            />
          </a>
          <a href="https://www.murati-merchandising.com/" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/Murati.webp"
              width="140"
            />
          </a>
          <a href="https://www.st.com/content/st_com/en.html" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/STM.webp"
              width="140"
            />
          </a>
          <a href="https://www.stid.com/fr/" target="_blank">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/STID.webp"
              width="140"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
