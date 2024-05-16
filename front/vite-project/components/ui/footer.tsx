import Paragraph from "./paragraph"


 export default function Footer() {
   return (
     <footer className="mt-10 bg-gray-900 text-gray-400 py-8 px-4 md:px-6">
       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
         <div className="flex items-center mb-4 md:mb-0">
           <MountainIcon className="h-6 w-6 text-gray-400 mr-2" />
           <span className="font-semibold text-gray-300">Acme Inc</span>
         </div>
         <div className="flex items-center space-x-4">
           <Paragraph variant="tertiary">© 2024 Acme Inc. All rights reserved.</Paragraph>
           <a className="text-sm hover:text-gray-300 transition-colors" href="#">
             Privacy Policy
           </a>
           <a className="text-sm hover:text-gray-300 transition-colors" href="#">
             Terms of Service
           </a>
         </div>
       </div>
     </footer>
   )
 }
 
 function MountainIcon(props) {
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
       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
     </svg>
   )
 }