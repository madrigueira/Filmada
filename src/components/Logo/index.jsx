import "./index.scss";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Logo = ({ size }) => {
  // Efeito de Typed
  const logo = useRef(null);

  useEffect(() => {
    const typed = new Typed(logo.current, {
      strings: ["Filmada."],
      typeSpeed: 150,
      showCursor: false,
    });
  });

  return (
    <div>
      <span ref={logo} style={{ fontSize: `${size}` }}></span>
    </div>
  );
};

export default Logo;
