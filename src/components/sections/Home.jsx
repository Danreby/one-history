import React, { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import TextRotator from "../common/buttons/TextRotator";

export const Home = () => {
  const rotatorRef = useRef(null);

  const groups = [
    { text: "Bem vindo ao meu site!" },
    { text: "Isso é um exemplo de rotator." },
    {
      text: "Aqui aparece uma imagem apenas nesta frase.",
      extras: (
        <img
          src="/one-history/img/linda_menina.png"
          alt="Linda Moça"
          className="w-40 h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: "Os botões somem enquanto escrevo." },
  ];


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <TextRotator
              ref={rotatorRef}
              groups={groups}
              letterDelay={100}
              transitionDuration={500}
              showControls={true}
              mobileBreakpoint={768}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
