import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { performanceImages, performanceImgPositions } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Performance1 = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      /* ---------------------------------------------------
          TEXT ANIMATION — NOW WORKS ON MOBILE ALSO
      ----------------------------------------------------*/
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
          },
        }
      );

      /* ---------------------------------------------------
          IMAGE ANIMATIONS — DESKTOP ONLY
      ----------------------------------------------------*/
      if (!isMobile) {
        const tl = gsap.timeline({
          defaults: { duration: 1.5, ease: "power2.out" },
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            end: "bottom top",
            scrub: 1,
          },
        });

        performanceImgPositions.forEach((item) => {
          if (item.id === "p5") return; // skip p5

          const selector = `.${item.id}`;
          const vars = {};

          if (typeof item.left === "number") vars.left = `${item.left}%`;
          if (typeof item.right === "number") vars.right = `${item.right}%`;
          if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;
          if (item.transform) vars.transform = item.transform;

          tl.fromTo(
            selector,
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, ...vars },
            0
          );
        });
      }
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section
      id="performance"
      ref={sectionRef}
      className="relative bg-black "
    >
      {/* FIXED HEADING — CENTERED */}
      <h2 className="text-center text-white font-semibold text-3xl md:text-5xl max-w-3xl mx-auto px-4 mb-12 md:mb-16">
        Next-level graphics performance. Game on.
      </h2>

      {/* IMAGES */}
      <div className="wrapper relative min-h-[600px] max-w-[1400px] mx-auto">
        {performanceImages.map(({ id, src }, index) => (
          <img key={index} src={src} className={`${id} absolute`} alt={id} />
        ))}
      </div>

      {/* FIXED PARAGRAPH — CENTERED */}
      <div className="content max-w-3xl mx-auto px-4 mt-16 text-center">
        <p className="text-gray-300 text-lg leading-relaxed">
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster,{" "}
          <span className="text-white">
            so gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost for
          the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance1;
