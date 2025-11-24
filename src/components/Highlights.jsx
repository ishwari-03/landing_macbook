// src/components/Highlights.jsx
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
        once: true,
      },
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 0.9,
      ease: "power1.inOut",
    });
  }, [isMobile]);

  return (
    <section id="highlights" className="highlights-shell">
      <div className="highlights-intro">
        <h2>There’s never been a better time to upgrade.</h2>
        <h3>Here’s what you get with the new MacBook Pro.</h3>
      </div>

      <div className="masonry">
        <div className="column left-column">
          <div className="highlight-card big-card" >

  {/* Background image */}
  <img 
    src="/highlight-bg.png"
    alt="MacBook performance"
    className="card-photo" style={{ borderRadius: "26px" }}
  />

  {/* Content at bottom */}
  <div className="card-content" style={{ 
    position: "absolute",
    bottom: "24px",
    left: "24px",
    zIndex: 2 
  }}>
    <img 
      src="/laptop.png" 
      alt="Laptop icon" 
      className="card-icon" 
      style={{ marginBottom: "12px" }} 
    />

    <p>
      Fly through demanding tasks<br />
      up to 9.8x faster.
    </p>
  </div>

</div>

          <div className="card compact">
            <img src="/sun.png" alt="Sun" />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>

        <div className="column right-column">
          <div className="card apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>

          <div className="card compact">
            <img src="/battery.png" alt="Battery" />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours </span>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;