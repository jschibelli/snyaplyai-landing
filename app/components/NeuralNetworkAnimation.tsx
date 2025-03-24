"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// Define types for our nodes and connections
interface Node {
  id: number;
  x: number;
  y: number;
  r: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  active?: boolean;
  pathId?: string;
}

export default function NeuralNetworkAnimation() {
  const networkRef = useRef<SVGSVGElement | null>(null);
  const [activeTrails, setActiveTrails] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // Mark that we're client-side to prevent hydration mismatch
    setIsClient(true);
    
    if (!networkRef.current) return;
    
    // Create a timeline for coordinated animations
    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    
    // Add scale animation (pulse)
    timeline.to(networkRef.current, {
      scale: 1.05,
      duration: 3,
      ease: "power1.inOut",
    });
    
    // Add horizontal drift animation
    gsap.to(networkRef.current, {
      x: '5%',
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
  // Using fixed seed values for server/client consistency
  const nodes: Node[] = [];
  
  // Only render nodes and connections on client-side
  if (isClient) {
    for (let i = 0; i < 30; i++) {
      nodes.push({
        id: i,
        x: (i * 7.3) % 100,
        y: (i * 13.1) % 100,
        r: 1.8 + ((i * 2.4) % 2.4),
      });
    }
  }
  
  const connections: Connection[] = [];
  if (isClient) {
    nodes.forEach((node) => {
      // Connect each node to 1-3 deterministic other nodes
      const connectionCount = 1 + (node.id % 3);
      for (let i = 0; i < connectionCount; i++) {
        const targetIndex = (node.id + i + 1) % nodes.length;
        if (targetIndex !== node.id) {
          const pathId = `path-${node.id}-${targetIndex}`;
          connections.push({
            from: node.id,
            to: targetIndex,
            opacity: 0.2 + ((node.id + i) % 10) / 20,
            active: false,
            pathId
          });
        }
      }
    });
  }

  return (
    <div className="neural-network-container">
      <svg 
        ref={networkRef}
        viewBox="0 0 100 100" 
        className="neural-network"
        preserveAspectRatio="xMidYMid slice"
      >
        {isClient && connections.map((conn, i) => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          const isActive = activeTrails.includes(conn.pathId || "");
          
          return (
            <line
              key={`conn-${i}`}
              id={conn.pathId}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              className={`neural-connection ${isActive ? 'light-trail' : ''}`}
              opacity={isActive ? 0.9 : conn.opacity * 0.5}
            />
          );
        })}
        
        {isClient && nodes.map(node => (
          <circle
            key={`node-${node.id}`}
            id={`node-${node.id}`}
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