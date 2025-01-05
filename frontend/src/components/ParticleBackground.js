import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ParticleBackground.css';

function ParticleBackground() {
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const time = useRef(0);
  const frameId = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Store ref in variable for cleanup
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);
    const speeds = new Float32Array(particlesCount);

    const generateParticle = (index) => {
      const i = index * 3;
      const radius = Math.random() * 30 + 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Dynamic colors
      const hue = Math.random();
      const color = new THREE.Color().setHSL(hue, 0.8, 0.8);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;

      scales[index] = Math.random() * 4.0 + 2.0;
      speeds[index] = Math.random() * 0.2 + 0.1;
    };

    for(let i = 0; i < particlesCount; i++) {
      generateParticle(i);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    particlesGeometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));

    const vertexShader = `
      attribute vec3 color;
      attribute float aScale;
      attribute float aSpeed;
      varying vec3 vColor;
      uniform float uTime;
      uniform float uSize;
      uniform vec2 uMouse;
      
      void main() {
        vColor = color;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        float wave = sin(modelPosition.x * 0.5 + uTime) * cos(modelPosition.z * 0.5 + uTime) * 2.0;
        modelPosition.y += wave * aScale;

        float angle = uTime * aSpeed;
        float radius = length(modelPosition.xyz);
        float spiral = sin(radius - uTime * 2.0) * 2.0;
        
        modelPosition.x += sin(angle + radius) * aScale * spiral;
        modelPosition.z += cos(angle + radius) * aScale * spiral;

        float distanceFromMouse = length(modelPosition.xy - uMouse * radius);
        float mouseEffect = smoothstep(15.0, 0.0, distanceFromMouse);
        modelPosition.xy += uMouse * mouseEffect * 8.0;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        float sizeMultiplier = 1.0 + mouseEffect * 4.0 + sin(uTime + radius) * 0.5;
        gl_PointSize = uSize * aScale * sizeMultiplier * (1.0 / -viewPosition.z);
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      
      void main() {
        float distanceToCenter = length(gl_PointCoord - vec2(0.5));
        float strength = 0.25 / (distanceToCenter + 0.01);
        vec3 color = mix(vColor, vec3(1.0), strength * 0.5);
        gl_FragColor = vec4(color, strength);
      }
    `;

    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 200 },
        uMouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexColors: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 25;

    const onMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      time.current += 0.003;

      particlesMaterial.uniforms.uTime.value = time.current;
      particlesMaterial.uniforms.uMouse.value.set(
        mousePosition.current.x,
        mousePosition.current.y
      );

      const cameraRadius = 30;
      const cameraSpeed = 0.2;
      camera.position.x = Math.sin(time.current * cameraSpeed) * cameraRadius * mousePosition.current.x;
      camera.position.y = Math.cos(time.current * cameraSpeed) * cameraRadius * mousePosition.current.y;
      camera.position.z = 25 + Math.sin(time.current * cameraSpeed * 0.5) * 5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      frameId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (object.material.length) {
            for (let material of object.material) material.dispose();
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="particle-background" />;
}

export default ParticleBackground; 
