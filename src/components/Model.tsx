import { useGLTF } from "@react-three/drei"

type Props = {}
const Model = (props: Props) => {

    const {scene} = useGLTF('/scenePorsche.glb')

  return (
    <>
      <ambientLight 
        position={[5, 5, 5]} 
        intensity={1} 
        color="blue" 
    >
      </ambientLight>
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={2} 
        castShadow 
      />
      <primitive object={scene} scale={0.75} position={[0, 0, 0]} {...props} castShadow receiveShadow rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <meshStandardMaterial metalness={1} roughness={0.2}>
        </meshStandardMaterial>
      </primitive>

    </>
  )
}

export default Model