import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingLaptop() {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
            <group ref={groupRef} scale={1.2}>
                {/* Laptop base */}
                <mesh position={[0, -0.1, 0]} rotation={[-0.1, 0, 0]}>
                    <boxGeometry args={[2.2, 0.08, 1.5]} />
                    <meshStandardMaterial color="#1a1d30" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Keyboard surface */}
                <mesh position={[0, -0.05, 0.05]} rotation={[-0.1, 0, 0]}>
                    <boxGeometry args={[2, 0.02, 1.2]} />
                    <meshStandardMaterial color="#252840" metalness={0.5} roughness={0.4} />
                </mesh>

                {/* Screen */}
                <mesh position={[0, 0.75, -0.7]} rotation={[0.25, 0, 0]}>
                    <boxGeometry args={[2.1, 1.4, 0.05]} />
                    <meshStandardMaterial color="#1a1d30" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Screen display */}
                <mesh position={[0, 0.75, -0.67]} rotation={[0.25, 0, 0]}>
                    <planeGeometry args={[1.9, 1.2]} />
                    <meshStandardMaterial
                        color="#0D6EFD"
                        emissive="#0D6EFD"
                        emissiveIntensity={0.3}
                        metalness={0.1}
                        roughness={0.5}
                    />
                </mesh>

                {/* Code lines on screen */}
                {[0.35, 0.15, -0.05, -0.25].map((y, i) => (
                    <mesh key={i} position={[-0.3 + i * 0.1, 0.75 + y * 0.85, -0.65]} rotation={[0.25, 0, 0]}>
                        <planeGeometry args={[0.8 + Math.sin(i * 2) * 0.4, 0.06]} />
                        <meshStandardMaterial
                            color="#151827"
                            transparent
                            opacity={0.6}
                        />
                    </mesh>
                ))}
            </group>
        </Float>
    );
}

function OrbitingSphere({ radius, speed, size, color, yOffset }) {
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime * speed;
        ref.current.position.x = Math.cos(t) * radius;
        ref.current.position.z = Math.sin(t) * radius;
        ref.current.position.y = yOffset + Math.sin(t * 2) * 0.15;
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[size, 16, 16]} />
            <MeshDistortMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                distort={0.3}
                speed={2}
                roughness={0.2}
                metalness={0.8}
            />
        </mesh>
    );
}

function FloatingCube({ position, size, speed }) {
    const ref = useRef();

    useFrame((state) => {
        ref.current.rotation.x = state.clock.elapsedTime * speed;
        ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    });

    return (
        <mesh ref={ref} position={position}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial
                color="#0D6EFD"
                emissive="#0D6EFD"
                emissiveIntensity={0.2}
                transparent
                opacity={0.4}
                wireframe
            />
        </mesh>
    );
}

function HeroScene() {
    return (
        <div className="hero__3d-canvas">
            <Canvas
                camera={{ position: [0, 1, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
                <pointLight position={[-3, 2, 2]} intensity={1} color="#0D6EFD" />
                <pointLight position={[3, -1, -2]} intensity={0.5} color="#3d8bfd" />

                {/* Main laptop */}
                <FloatingLaptop />

                {/* Orbiting elements */}
                <OrbitingSphere radius={2.5} speed={0.4} size={0.12} color="#0D6EFD" yOffset={0.8} />
                <OrbitingSphere radius={2} speed={0.6} size={0.08} color="#22c55e" yOffset={-0.3} />
                <OrbitingSphere radius={3} speed={0.3} size={0.1} color="#3d8bfd" yOffset={0.2} />

                {/* Floating cubes */}
                <FloatingCube position={[-2, 0.5, -1]} size={0.25} speed={0.5} />
                <FloatingCube position={[2.2, -0.3, 0.5]} size={0.18} speed={0.7} />
                <FloatingCube position={[1.5, 1.2, -0.8]} size={0.2} speed={0.4} />

                {/* Subtle orbit controls */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 1.8}
                    minPolarAngle={Math.PI / 3}
                />
            </Canvas>
        </div>
    );
}

export default HeroScene;
