import React, { Suspense } from 'react'
import { Environment, Lightformer } from '@react-three/drei'

const StudioLights = () => {
  return (
    <group name="lights">
      <Suspense fallback={null}>
        {/* Environment provides prefiltered lighting via HDRI or lightformers */}
        <Environment resolution={256}>
          <group>
            {/* NOTE: `form="rect"` (not "react") */}
            <Lightformer
              form="rect"
              intensity={10}
              rotation={[0, 0, 0]}
              position={[-10, 5, -5]}
              scale={10}
              rotation-y={Math.PI/2}
            />
            <Lightformer
              form="rect"
              intensity={10}
              rotation={[0, 0, 0]}
              position={[10,0,1]}
              scale={10}
              rotation-y={Math.PI/2}
            />
          </group>
        </Environment>
        <spotLight position={[-2,10,5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI*0.2}/>
        
        <spotLight position={[0,-25,10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI*0.2}/>
        
        <spotLight position={[0,15,5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI*1}/>
      </Suspense>
    </group>
  )
}

export default StudioLights
