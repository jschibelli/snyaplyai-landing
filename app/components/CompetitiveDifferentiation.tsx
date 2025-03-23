"use client";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faShieldAlt, faSyncAlt, faChartLine, faUsers, faLock, faBolt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

export default function CompetitiveDifferentiation() {
  const [activeTab, setActiveTab] = useState('benefits');
  
  return (
    <section className="py-10">
      <h2 className="section-title">Why SynaplyAI Stands Out</h2>
      <div className="section-title-line"></div>
      
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'benefits' ? 'active' : ''}`}
          onClick={() => setActiveTab('benefits')}
        >
          Key Benefits
        </button>
        <button 
          className={`tab ${activeTab === 'edge' ? 'active' : ''}`}
          onClick={() => setActiveTab('edge')}
        >
          Competitive Edge
        </button>
      </div>
      
      <div className="benefits-list" style={{ 
        opacity: activeTab === 'benefits' ? 1 : 0, 
        display: activeTab === 'benefits' ? 'grid' : 'none',
        transition: 'opacity 0.3s ease' 
      }}>
        <div className="benefit-item">
          <div className="benefit-icon">
            <FontAwesomeIcon icon={faCogs} size="2x" />
          </div>
          <span>AI model switching based on content type</span>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          </div>
          <span>Conflict resolution accuracy &gt;98%</span>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">
            <FontAwesomeIcon icon={faSyncAlt} size="2x" />
          </div>
          <span>99.9% uptime with Redis-based state handling</span>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">
            <FontAwesomeIcon icon={faChartLine} size="2x" />
          </div>
          <span>Flexible token-based pricing for predictable cost control</span>
        </div>
      </div>
      
      <div className="benefits-list" style={{ 
        opacity: activeTab === 'edge' ? 1 : 0, 
        display: activeTab === 'edge' ? 'grid' : 'none',
        transition: 'opacity 0.3s ease'  
      }}>
        <div className="benefit-item">
          <div className="benefit-icon">
            <FontAwesomeIcon icon={faUsers} size="2x" />
          </div>
          <span>Multi-tenant isolation with AsyncLocalStorage → No data leakage</span>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">
            <FontAwesomeIcon icon={faLock} size="2x" />
          </div>
          <span>AI-assisted conflict resolution using vector clocks</span>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">
            <FontAwesomeIcon icon={faBolt} size="2x" />
          </div>
          <span>Governance-first AI model handling with audit-level tracking</span>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">
            <FontAwesomeIcon icon={faClipboardCheck} size="2x" />
          </div>
          <span>Real-time collaboration with audit-level tracking</span>
        </div>
      </div>
    </section>
  );
}