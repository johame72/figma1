import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [showGrid, setShowGrid] = useState(false);
  const gridDivisions = 10;  // Number of squares in one dimension

  const spacing = window.innerWidth / gridDivisions;

  return (
    <div className="frame">
      {/* Toggle Grid Button */}
      <button 
          onClick={() => setShowGrid(!showGrid)} 
          aria-label="Toggle measurement grid"
      >
          Toggle Grid
      </button>

      {/* Conditional rendering of the grid */}
      {showGrid && (
        <div className="measurement-grid">
          {/* Render vertical lines and their annotations */}
          {Array(gridDivisions + 1).fill().map((_, index) => (
            <React.Fragment key={index}>
              <div className="vertical-grid-line" style={{ left: `${index * spacing}px` }} />
              {index !== 0 && <div className="vertical-annotation-top" style={{ left: `${index * spacing}px` }}>{index * spacing}</div>}
              {index !== 0 && <div className="vertical-annotation-bottom" style={{ left: `${index * spacing}px` }}>{index * spacing}</div>}
            </React.Fragment>
          ))}

          {/* Render horizontal lines and their annotations */}
          {Array(gridDivisions + 1).fill().map((_, index) => (
            <React.Fragment key={index}>
              <div className="horizontal-grid-line" style={{ top: `${index * spacing}px` }} />
              {index !== 0 && <div className="horizontal-annotation-left" style={{ top: `${index * spacing}px` }}>{index * spacing}</div>}
              {index !== 0 && <div className="horizontal-annotation-right" style={{ top: `${index * spacing}px` }}>{index * spacing}</div>}
            </React.Fragment>
          ))}
        </div>
      )}

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
      <div className="rectangle-16" />
    </div>
  );
};

export default App;
