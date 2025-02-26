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
    const particlesCount = 1800;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);
    const speeds = new Float32Array(particlesCount);

    // Define elegant color palette
    const colorPalette = [
      new THREE.Color('#00dcdc'), // Accent teal
      new THREE.Color('#ffffff'), // White
      new THREE.Color('#00a0a0'), // Darker teal
      new THREE.Color('#80eeee'), // Light teal
    ];

    const generateParticle = (index) => {
      const i = index * 3;
      
      // Create a more elegant distribution of particles
      const radius = 25 + Math.random() * Math.random() * 25;
      const randomAngle1 = Math.random() * Math.PI * 2;
      const randomAngle2 = Math.random() * Math.PI * 2;
      
      // Calculate position with a more elegant spread
      positions[i] = radius * Math.sin(randomAngle1) * Math.cos(randomAngle2);
      positions[i + 1] = (radius * 0.6) * Math.sin(randomAngle2);
      positions[i + 2] = radius * Math.cos(randomAngle1) * Math.cos(randomAngle2);

      // Choose a color from our professional palette
      const colorIndex = Math.floor(Math.random() * colorPalette.length);
      const color = colorPalette[colorIndex];
      
      // Add a slight variation to make it more organic
      const hueShift = (Math.random() * 0.1) - 0.05;
      color.offsetHSL(hueShift, 0, 0);
      
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;

      // Varied particle sizes for more professional look
      scales[index] = Math.random() * 2.5 + 0.5;
      
      // Varied speeds for more organic movement
      speeds[index] = Math.random() * 0.15 + 0.05;
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

        // Create more elegant, subtle movement
        float wave = sin(modelPosition.x * 0.3 + uTime) * cos(modelPosition.z * 0.3 + uTime) * 1.5;
        modelPosition.y += wave * aScale * 0.6;

        // Subtle spiral effect
        float angle = uTime * aSpeed;
        float radius = length(modelPosition.xyz);
        float spiral = sin(radius - uTime * 1.2) * 1.2;
        
        modelPosition.x += sin(angle + radius) * aScale * spiral * 0.3;
        modelPosition.z += cos(angle + radius) * aScale * spiral * 0.3;

        // Refined mouse interaction
        float distanceFromMouse = length(modelPosition.xy - uMouse * radius);
        float mouseEffect = smoothstep(20.0, 0.0, distanceFromMouse);
        modelPosition.xy += uMouse * mouseEffect * 5.0;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        // Subtle size variation
        float sizeMultiplier = 1.0 + mouseEffect * 2.0 + sin(uTime + radius) * 0.3;
        gl_PointSize = uSize * aScale * sizeMultiplier * (1.0 / -viewPosition.z);
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      
      void main() {
        // Create more elegant, soft particles
        float distanceToCenter = length(gl_PointCoord - vec2(0.5));
        float strength = 0.15 / (distanceToCenter + 0.05);
        vec3 color = mix(vColor, vec3(1.0), strength * 0.3);
        gl_FragColor = vec4(color, strength * 0.8);
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
        uSize: { value: 150 },
        uMouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexColors: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 30;

    const onMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      time.current += 0.002;

      particlesMaterial.uniforms.uTime.value = time.current;
      particlesMaterial.uniforms.uMouse.value.set(
        mousePosition.current.x,
        mousePosition.current.y
      );

      // Subtle camera movement for added elegance
      camera.position.x = Math.sin(time.current * 0.1) * 2;
      camera.position.y = Math.cos(time.current * 0.1) * 2;
      camera.lookAt(scene.position);

      particlesMesh.rotation.y = time.current * 0.05;

      renderer.render(scene, camera);
      frameId.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId.current);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="particle-container" />;
}

export default ParticleBackground; 
