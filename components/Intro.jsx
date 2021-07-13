import React, { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ["Developer", "Drummer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer"></div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hallo Ik ben</h2>
          <h1>Roel</h1>
          <h3>
            Ik ben <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">Verder</a>
      </div>
    </div>
  );
}
