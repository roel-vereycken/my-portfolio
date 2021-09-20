import React, { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ["Developer", "Musician", "Volunteer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer"></div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, my name is</h2>
          <h1>Roel Vereycken</h1>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#works">Works</a>
      </div>
    </div>
  );
}
