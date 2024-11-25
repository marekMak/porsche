'use client'

import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Environment} from '@react-three/drei';

const ViewCanvas = () => {
  return (
    <Canvas style={{
        position:'fixed',
        top:0,
        left:'50%',
        transform:'translateX(-50%)',
        overflow:'hidden',
        pointerEvents:'none',
        zIndex:30
        }}

        shadows
        dpr={[1,2]}
        camera={{
            fov:45
        }}>          
        <Environment files="/hdr/field.hdr" environmentIntensity={1}/>
          <ambientLight intensity={.5}/>
          <spotLight 
              intensity={3}
              position={[5, 5, 5]} 
              castShadow 
              shadow-mapSize={[2048, 2048]} 
              shadow-bias={-0.005}
              color="white" 
          />
          <Model/>        
    </Canvas>
  )
}

export default ViewCanvas