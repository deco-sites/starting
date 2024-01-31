import { useEffect, useState } from "preact/hooks";

const useMenuState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1124);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1124);
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, [isMobile, isMenuOpen]);

  return { isMenuOpen, setIsMenuOpen, isMobile };
};

export default useMenuState;
