"use client";

import { motion as m } from "motion/react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "./button";

type ThemeVariants = "dark" | "light" | "system";

const raysVariants = {
  hidden: {
    strokeOpacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    strokeOpacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rayVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    // Start from center of the circle
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      // Customize timing for each property
      pathLength: { duration: 0.3 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 },
    },
  },
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const onThemeChange = useCallback(() => {
    switch (theme as ThemeVariants) {
      case "light":
        setTheme("dark" as ThemeVariants);
        break;
      case "dark":
        setTheme("light" as ThemeVariants);
        break;
      case "system":
        setTheme("dark" as ThemeVariants);
        break;

      default:
        setTheme("system");
        break;
    }
  }, [theme]);

  const sunPath =
    "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z";
  const moonPath =
    "M12 16C14.2091 16 16 14.2091 16 12C12.581 12.9126 10.8369 11.099 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z";

  return (
    <Button onClick={onThemeChange} size="icon" variant="outline">
      <m.svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <m.path
          d={sunPath}
          initial={{
            fillOpacity: 0,
            strokeOpacity: 0,
          }}
          animate={
            theme === "dark"
              ? {
                  d: moonPath,
                  strokeOpacity: 1,
                  rotate: 360,
                  fillOpacity: 0.35,
                  stroke: "#5353EC",
                  scale: 2,
                  fill: "#5353EC",
                }
              : {
                  strokeOpacity: 1,
                  rotate: 0,
                  fillOpacity: 0.35,
                  stroke: "#ff0",
                  fill: "#ff0",
                  d: sunPath,
                }
          }
        />
        <m.g
          variants={raysVariants}
          initial="hidden"
          animate={theme === "light" ? "visible" : "hidden"}
          className="stroke-2 stroke-yellow-600"
          style={{ strokeLinecap: "round" }}
        >
          <m.path className="origin-center" variants={rayVariant} d="M12 2V4" />
          <m.path variants={rayVariant} d="M12 20V22" />
          <m.path variants={rayVariant} d="M4.92999 4.92969L6.33999 6.33969" />
          <m.path variants={rayVariant} d="M17.66 17.6602L19.07 19.0702" />
          <m.path variants={rayVariant} d="M2 12H4" />
          <m.path variants={rayVariant} d="M20 12H22" />
          <m.path variants={rayVariant} d="M6.33999 17.6602L4.92999 19.0702" />
          <m.path variants={rayVariant} d="M19.07 4.92969L17.66 6.33969" />
        </m.g>
      </m.svg>
    </Button>
  );
};

export default ThemeToggle;
