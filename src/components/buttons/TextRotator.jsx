import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

/**
 * TextRotator
 * Props:
 *  - phrases: string[] (required)
 *  - letterDelay: number ms por letra (default 60)
 *  - transitionDuration: number ms para fade out/in (default 500)  <-- observe que as keyframes no index.css usam 500ms
 *  - showControls: boolean (default true)  // mostra as setas dentro do componente
 *
 * Exposes via ref: next(), prev(), goTo(index)
 */
const TextRotator = forwardRef(
  ({ phrases = [], letterDelay = 60, transitionDuration = 500, showControls = true }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleText, setVisibleText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [animClass, setAnimClass] = useState(""); // '' | 'fade-out-left' | 'fade-in-right'
    const buttonsRef = useRef(null);
    const typingTimerRef = useRef(null);
    const transitionTimerRef = useRef(null);
    const mountedRef = useRef(true);

    // tornar controlável externamente
    useImperativeHandle(
      ref,
      () => ({
        next: () => goToIndex(currentIndex + 1),
        prev: () => goToIndex(currentIndex - 1),
        goTo: (i) => goToIndex(i),
      }),
      [currentIndex, phrases]
    );

    useEffect(() => {
      mountedRef.current = true;
      if (phrases.length > 0) {
        startTyping(currentIndex);
      } else {
        setVisibleText("");
      }
      return () => {
        mountedRef.current = false;
        clearTimers();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      // se `phrases` mudar e o index estiver fora, ajuste
      if (currentIndex >= phrases.length && phrases.length > 0) {
        const idx = 0;
        setCurrentIndex(idx);
        startTyping(idx);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phrases]);

    function clearTimers() {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
    }

    function startTyping(index) {
      clearTimers();
      const phrase = phrases[index] ?? "";
      setVisibleText("");
      setIsTyping(true);

      // esconder botões imediatamente (classe no index.css)
      if (buttonsRef.current) {
        buttonsRef.current.classList.remove("buttons-fade-in");
        buttonsRef.current.classList.add("buttons-hidden");
      }

      // animação de entrada (classe no index.css)
      setAnimClass("fade-in-right");

      let i = 0;
      typingTimerRef.current = setInterval(() => {
        if (!mountedRef.current) return clearTimers();
        if (i <= phrase.length) {
          setVisibleText(phrase.substring(0, i));
          i++;
        } else {
          // terminou digitação
          clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          setIsTyping(false);

          // mostrar botões com fade-in
          if (buttonsRef.current) {
            buttonsRef.current.classList.remove("buttons-hidden");
            // forçar reflow para reiniciar animação
            // eslint-disable-next-line no-unused-expressions
            buttonsRef.current.offsetWidth;
            buttonsRef.current.classList.add("buttons-fade-in");
          }
        }
      }, letterDelay);
    }

    function goToIndex(nextIndex) {
      if (isTyping) return; // bloquear enquanto digita

      clearTimers();
      setAnimClass("fade-out-left");

      // esperar a animação de saída (transitionDuration) antes de trocar
      transitionTimerRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        const idx = ((nextIndex % phrases.length) + phrases.length) % phrases.length;
        setCurrentIndex(idx);
        startTyping(idx);
      }, transitionDuration);
    }

    const handleNext = () => goToIndex(currentIndex + 1);
    const handlePrev = () => goToIndex(currentIndex - 1);

    return (
      <div className="w-full max-w-3xl mx-auto text-center">
        <div className={`text-4xl font-bold font-mono text-rotator-placeholder ${animClass}`}>
          <span>{visibleText}</span>
          <span className="ml-1 animate-blink">|</span>
        </div>

        {showControls && (
          <div ref={buttonsRef} className="mt-6 flex items-center justify-center gap-8">
            <button
              onClick={handlePrev}
              disabled={isTyping}
              aria-label="Anterior"
              className="text-gray-400 font-bold text-2xl leading-none transition"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              disabled={isTyping}
              aria-label="Próxima"
              className="text-gray-400 font-bold text-2xl leading-none transition"
            >
              →
            </button>
          </div>
        )}
      </div>
    );
  }
);

export default TextRotator;
