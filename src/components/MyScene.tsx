import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";

const MyScene = () => {

    let size = []

    for (let i; size.length > 50; i!++) {
        size.push(Math.random());
    }

    return (
        <div className="h-full w-screen flex justify-center items-center">
            <Canvas camera={{position: [-2, 3, -2], fov: 10 }} className="flex w-screen">
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
                <Sparkles 
                    size={100}
                    speed={0.1}
                    color="pink"
                    opacity={0.05}
                />
            </Canvas>
        </div>
    )
}

export default MyScene;