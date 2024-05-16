import HorizontalPresentation from 'components/ui/horizontalPresentation'
import Section from 'components/ui/section'

 export default function Component() {
   return (
     <>
       <Section
        title='Revolutionizing the Supermarket Experience'
        text='Discover how our connected supermarket harnesses advanced technologies like robots, RFID, LiFi, and VLC to create a seamless and efficient shopping experience.'
        imgSrc='/placeholder.svg'
        flexDirection={false}
       />
       
       <HorizontalPresentation/>
       
       <Section
       title='Experience the Future of Supermarkets'
       text='Our connected supermarket harnesses the power of cutting-edge technologies to create a seamless and efficient shopping experience.'
       btnValueBlack='Learn More'
       btnValueWhite='schedule a tour'
       flexDirection={false}
       />
     </>
   )
 }
 
 