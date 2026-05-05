import React from 'react';
import {
  SiJavascript,
  SiFirebase,
  SiFlutter,
  SiTypescript,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import "../styles/stacks.css";

const Stack = () => {
  return (
    <section className="stack-section fade-in" style={{ animationDelay: '0.6s' }}>
      <h2 className="stack-title">Tech <span className="gradient-text">Stack</span></h2>
      <div className="stack-grid">
        <div className="stack-icon-wrapper" title="JavaScript"><SiJavascript /></div>
        <div className="stack-icon-wrapper" title="React"><FaReact /></div>
        <div className="stack-icon-wrapper" title="Firebase"><SiFirebase /></div>
        <div className="stack-icon-wrapper" title="Flutter"><SiFlutter /></div>
        <div className="stack-icon-wrapper" title="Node.js"><FaNodeJs /></div>
        <div className="stack-icon-wrapper" title="TypeScript"><SiTypescript /></div>
      </div>
    </section>
  );
};

export default Stack;
