import React from "react";
import { Button } from "./button";
import { Card } from "./card";
import Paragraph from "./paragraph";
import Title from "./title";

export default function Section({
  btnValueBlack, btnValueWhite, blackLink, whiteLink, text, title, imgSrc, flexDirection, children
}: {
  btnValueBlack?: string,
  btnValueWhite?: string,
  blackLink?: string,
  whiteLink?: string,
  text?: string,
  title?: string,
  imgSrc?: string,
  flexDirection: boolean,
  children?: React.ReactNode
}) {
  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-gray-100 dark:bg-gray-800 md:px-6 ">
      <Card>
        {/* <div className="container px-4 md:px-6 lg:px-8"> */}
          <div className={`grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px] overflow-hidden rounded-lg border bg-background p-4 md:p-12 lg:p-20 md:shadow-xl ${flexDirection ? 'lg:grid-cols-[550px_1fr]' : ''}`}>
            {imgSrc &&
              <img
                alt="Histoire de l'entreprise"
                className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full ${flexDirection ? 'lg:order-first' : 'lg:order-last'}`}
                height="310"
                src={imgSrc}
                width="550"
              />}
            <div className={`space-y-4 ${flexDirection ? 'lg:order-last' : 'lg:order-first'}`}>
              <div className="space-y-2">
                {title && <Title variant='secondary'>
                  {title}
                </Title>}
                {text && <Paragraph variant="secondary">
                  {text}
                </Paragraph>}
                {children}
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {btnValueBlack && <a
                  href={blackLink}
                >
                  <Button variant="secondary">{btnValueBlack}</Button>
                </a>}
                {btnValueWhite && <a
                  href={whiteLink}
                >
                  <Button>{btnValueWhite}</Button>
                </a>}
              </div>
            </div>
          </div>
        {/* </div> */}
      </Card>
    </section>
  )
}
