"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// Define types for our nodes and connections
interface Node {
  id: number;
  x: number;
  y: number;
  r: number;
  layer?: number;
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
    
    // Add light trail animations
    if (isClient && connections.length > 0) {
      const activateRandomTrails = () => {
        const newTrails: string[] = [];
        const trailCount = 3 + Math.floor(Math.random() * 3); // 3-5 trails
        
        for (let i = 0; i < trailCount; i++) {
          const randomIndex = Math.floor(Math.random() * connections.length);
          if (connections[randomIndex].pathId) {
            newTrails.push(connections[randomIndex].pathId || "");
          }
        }
        
        setActiveTrails(newTrails);
      };
      
      // Initial trails
      setTimeout(activateRandomTrails, 800);
      
      // Periodically change trails
      const interval = setInterval(activateRandomTrails, 2000);
      
      return () => {
        clearInterval(interval);
        timeline.kill();
        gsap.killTweensOf(networkRef.current);
      };
    }
    
    return () => {
      // Clean up animations
      timeline.kill();
      gsap.killTweensOf(networkRef.current);
    };
  }, [isClient]);

  // Generate nodes in a circular pattern
  const nodes: Node[] = [];
  
  // Only render nodes and connections on client-side
  if (isClient) {
    // Create circular layers of nodes
    const layers = 3; // Number of concentric circles
    const centerX = 50;
    const centerY = 50;
    let nodeId = 0;
    
    // Center node
    nodes.push({
      id: nodeId++,
      x: centerX,
      y: centerY,
      r: 2.5,
      layer: 0
    });
    
    // Create concentric circles of nodes
    for (let layer = 1; layer <= layers; layer++) {
      const radius = layer * 15; // Distance from center
      const nodesInLayer = layer * 8; // More nodes in outer layers
      
      for (let i = 0; i < nodesInLayer; i++) {
        const angle = (i / nodesInLayer) * 2 * Math.PI;
        const offsetAngle = layer % 2 === 0 ? angle : angle + Math.PI / nodesInLayer;
        const x = centerX + radius * Math.cos(offsetAngle);
        const y = centerY + radius * Math.sin(offsetAngle);
        
        // Add slight variation to make it look more natural
        const variationX = ((nodeId * 13) % 10 - 5) * 0.2;
        const variationY = ((nodeId * 17) % 10 - 5) * 0.2;
        
        nodes.push({
          id: nodeId++,
          x: Math.min(Math.max(x + variationX, 0), 100), // Keep within bounds
          y: Math.min(Math.max(y + variationY, 0), 100),
          r: 1.6 + (layer * 0.3) + ((nodeId * 7) % 10) * 0.1,
          layer
        });
      }
    }
  }
  
  // Create connections that follow the circular structure
  const connections: Connection[] = [];
  if (isClient && nodes.length > 0) {
    // Connect nodes primarily within their own layer and to adjacent layers
    nodes.forEach(node => {
      const layer = node.layer || 0;
      const connectionCount = 1 + (node.id % 2);
      
      // Connect to nodes in same layer
      for (let i = 0; i < connectionCount; i++) {
        const sameLayerNodes = nodes.filter(n => (n.layer === layer) && n.id !== node.id);
        if (sameLayerNodes.length > 0) {
          const targetIndex = (node.id + i + 1) % sameLayerNodes.length;
          const targetNode = sameLayerNodes[targetIndex];
          
          const pathId = `path-${node.id}-${targetNode.id}`;
          connections.push({
            from: node.id,
            to: targetNode.id,
            opacity: 0.2 + ((node.id + i) % 10) / 20,
            pathId
          });
        }
      }
      
      // Connect to adjacent layers (inner or outer)
      if (layer > 0) {
        const lowerLayerNodes = nodes.filter(n => n.layer === layer - 1);
        if (lowerLayerNodes.length > 0) {
          const targetIndex = node.id % lowerLayerNodes.length;
          const targetNode = lowerLayerNodes[targetIndex];
          
          const pathId = `path-${node.id}-${targetNode.id}`;
          connections.push({
            from: node.id,
            to: targetNode.id,
            opacity: 0.2 + (node.id % 10) / 20,
            pathId
          });
        }
      }
      
      // Some connections to the next layer
      if (Math.random() > 0.5 && layer < 3) {
        const higherLayerNodes = nodes.filter(n => n.layer === layer + 1);
        if (higherLayerNodes.length > 0) {
          const targetIndex = (node.id * 3) % higherLayerNodes.length;
          const targetNode = higherLayerNodes[targetIndex];
          
          const pathId = `path-${node.id}-${targetNode.id}`;
          connections.push({
            from: node.id,
            to: targetNode.id,
            opacity: 0.15 + (node.id % 10) / 30, // Slightly less visible
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
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          
          if (!fromNode || !toNode) return null;
          
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