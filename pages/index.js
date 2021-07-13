import { useState } from "react";

import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Topbar from "../components/Topbar";
import Works from "../components/Works";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
