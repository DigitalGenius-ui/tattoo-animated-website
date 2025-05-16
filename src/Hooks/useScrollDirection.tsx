import { useEffect, useRef, useState } from "react";

export const useScrollDirection = (threshold = 10) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
        ticking.current = false;
        return;
      }

      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      setCurrentScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrollDirection, currentScrollY };
};
