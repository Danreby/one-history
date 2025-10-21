import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const TextRotator = forwardRef(
  ({ groups = [], letterDelay = 50, transitionDuration = 500, showControls = true }, ref) => {
    const [index, setIndex] = useState(0);
    const [visibleText, setVisibleText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [animClass, setAnimClass] = useState(""); 
    const controlsRef = useRef(null);
    const extrasRef = useRef(null);
    const typingTimerRef = useRef(null);
    const transitionTimerRef = useRef(null);
    const mountedRef = useRef(true);

    useImperativeHandle(
      ref,
      () => ({
        next: () => goToIndex(index + 1),
        prev: () => goToIndex(index - 1),
        goTo: (i) => goToIndex(i),
      }),
      [index, groups]
    );

    useEffect(() => {
      mountedRef.current = true;
      if (groups.length > 0) {
        startTyping(index);
      } else {
        setVisibleText("");
      }
      return () => {
        mountedRef.current = false;
        clearAllTimers();
      };
    }, []);

    useEffect(() => {
      if (index >= groups.length && groups.length > 0) {
        const idx = 0;
        setIndex(idx);
        startTyping(idx);
      }
    }, [groups]);

    function clearAllTimers() {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
    }

    function startTyping(i) {
      clearAllTimers();
      const group = groups[i] ?? { text: "" };
      const phrase = group.text ?? "";
      setVisibleText("");
      setIsTyping(true);

      if (controlsRef.current) {
        controlsRef.current.classList.remove("buttons-fade-in");
        controlsRef.current.classList.add("buttons-hidden");
      }
      if (extrasRef.current) {
        extrasRef.current.classList.remove("buttons-fade-in");
        extrasRef.current.classList.add("buttons-hidden");
      }

      setAnimClass("fade-in-right");

      let pos = 0;
      typingTimerRef.current = setInterval(() => {
        if (!mountedRef.current) return clearAllTimers();
        if (pos <= phrase.length) {
          setVisibleText(phrase.substring(0, pos));
          pos++;
        } else {
          clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          setIsTyping(false);

          if (controlsRef.current) {
            controlsRef.current.classList.remove("buttons-hidden");
            controlsRef.current.offsetWidth;
            controlsRef.current.classList.add("buttons-fade-in");
          }
          if (extrasRef.current) {
            extrasRef.current.classList.remove("buttons-hidden");
            extrasRef.current.offsetWidth;
            extrasRef.current.classList.add("buttons-fade-in");
          }
        }
      }, letterDelay);
    }

    function goToIndex(nextIndex) {
      if (isTyping) return; 

      clearAllTimers();
      setAnimClass("fade-out-left");

      transitionTimerRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        const idx =
          ((nextIndex % groups.length) + groups.length) % groups.length;
        setIndex(idx);
        startTyping(idx);
      }, transitionDuration);
    }

    const handleNext = () => goToIndex(index + 1);
    const handlePrev = () => goToIndex(index - 1);

    const currentGroup = groups[index] ?? {};
    const extras = currentGroup.extras ?? null;

    return (
      <div className="w-full max-w-3xl mx-auto text-center">
        <div
          className={`text-4xl font-bold font-mono text-rotator-placeholder ${animClass}`}
          style={{ animationDuration: `${transitionDuration}ms` }}
        >
          <span>{visibleText}</span>
          <span className="ml-1 animate-blink">|</span>
        </div>

        <div
          ref={extrasRef}
          className="mt-4 flex items-center justify-center"
          aria-hidden={isTyping}
        >
          {extras ? <div className="max-w-full">{extras}</div> : null}
        </div>

        {showControls && (
          <div
            ref={controlsRef}
            className="mt-6 flex items-center justify-center gap-8"
          >
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
