import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({}) => {

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right uppercase">
              Ola
          </h1>
        </div>
      </RevealOnScroll>
    </section>
  );
}