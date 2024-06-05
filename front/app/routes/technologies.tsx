
import { Link } from '@remix-run/react'
import HorizontalPresentation from 'components/ui/horizontalPresentation'
import Section from 'components/ui/section'

export default function Component() {
  return (
    <>
      <div className="space-y-8">
        <Section
          title='Technologies du Magasin Connecté 4.0'
          text="Le Magasin Connecté 4.0 est une plateforme unique qui intègre diverses technologies avancées pour offrir un environnement d'apprentissage pratique et innovant. Situé sur le campus de l'IUT de St Jérôme à Marseille, ce projet permet aux étudiants de se familiariser avec les dernières innovations technologiques et de les déployer dans un cadre réel."
          flexDirection={false}
          imgSrc="./ledPanel.webp"
        />

        <HorizontalPresentation />

        <Section
          title='Venez Expérimenter le Futur des Supermarché'
          text="Ces technologies sont non seulement étudiées mais aussi mises en œuvre par les étudiants dans le cadre de leurs projets pédagogiques, leur offrant une expérience pratique inestimable. Nous vous invitons à venir découvrir le Magasin Connecté 4.0, où innovation et apprentissage se rencontrent pour façonner l'avenir des technologies et des énergies renouvelables."
          btnValueBlack='Nous rendre visite'
          btnValueWhite='Efficacité des Panneaux Solaires'
          blackLink='/presentation'
          whiteLink='/solarPanelDashboard'
          flexDirection={false}
          imgSrc="./venezNousVoir.webp"
        />
      </div>
    </>
  )
}

