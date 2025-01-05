# Particle System Development Guidelines

## Performance Optimization

### 1. Particle Count Management
```javascript
// ❌ WRONG: Static particle count
const particlesCount = 1000;

// ✅ CORRECT: Adaptive particle count based on device
const getOptimalParticleCount = () => {
  const gpu = getGPUTier(); // Implement GPU detection
  return {
    low: 50,
    medium: 100,
    high: 200
  }[gpu] || 50;
};
```

### 2. Geometry and Material Optimization
```javascript
// ❌ WRONG: Using individual geometries
particles.forEach(() => {
  const geometry = new THREE.SphereGeometry();
  // ... create mesh
});

// ✅ CORRECT: Using BufferGeometry
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(count * 3);
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
```

## Animation and Interaction

### 1. Mouse Interaction
```javascript
// ❌ WRONG: Direct position updates
const updateParticles = () => {
  particles.forEach(p => {
    p.position.x += mouseX;
    p.position.y += mouseY;
  });
};

// ✅ CORRECT: Smooth interpolation
const updateParticles = () => {
  const lerp = (start, end, t) => start * (1 - t) + end * t;
  particlesMesh.rotation.x = lerp(
    particlesMesh.rotation.x,
    mouseY * 0.0005,
    0.1
  );
};
```

### 2. Connection Lines
```javascript
// ❌ WRONG: Creating new lines every frame
const drawConnections = () => {
  particles.forEach(p1 => {
    particles.forEach(p2 => {
      new THREE.Line(); // Memory intensive
    });
  });
};

// ✅ CORRECT: Reusing line objects
const lines = new Pool(() => new THREE.Line());
const drawConnections = () => {
  lines.reset();
  // Use pooled lines for connections
};
```

## Memory Management

### 1. Cleanup
```javascript
// ❌ WRONG: No cleanup
useEffect(() => {
  const particles = createParticles();
}, []);

// ✅ CORRECT: Proper disposal
useEffect(() => {
  const particles = createParticles();
  return () => {
    particles.geometry.dispose();
    particles.material.dispose();
    // Clear any pooled objects
  };
}, []);
```

### 2. Object Pooling
```javascript
class ObjectPool {
  constructor(createFn, initialSize = 100) {
    this.pool = Array(initialSize).fill(null).map(createFn);
    this.active = new Set();
  }

  acquire() {
    const obj = this.pool.find(o => !this.active.has(o));
    if (obj) this.active.add(obj);
    return obj;
  }

  release(obj) {
    this.active.delete(obj);
  }

  reset() {
    this.active.clear();
  }
}
```

## Visual Quality

### 1. Particle Appearance
```javascript
// ❌ WRONG: Basic material
const material = new THREE.PointsMaterial({
  size: 1,
  color: 0xffffff
});

// ✅ CORRECT: Enhanced visual quality
const material = new THREE.PointsMaterial({
  size: 0.005,
  color: 0xffffff,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  vertexColors: true
});
```

### 2. Motion Quality
```javascript
// ❌ WRONG: Linear motion
particle.position.add(velocity);

// ✅ CORRECT: Smooth motion with easing
const ease = (t) => t * t * (3 - 2 * t);
particle.position.lerp(target, ease(delta));
```

## Debugging and Testing

### 1. Performance Monitoring
```javascript
// Add Stats.js
const stats = new Stats();
document.body.appendChild(stats.dom);

// Monitor particle count
console.log(`Active particles: ${particleSystem.count}`);
console.log(`Frame time: ${stats.render.calls}ms`);
```

### 2. Visual Debugging
```javascript
// Add helpers
const particleHelper = new THREE.PointsMaterial({
  size: 0.1,
  color: 0xff0000
});

// Debug mode
const DEBUG = process.env.NODE_ENV === 'development';
if (DEBUG) {
  scene.add(new THREE.AxesHelper(5));
  // Add particle system bounds visualization
}
```

## Common Issues and Solutions

1. **Performance Drops**
   - Reduce particle count
   - Implement distance-based culling
   - Use object pooling for connection lines
   - Optimize render calls

2. **Visual Artifacts**
   - Enable depth testing when needed
   - Adjust blending modes
   - Handle transparency correctly
   - Use appropriate particle sizes

3. **Memory Leaks**
   - Dispose of geometries and materials
   - Clear event listeners
   - Implement proper cleanup in useEffect
   - Monitor memory usage

## Best Practices Checklist

- [ ] Implement adaptive particle count
- [ ] Use BufferGeometry for particles
- [ ] Implement object pooling for dynamic objects
- [ ] Add proper cleanup and disposal
- [ ] Optimize render loop
- [ ] Add performance monitoring in development
- [ ] Implement proper error handling
- [ ] Add visual debugging helpers
- [ ] Document performance considerations
- [ ] Test on various devices and GPUs 