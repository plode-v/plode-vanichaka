import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const MyScene = () => {

    const container = {
        hidden: {
          opacity: 1,
          scale: 1,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
          }
        }
      }

      const item = {
        hidden: {
          y: -50,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1
        }
      }

    let size = []

    for (let i; size.length > 50; i!++) {
        size.push(Math.random());
    }

    return (
        <motion.div className="h-full w-screen flex justify-center items-center" variants={item}>
            <Canvas camera={{position: [3, 0, -4], fov: 10 }} className="flex w-screen">
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
                <Sparkles 
                    size={100}
                    speed={0.1}
                    color="pink"
                    opacity={0.05}
                />
            </Canvas>
        </motion.div>
    )
}

export default MyScene;