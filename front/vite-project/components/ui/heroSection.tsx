/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZCs5UVxFVav
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 import { Button } from "components/ui/button"
 import { Link } from "@remix-run/react"
import Title from "./title"
import Paragraph from "./paragraph"
 
 export default function HeroSection() {
   return (
     <section className="flex h-screen w-full items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
       <div className="container px-4 md:px-6">
         <div className="flex flex-col items-center justify-center space-y-4 text-center">
           <div className="space-y-2">
             <Title>
                Unlock the Power of AI-Driven Insights
             </Title>
             <Paragraph variant="secondary">
               Our cutting-edge analytics platform empowers you to make data-driven decisions that drive your business
               forward. Uncover hidden opportunities and optimize your strategies with ease.
             </Paragraph>
           </div>
           <div className="w-full max-w-sm space-y-2">
             <div className="grid grid-cols-2 gap-2">
               <Button variant="outline">
                 <BarChartIcon className="mr-2 h-4 w-4" />
                 Analytics
               </Button>
               <Button variant="outline">
                 <PieChartIcon className="mr-2 h-4 w-4" />
                 Insights
               </Button>
             </div>
             <Paragraph variant="tertiary">
               Explore our powerful analytics and insights tools to take your business to the next level.
               <Link className="underline underline-offset-2" to="#">
                 Learn More
               </Link>
             </Paragraph>
           </div>
         </div>
       </div>
     </section>
   )
 }
 
 function BarChartIcon(props) {
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
       <line x1="12" x2="12" y1="20" y2="10" />
       <line x1="18" x2="18" y1="20" y2="4" />
       <line x1="6" x2="6" y1="20" y2="16" />
     </svg>
   )
 }
 
 
 function PieChartIcon(props) {
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
       <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
       <path d="M22 12A10 10 0 0 0 12 2v10z" />
     </svg>
   )
 }