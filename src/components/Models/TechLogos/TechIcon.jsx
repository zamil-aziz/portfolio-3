import { Environment, Float, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);
    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <Environment preset='city' />
            <Float>
                <group>
                    <primitive object={scene.scene} scale={model.scale} rotation={model.rotation} />
                </group>
            </Float>
        </Canvas>
    );
};
export default TechIcon;
