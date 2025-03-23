"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function NeuralNetworkAnimation() {
  const networkRef = useRef(null);

  useEffect(() => {
    if (!networkRef.current) return;
    
    // Create a timeline for coordinated animations
    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    
    // Add scale animation (pulse)
    timeline.to(networkRef.current, {
      scale: 1.05,
      duration: 3, // Updated from 2.5s to 3s
      ease: "power1.inOut",
    });
    
    // Add horizontal drift animation
    gsap.to(networkRef.current, {
      x: '5%', // Subtle horizontal movement
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    
    return () => {
      // Clean up animations
      timeline.kill();
      gsap.killTweensOf(networkRef.current);
    };
  }, []);

  // Generate random nodes and connections for the neural network
  // Increase node count for richer visual on larger screens
  const nodes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    r: 1.8 + Math.random() * 2.4, // Slightly smaller nodes for better aesthetics
  }));
  
  const connections = [];
  nodes.forEach((node) => {
    // Connect each node to 1-3 random other nodes
    const connectionCount = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < connectionCount; i++) {
      const targetIndex = Math.floor(Math.random() * nodes.length);
      if (targetIndex !== node.id) {
        connections.push({
          from: node.id,
          to: targetIndex,
          opacity: 0.2 + Math.random() * 0.5, // Slightly adjusted opacity range
        });
      }
    }
  });

  return (
    <div className="neural-network-container">
      <svg 
        ref={networkRef}
        viewBox="0 0 100 100" 
        className="neural-network"
        preserveAspectRatio="xMidYMid slice" // Ensures proper scaling across viewport sizes
      >
        {/* Draw connections first so nodes appear on top */}
        {connections.map((conn, i) => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          return (
            <line
              key={`conn-${i}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#00ff00"
              strokeWidth="0.3"
              opacity={conn.opacity}
            />
          );
        })}
        
        {/* Draw nodes with pulse animation */}
        {nodes.map(node => (
          <circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#00ff00"
            className="neural-node"
          />
        ))}
      </svg>
    </div>
  );
}