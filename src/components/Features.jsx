import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import { features } from "../constants/index.js";
import clsx from "clsx";
import { Suspense } from "react";
import { Html, PresentationControls } from "@react-three/drei";
import MacbookModel from "./models/Macbook.jsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Features = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useMacbookStore();

  // TEXT BOX ANIMATIONS (one-by-one fade-in)
  useGSAP(() => {
    gsap.set(".box", { opacity: 0, y: 30 });

    gsap.to(".box", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#features",
        start: "top 70%",
      },
    });
  });

  return (
    <section id="features" className="relative bg-black pb-40">

      <h2 className="text-center text-white text-5xl font-semibold mb-20">
        See it all in a new light.
      </h2>

      {/* 🟦 3D MODEL WITH CURSOR ROTATION */}
      <div className="w-full h-[600px] flex justify-center items-center">
        <Canvas id="f-canvas" camera={{ position: [0, 1.5, 5], fov: 38 }}>
          <ambientLight intensity={0.6} />
          <StudioLights />

          <Suspense fallback={<Html><p className="text-white">Loading…</p></Html>}>
            <PresentationControls
              global
              cursor={true}
              speed={1}
              zoom={1}
              polar={[ -0.4, 0.3 ]}
              azimuth={[-1, 1]}
              config={{ mass: 1, tension: 170, friction: 26 }}
            >
              <MacbookModel scale={isMobile ? 0.08 : 0.12} position={[0, -1, 0]} />
            </PresentationControls>
          </Suspense>
        </Canvas>
      </div>

      {/* 🟨 TEXT HIGHLIGHT BOXES */}
      
    </section>
  );
};

export default Features;
