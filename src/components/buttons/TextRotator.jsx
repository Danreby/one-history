import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const TextRotator = forwardRef(
  ({
    groups = [],
    letterDelay = 50,
    transitionDuration = 500,
    showControls = true,
    mobileBreakpoint = 768,
  }, ref) => {
    const [index, setIndex] = useState(0);
    const [visibleText, setVisibleText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [animClass, setAnimClass] = useState("");
    const controlsRef = useRef(null);
    const extrasRef = useRef(null);

    const containerRef = useRef(null);
    const draggingRef = useRef(false);
    const startXRef = useRef(0);
    const lastXRef = useRef(0);
    const pointerIdRef = useRef(null);
    const [dragOffset, setDragOffset] = useState(0);

    const typingTimerRef = useRef(null);
    const transitionTimerRef = useRef(null);
    const mountedRef = useRef(true);

    const [isMobile, setIsMobile] = useState(
      typeof window !== "undefined" ? window.innerWidth <= mobileBreakpoint : false
    );

    useImperativeHandle(
      ref,
      () => ({
        next: () => goToIndex(index + 1, "next"),
        prev: () => goToIndex(index - 1, "prev"),
        goTo: (i) => goToIndex(i, i > index ? "next" : "prev"),
      }),
      [index, groups]
    );

    useEffect(() => {
      mountedRef.current = true;
      if (groups.length > 0) startTyping(index);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= mobileBreakpoint);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        mountedRef.current = false;
        clearAllTimers();
        window.removeEventListener("resize", handleResize);
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

      setAnimClass((prev) => prev.includes("fade-in") ? prev : "fade-in-right");

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

    function goToIndex(nextIndex, dir = "next") {
      if (isTyping) return; 

      clearAllTimers();

      if (dir === "next") {
        setAnimClass("fade-out-left");
      } else {
        setAnimClass("fade-out-right");
      }

      transitionTimerRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        const idx =
          ((nextIndex % groups.length) + groups.length) % groups.length;
        setIndex(idx);

        if (dir === "next") {
          setAnimClass("fade-in-right");
        } else {
          setAnimClass("fade-in-left");
        }

        startTyping(idx);

        setDragOffset(0);
      }, transitionDuration);
    }

    const handleNext = () => goToIndex(index + 1, "next");
    const handlePrev = () => goToIndex(index - 1, "prev");

    function onPointerDown(e) {
      if (!isMobile) return;
      if (isTyping) return; 
      if (e.button && e.button !== 0) return;
      const target = e.currentTarget;
      try {
        target.setPointerCapture(e.pointerId);
        pointerIdRef.current = e.pointerId;
      } catch (err) {}
      draggingRef.current = true;
      startXRef.current = e.clientX;
      lastXRef.current = e.clientX;
      setDragOffset(0);
    }

    function onPointerMove(e) {
      if (!isMobile) return;
      if (!draggingRef.current) return;
      if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;
      const currentX = e.clientX;
      lastXRef.current = currentX;
      const delta = currentX - startXRef.current;
      setDragOffset(delta);
    }

    function endPointerDrag(e) {
      if (!isMobile) return;
      if (!draggingRef.current) return;
      draggingRef.current = false;
      const totalDelta = lastXRef.current - startXRef.current;
      const threshold = 60;
      if (Math.abs(totalDelta) >= threshold) {
        if (totalDelta < 0) {
          goToIndex(index + 1, "next");
        } else {
          goToIndex(index - 1, "prev");
        }
      } else {
        setDragOffset(0);
      }
      try {
        if (pointerIdRef.current !== null) e.currentTarget.releasePointerCapture(pointerIdRef.current);
      } catch (err) {}
      pointerIdRef.current = null;
    }

    function onPointerCancel(e) {
      if (!isMobile) return;
      draggingRef.current = false;
      setDragOffset(0);
      try {
        if (pointerIdRef.current !== null) e.currentTarget.releasePointerCapture(pointerIdRef.current);
      } catch (err) {}
      pointerIdRef.current = null;
    }

    const currentGroup = groups[index] ?? {};
    const extras = currentGroup.extras ?? null;

    return (
      <div
        ref={containerRef}
        className="w-full max-w-3xl mx-auto text-center text-rotator-draggable"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointerDrag}
        onPointerCancel={onPointerCancel}
      >
        <div
          className={`text-4xl font-bold font-mono text-rotator-placeholder ${animClass}`}
          style={{
            animationDuration: `${transitionDuration}ms`,
            transform: `translateX(${dragOffset}px)`,
            transition: draggingRef.current ? "none" : `transform ${transitionDuration}ms ease`,
          }}
        >
          <span>{visibleText}</span>
          <span className="ml-1 animate-blink">|</span>
        </div>

        <div
          ref={extrasRef}
          className="mt-4 flex items-center justify-center"
          aria-hidden={isTyping}
          style={{
            transform: `translateX(${dragOffset * 0.3}px)`,
            transition: draggingRef.current ? "none" : `transform ${transitionDuration}ms ease`,
          }}
        >
          {extras ? <div className="max-w-full">{extras}</div> : null}
        </div>

        {showControls && (
          <div
            ref={controlsRef}
            className="mt-6 flex items-center justify-center gap-8"
            style={{
              transform: `translateX(${dragOffset * 0.25}px)`,
              transition: draggingRef.current ? "none" : `transform ${transitionDuration}ms ease`,
            }}
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
