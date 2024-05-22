import Paragraph from "./paragraph"
import Title from "./title"

export default function PartnerSection(){
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <Title variant='primary'>Nos partenaires</Title>
            <Paragraph variant="secondary">
              Nous collaborons avec les meilleures entreprises pour offrir à nos clients des solutions complètes et
              innovantes.
            </Paragraph>
          </div>
          <div className="grid w-full grid-cols-2 lg:grid-cols-5 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
            <img
              alt="Logo partenaire"
              className="aspect-[2/1] col-span-2 lg:col-span-1 overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
          </div>
        </div>
      </section>
  )
}