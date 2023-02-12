import React, {useRef, useEffect} from 'react'
import * as THREE from 'three'

function MyFirstBlock() {
    const canvasRef = useRef()

    useEffect(() => {
        // 定義場景/舞台、相機、渲染器
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

        const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current})

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)

        // Mesh -- 定義幾何+材質 -> 加入場景
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({color: 0xff0000})
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        camera.position.z = 12

        renderer.render(scene, camera)

        // return () => {
        //     renderer.forceContextLoss()
        //     renderer.dispose()
        //     cube.geometry.dispose()
        //     cube.material.dispose()
        // }

    }, [])
  return (
    <canvas ref={canvasRef}/>
  )
}

export default MyFirstBlock