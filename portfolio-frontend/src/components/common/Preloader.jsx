import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../css/preloader.css";

const NAME = "YASH";

const Preloader = ({ onFinish }) => {
  const lettersWrapRef = useRef(null);
  const barRef = useRef(null);
  const percentRef = useRef(null);
  const panelTopRef = useRef(null);
  const panelBottomRef = useRef(null);

  useEffect(() => {
    // Lock scroll while the intro plays
    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.body.style.overflow = "";
      onFinish();
      return;
    }

    const letters = lettersWrapRef.current.querySelectorAll("span");
    const counter = { val: 0 };

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.body.style.overflow = "";
        onFinish();
      },
    });

    tl.set(letters, { yPercent: 130, opacity: 0 })
      .to(letters, {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: "power4.out",
      })
      .to(
        counter,
        {
          val: 100,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            if (percentRef.current) {
              percentRef.current.textContent = `${Math.round(counter.val)}%`;
            }
            if (barRef.current) {
              barRef.current.style.width = `${counter.val}%`;
            }
          },
        },
        "-=0.25"
      )
      .to(letters, { opacity: 0.35, duration: 0.3 }, ">-0.1")
      .to(
        panelTopRef.current,
        { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
        "+=0.15"
      )
      .to(
        panelBottomRef.current,
        { yPercent: 100, duration: 0.9, ease: "power4.inOut" },
        "<"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-panel preloader-panel-top" ref={panelTopRef} />
      <div className="preloader-panel preloader-panel-bottom" ref={panelBottomRef} />

      <div className="preloader-content">
        <div className="preloader-letters" ref={lettersWrapRef}>
          {NAME.split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>

        <div className="preloader-bar-track">
          <div className="preloader-bar" ref={barRef}></div>
        </div>

        <span className="preloader-percent" ref={percentRef}>0%</span>
      </div>
    </div>
  );
};

export default Preloader;
