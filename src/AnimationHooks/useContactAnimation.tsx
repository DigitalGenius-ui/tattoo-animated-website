import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const useContactAnimation = ({
  container,
  textRef,
}: {
  container: React.RefObject<HTMLDivElement | null>;
  textRef: React.RefObject<null>;
}) => {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: () =>
          `+=${
            container.current &&
            container?.current.scrollHeight - window.innerHeight
          }`,
        pin: textRef.current,
        pinSpacing: false,
        scrub: true,
      },
    });
  }, []);
};

export default useContactAnimation;
