import React, {useRef, useState} from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls, Stars } from '@react-three/drei'

function MyBox(props) {
    const ref = useRef()

    // hover/ click 事件
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return (
        <mesh {...props} 
            ref={ref} 
            scale={clicked? 1.5: 1} 
            onClick={()=> setClicked(!clicked)} 
            onPointerOver={() => setHovered(true)} 
            onPointerOut={() => setHovered(false)} 
            >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function Test1() {
    return (
        <div style={{height: '100vh', width: '100vw', backgroundColor: 'black'}}>
            <Canvas>
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
                {/* background */}
                <Stars/>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                <pointLight position={[-10, -10, -10]}/>
                {/* box */}
                <MyBox position={[-1.2, 0, 0]}/>
                <MyBox position={[1.2, 0, 0]}/>
            </Canvas>

        </div>
    )
}