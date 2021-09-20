import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import Image from "next/image";
import Memory from "../../static/memory.png";
import CultuurLijst from "../../static/cultuurLijst.png";
import Construction from "../../static/construction.jpg";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      title: "Memory",
      desc: "Play my simple memory game",
      img: Memory,
      link: "https://roelvmemorygame.surge.sh/",
    },
    {
      id: "2",
      title: "Cultural overview",
      desc: "An overview of some Belgian cultural places",
      img: CultuurLijst,
      link: "https://fervent-johnson-48be38.netlify.app/",
    },
    {
      id: "3",
      title: "Volunteers app",
      desc: "Still under construction",
      img: Construction,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(
          currentSlider > 0 ? currentSlider - 1 : data.length - 1
        )
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div className="left">
        <div className="info">
          <h2>About me</h2>
          <p>My name is Roel and I am a starting developer.</p>
          <p>
            Since I don't have many projects yet I chose to highlight three over
            here. You can go to the project by clicking the title.
          </p>
          <p>
            Feel free to check my{" "}
            <a href="https://github.com/roel-vereycken" className="gitLink">
              github
            </a>{" "}
            for more projects on display in my repo's.
          </p>
        </div>
      </div>
      <div className="right">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlider * 33.33}%)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="leftItem">
                  <a href={d.link} target="_blank">
                    <div className="leftContainer">
                      <h2>{d.title}</h2>
                      <p>{d.desc}</p>
                    </div>
                  </a>
                </div>
                <div className="right">
                  <Image src={d.img} alt="" layout="fill" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrow leftArrow" onClick={() => handleClick("left")}>
          <ChevronLeft className="icon" />
        </div>
        <div className="arrow rightArrow">
          <ChevronRight className="icon" onClick={() => handleClick("right")} />
        </div>
      </div>
    </div>
  );
}
