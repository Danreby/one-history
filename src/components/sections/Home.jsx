import React, { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import TextRotator from "../buttons/TextRotator";

export const Home = () => {
  const rotatorRef = useRef(null);

  const phrases = [
    "Bem vindo ao meu site!",
    "Isso é um exemplo de rotator.",
    "Cada letra aparece uma a uma.",
    "Os botões somem enquanto escrevo."
  ];


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <TextRotator
              ref={rotatorRef}
              phrases={phrases}
              letterDelay={50}
              transitionDuration={500}
              showControls={true}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
