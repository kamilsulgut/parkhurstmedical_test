import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 748;

const useIsMobile = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth >= MOBILE_BREAKPOINT;
};

export default useIsMobile;
