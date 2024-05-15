import React, { Children } from "react";
import { Button } from "./button";

export default function Section({
  btnValueBlack, btnValueWhite, blackLink, whiteLink, text, title, imgSrc, flexDirection, children
}: {
  btnValueBlack?: string,
  btnValueWhite?: string,
  blackLink?: string,
  whiteLink?: string,
  text?: string,
  title?: string,
  imgSrc: string,
  flexDirection: boolean,
  children?: React.ReactNode
}) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-8">
      <div className="container px-0">
        <div className={`grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px] ${flexDirection ? 'lg:grid-cols-[550px_1fr]' : ''}`}>
          <div className={`space-y-4 ${flexDirection ? 'lg:order-last' : 'lg:order-first'}`}>
            <div className="space-y-2">
              {title&&<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {title}
              </h1>}
              {text&&<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {text}
              </p>}
              {children}
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {btnValueBlack&&<a
                href={blackLink}
              >
                <Button variant="secondary">{btnValueBlack}</Button>
              </a>}
              {btnValueWhite&&<a
                href={whiteLink}
              >
                <Button>{btnValueWhite}</Button>
              </a>}
            </div>
          </div>
          <img
            alt="Histoire de l'entreprise"
            className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full ${flexDirection ? 'lg:order-first' : 'lg:order-last'}`}
            height="310"
            src={imgSrc}
            width="550"
          />
        </div>
      </div>
    </section>
  )
}
