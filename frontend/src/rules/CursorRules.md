# Cursor Development Rules and Best Practices

## Three.js and React Integration

### Common Mistakes and Solutions

1. **Memory Leaks in Three.js Components**
   ```javascript
   // ❌ WRONG: Not cleaning up Three.js resources
   useEffect(() => {
     const scene = new THREE.Scene();
     // ... setup scene
   }, []);

   // ✅ CORRECT: Proper cleanup in useEffect
   useEffect(() => {
     const scene = new THREE.Scene();
     // ... setup scene
     return () => {
       scene.traverse((object) => {
         if (object.geometry) object.geometry.dispose();
         if (object.material) object.material.dispose();
       });
     };
   }, []);
   ```

2. **Performance Issues with Particle Systems**
   ```javascript
   // ❌ WRONG: Creating too many particles or updating them inefficiently
   const particlesCount = 10000; // Too many particles
   const animate = () => {
     particles.forEach(p => updateParticle(p)); // Inefficient updates
   };

   // ✅ CORRECT: Optimized particle system
   const particlesCount = 100; // Reasonable number
   const posArray = new Float32Array(particlesCount * 3);
   // Use BufferGeometry and batch updates
   ```

3. **Canvas Resize Handling**
   ```javascript
   // ❌ WRONG: Not handling window resizes
   renderer.setSize(window.innerWidth, window.innerHeight);

   // ✅ CORRECT: Proper resize handling
   const handleResize = () => {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(window.innerWidth, window.innerHeight);
   };
   window.addEventListener('resize', handleResize);
   ```

## React Component Best Practices

1. **State Management**
   ```javascript
   // ❌ WRONG: Using state for values that don't affect rendering
   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

   // ✅ CORRECT: Using refs for values that don't trigger re-renders
   const mousePos = useRef({ x: 0, y: 0 });
   ```

2. **Event Listener Cleanup**
   ```javascript
   // ❌ WRONG: Not removing event listeners
   useEffect(() => {
     window.addEventListener('mousemove', handleMouseMove);
   }, []);

   // ✅ CORRECT: Proper event listener cleanup
   useEffect(() => {
     window.addEventListener('mousemove', handleMouseMove);
     return () => window.removeEventListener('mousemove', handleMouseMove);
   }, []);
   ```

## CSS and Styling Guidelines

1. **Z-Index Management**
   ```css
   /* ❌ WRONG: Arbitrary z-index values */
   .navbar { z-index: 9999; }
   .modal { z-index: 99999; }

   /* ✅ CORRECT: Structured z-index system */
   :root {
     --z-background: 0;
     --z-content: 1;
     --z-navigation: 100;
     --z-modal: 1000;
     --z-notification: 2000;
   }
   ```

2. **Performance Considerations**
   ```css
   /* ❌ WRONG: Heavy animations */
   .element {
     animation: complex-animation 0.3s;
     box-shadow: 0 0 10px rgba(0,0,0,0.5);
   }

   /* ✅ CORRECT: GPU-accelerated animations */
   .element {
     transform: translateZ(0);
     transition: transform 0.3s;
     will-change: transform;
   }
   ```

## File Structure and Organization

```
src/
├── components/
│   ├── three/          # Three.js specific components
│   │   ├── scenes/
│   │   ├── objects/
│   │   └── controls/
│   ├── ui/            # Regular React components
│   └── shared/        # Shared components
├── hooks/             # Custom hooks
├── utils/            # Utility functions
└── rules/            # Documentation and rules
```

## Performance Optimization Rules

1. **Three.js Scene Optimization**
   - Limit particle count based on device capability
   - Use object pooling for frequently created/destroyed objects
   - Implement level of detail (LOD) for complex objects
   - Use frustum culling for off-screen objects

2. **React Component Optimization**
   - Use React.memo for pure components
   - Implement virtualization for long lists
   - Lazy load components and routes
   - Use proper key props for lists

3. **Asset Loading**
   - Implement progressive loading for textures
   - Use compressed textures when possible
   - Preload critical assets
   - Implement proper loading states

## Debugging Tips

1. **Three.js Scene Debugging**
   ```javascript
   // Add Stats.js for performance monitoring
   import Stats from 'three/examples/jsm/libs/stats.module';
   const stats = Stats();
   document.body.appendChild(stats.dom);

   // Add axes helper for orientation
   const axesHelper = new THREE.AxesHelper(5);
   scene.add(axesHelper);
   ```

2. **React Component Debugging**
   - Use React Developer Tools
   - Implement proper error boundaries
   - Add meaningful console logs in development
   - Use performance profiler for optimization

## Accessibility Guidelines

1. **Keyboard Navigation**
   - Ensure all interactive elements are focusable
   - Implement proper focus management
   - Provide keyboard shortcuts for common actions

2. **Screen Reader Support**
   - Add proper ARIA labels
   - Ensure meaningful content structure
   - Provide text alternatives for visual content

## Version Control Best Practices

1. **Commit Messages**
   ```
   feat: Add particle system with interactive controls
   fix: Resolve memory leak in Three.js scene cleanup
   perf: Optimize particle system rendering
   docs: Update development guidelines
   ```

2. **Branch Management**
   - Use feature branches for new features
   - Implement proper code review process
   - Keep commits atomic and focused
   - Regular rebasing with main branch

## Testing Guidelines

1. **Unit Testing**
   ```javascript
   // Test Three.js components
   describe('ParticleSystem', () => {
     it('should initialize with correct particle count', () => {
       // Test implementation
     });
   });
   ```

2. **Integration Testing**
   - Test component interactions
   - Verify Three.js scene integration
   - Test performance metrics
   - Implement visual regression testing

Remember to regularly update these rules based on new learnings and team feedback. 