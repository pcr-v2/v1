import { styled } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface IProps {
  children: ReactNode;
}

export default function SmootScroll(props: IProps) {
  const { children } = props;

  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries),
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.1, stiffness: 35 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      <FSmoothScrollDiv ref={scrollRef} style={{ y: spring }}>
        {children}
      </FSmoothScrollDiv>
      <div style={{ height: pageHeight }} />
    </>
  );
}

const FSmoothScrollDiv = styled(motion.div)(() => {
  return {
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    position: "fixed",
    padding: "0px 24px",
    overflow: "hidden",
    alignItems: "center",
    willChange: "transform",
    flexDirection: "column",
    justifyContent: "center",
  };
});
