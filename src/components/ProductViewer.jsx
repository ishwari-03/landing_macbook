import React from 'react'
import useMacBookStore from '../store'
import { clsx } from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import MacBookModel14 from './models/Macbook-14';
import StudioLights from './three/StudioLights';

import { useMediaQuery } from 'react-responsive';
import ModelSwitcher from './three/Modelswitcher';

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacBookStore();

  const isMobile = useMediaQuery({query:'(max-width:1024px)'});

  return (
    <section id='product-viewer' className="flex flex-col items-center mt-10">

      <h2 className="text-white font-semibold text-3xl">Take a closer look.</h2>
      <p className='text-white text-lg mb-6'>Render Canvas</p>


      <div className="w-full h-[500px] flex justify-center mt-4">
        <Canvas id='canvas' camera={{position:[0,2,5], fov:50, near:0.1,far:100}}>
            <StudioLights />
            
            <ModelSwitcher scale={isMobile?scale-0.03:scale}/>
        </Canvas>
      </div>



      <div className="controls flex flex-col items-center">

        <p className="info text-sm text-white/80">
          MacBook Pro | Available in 14" & 16" 
        </p>

        <div className="flex-center gap-5 mt-6">

          {/* Color selection */}
          <div className="color-control">
            <div
              onClick={() => setColor('#adb5bd')}
              className={clsx(
                'bg-neutral-300',
                color === '#adb5bd' && 'active'
              )}
            ></div>

            <div
              onClick={() => setColor('#000000')}
              className={clsx(
                'bg-neutral-900',
                color === '#000000' && 'active'
              )}
            ></div>
          </div>

          {/* Size selection */}
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06 ? 'bg-white text-black':'bg-transparent text-white'
              )}
            ><p>14"</p></div>
            
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08 ? 'bg-white text-black':'bg-transparent text-white'
              )}
            ><p>16"</p></div>
          </div>

        </div>
      </div>

      

    </section>
  )
}

export default ProductViewer;
