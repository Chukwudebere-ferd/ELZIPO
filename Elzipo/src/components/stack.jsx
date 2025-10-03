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
    <div className="stack-container">
      <h2>Stacks</h2>
      <div className="stack-icons">
        <SiJavascript title="JavaScript" />
        <FaReact title="React" />
        <SiFirebase title="Firebase" />
        <SiFlutter title="Flutter" />
        <FaNodeJs title="Node.js" />
        <SiTypescript title="TypeScript" />
        <SiMysql title="SQL" />
        <SiMongodb title="MongoDB" />
      </div>
    </div>
  );
};

export default Stack;
