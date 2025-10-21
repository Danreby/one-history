import React, { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import TextRotator from "../common/buttons/TextRotator";

export const Home = () => {
  const rotatorRef = useRef(null);

  const groups = [
    { text: "Oi..." },
    { text: "Nunca fiz algo do tipo, mas achei q seria uma boa ideia" },
    { text: "Pensei em fazer algo para te dizer o que eu sinto, nunca consigo achar as palavras certas kkkk" },
    { text: "E provavelmente vão faltar palavras aqui, quando se trata de você nem todas as palavras do mundo são suficientes" },
    { text: "Sempre que penso em você meu peito se enche de alegria... minha mente fica nas nuvens de tão avoado" },
    { text: "Meu coração sempre se aquece quando vejo uma foto sua... e quando te vejo pessoalmente só falta ele pular pela minha boca" },
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
              letterDelay={150}
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
