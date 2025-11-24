// src/components/Showcase.jsx
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: !isMobile, // no pinning on mobile
      },
    });

    tl.to(".mask-logo", {
      scale: isMobile ? 1.05 : 1.2,
      opacity: 1,
      duration: 1,
    }).to(".showcase-content", {
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, [isMobile]);

  return (
    <section id="showcase" className="relative bg-black overflow-hidden">
      {/* TOP VIDEO + MASK */}
      <div className="showcase-media">
        <div className="mask-wrapper">
          <video
            src="/videos/game.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="masked-video"
          />

          <img
            src="/mask-logo.svg"
            alt="Mask Logo"
            className="mask-logo"
          />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="showcase-content opacity-100 translate-y-10 ">
        <div className="showcase-wrapper">
          <div className="showcase-left">
            <h2 className="text-white font-semibold text-7xl mb-6">
              Rocket Chip.
            </h2>

            <div className="space-y-4 text-[#f5f5f7]">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon.
                </span>
                {" "}M4 powers a giant leap in performance and intelligence.
              </p>

              <p>
                With a breakthrough CPU, next-generation GPU, and a faster Neural Engine, 
                M4 is built for demanding workflows and extreme efficiency.
              </p>

              <p className="text-blue-500">
                Learn more about Apple Intelligence.
              </p>
            </div>
          </div>

          <div className="showcase-right space-y-10 text-[#f5f5f7] mt-10">
            <div>
              <p>Up to</p>
              <h3 className="text-white text-4xl font-semibold">4x faster</h3>
              <p>pro rendering performance than M2.</p>
            </div>

            <div>
              <p>Up to</p>
              <h3 className="text-white text-4xl font-semibold">1.5x faster</h3>
              <p>CPU performance than M2.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
