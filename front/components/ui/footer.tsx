import Paragraph from "./paragraph";
import { Link } from "@remix-run/react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20 py-8 px-4 md:px-6 flex-shrink-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link className="flex items-center gap-2" to="/">
            <img className=" h-[80px]" src="./ogoiut.svg" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-sm hover:text-gray-300 transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="text-sm hover:text-gray-300 transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>
      <Paragraph
        variant="tertiary"
        supClass="mt-5 container mx-auto flex"
      >
        Développé par le département informatique de l'IUT de Aix-en-Provence
      </Paragraph>
    </footer>
  );
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
  );
}
