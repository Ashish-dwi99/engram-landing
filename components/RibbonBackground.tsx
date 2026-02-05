
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Ribbon = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  const shaderArgs = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color('#ff2aa6') }, // Hot magenta
        uColorB: { value: new THREE.Color('#6a22ff') }, // Electric violet
        uColorC: { value: new THREE.Color('#2c7bff') }, // Vivid blue
        uColorD: { value: new THREE.Color('#ff8a2b') }, // Bright orange
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform float uTime;

        mat2 rotate2d(float angle) {
          return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        }

        void main() {
          vUv = uv;
          float p = uv.x;

          // --- PATH CALCULATION ---
          float t = mix(-1.0, 1.0, p);

          float width = 60.0;
          float x = t * width;

          float base = mix(-16.0, 20.0, smoothstep(-1.0, 1.0, t));
          float arch = sin((t + 1.0) * 1.4) * 10.0;
          float y = base + arch;

          vec2 path = vec2(x, y);

          // --- DIAGONAL TILT ---
          path = rotate2d(radians(-10.0)) * path;

          // --- POSITIONING ---
          vec3 spine = vec3(path.x + 8.0, path.y + 10.0, 0.0);

          // Gentle liquid-like flow animation
          float waveFreq = 2.1;
          float waveAmp = 0.8;
          spine.z += sin(uTime * 0.45 + p * waveFreq) * waveAmp;
          spine.y += cos(uTime * 0.25 + p * waveFreq * 0.6) * (waveAmp * 0.45);

          // --- DYNAMIC WIDTH VARIATION ---
          float widthPulse = 1.0 + 0.25 * sin(uTime * 0.95 + p * 6.2);
          float localWidth = position.y * widthPulse; 

          // --- RIBBON TWIST & THICKNESS ---
          float twistIntensity = 7.6;
          float twistFactor = smoothstep(0.0, 1.0, 1.0 - abs(p - 0.5) * 1.0);
          float twistAngle = (p * twistIntensity + uTime * 0.6) + (localWidth * 0.28 * twistFactor);
          
          float s = sin(twistAngle);
          float c = cos(twistAngle);

          // Volume offset using dynamic width
          vec3 offset = vec3(0.0, localWidth * c, localWidth * s);
          
          vec3 finalPos = spine + offset;
          
          vPosition = finalPos;
          vNormal = normalize(normalMatrix * vec3(0.0, c, s));
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        uniform vec3 uColorD;

        void main() {
          vec3 viewDir = normalize(-vPosition);
          float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.2);
          
          // --- FLOWING IRIDESCENCE ---
          float flow = fract(vUv.x * 7.2 + uTime * 0.04);
          vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 0.3, flow));
          color = mix(color, uColorC, smoothstep(0.25, 0.6, flow));
          color = mix(color, uColorD, smoothstep(0.55, 1.0, flow));

          float core = smoothstep(0.18, 0.52, vUv.y) * smoothstep(0.86, 0.48, vUv.y);
          color = mix(color, uColorB, core * 0.45);

          // Warm highlight toward the upper-right arc
          float warm = smoothstep(0.55, 1.0, vUv.x) * smoothstep(0.55, 1.0, vUv.y);
          color = mix(color, vec3(1.0, 0.56, 0.22), warm * 0.6);

          // Increase saturation without blowing highlights
          float luma = dot(color, vec3(0.299, 0.587, 0.114));
          color = mix(vec3(luma), color, 1.35);
          color = clamp(color, 0.0, 1.0);

          color = mix(color, uColorB, fresnel * 0.35);

          // --- HIGH-END TECH DOT PATTERN ---
          vec2 patternUv = vUv * vec2(210.0, 30.0);
          float dots = step(0.9, sin(patternUv.x * 3.14159)) * step(0.9, sin(patternUv.y * 3.14159));
          float dotMask = smoothstep(0.35, 0.95, vUv.x);
          color = mix(color, vec3(1.0), dots * 0.22 * dotMask);

          // Micro-variation for frequent color shifts
          float micro = sin(vUv.x * 280.0 + vUv.y * 38.0 + uTime * 0.4) * 0.5 + 0.5;
          color = mix(color, vec3(1.0, 0.95, 1.0), micro * 0.08);

          // Surface specularity
          vec3 lightSource = normalize(vec3(0.25, 1.0, 0.8));
          float spec = pow(max(dot(vNormal, lightSource), 0.0), 40.0);

          vec3 finalColor = color + spec * 0.7 + fresnel * 0.28;
          finalColor = clamp(finalColor * 1.05, 0.0, 1.0);
          
          // Smoothing out the edges and ends
          float alpha = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);
          alpha *= smoothstep(0.0, 0.06, vUv.x) * smoothstep(1.0, 0.94, vUv.x);

          // Transparent patches
          float patch = sin(vUv.x * 80.0 + uTime * 0.25) * sin(vUv.y * 12.0);
          patch = smoothstep(0.15, 0.9, patch);
          alpha *= mix(0.78, 1.0, patch);
          alpha = max(alpha, 0.18);

          gl_FragColor = vec4(finalColor, alpha * 0.95);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 8, 0]}>
      <planeGeometry args={[140, 6.8, 1500, 120]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  );
};

export const RibbonBackground: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 1.5]} className="w-full h-full" gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 8, 68]} fov={32} />
        <ambientLight intensity={1.05} />
        <directionalLight position={[8, 18, 12]} intensity={1.8} />
        <Ribbon />
      </Canvas>
    </div>
  );
};
