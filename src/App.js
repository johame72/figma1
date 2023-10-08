import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className="frame">
      {/* Toggle Grid Button */}
      <button onClick={() => setShowGrid(!showGrid)}>Toggle Grid</button>

      {/* Conditional rendering of the grid */}
      {showGrid && (
        <div className="measurement-grid">
          {/* Render vertical lines */}
          {Array(10).fill().map((_, index) => (
            <div key={index} className="vertical-grid-line" style={{ left: `${index * 10}%` }} />
          ))}

          {/* Render horizontal lines */}
          {Array(10).fill().map((_, index) => (
            <div key={index} className="horizontal-grid-line" style={{ top: `${index * 10}%` }} />
          ))}

          {/* X and Y axis measurements */}
          <div className="x-axis">X</div>
          <div className="y-axis">Y</div>
        </div>
      )}
const App = () => {
  return (
    <div className="frame">
      <div className="measurement-grid">
        <div className="overlap">
          <div className="div" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="text-wrapper">ChatFormat</div>
        </div>
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="overlap-group-2">
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <div className="rectangle-7" />
              <div className="rectangle-8" />
              <div className="rectangle-9" />
              <div className="rectangle-10" />
              <div className="rectangle-11" />
              <div className="rectangle-12" />
            </div>
            <div className="rectangle-13" />
            <div className="rectangle-14" />
          </div>
          <div className="rectangle-15" />
        </div>
    </div>
      <div className="rectangle-16" />
    </div>
  );
};

export default App;
