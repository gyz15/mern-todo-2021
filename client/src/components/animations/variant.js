import AppTheme from "../style/Theme";
// Animation Variant
export const ObjectZoom = {
  focused: {
    scale: 1.1,
    transition: {
      duration: 0.1,
    },
  },
  pressed: {
    scale: 0.9,
  },
};
export const ErrorPopUp = {
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const ObjectUp = {
  initial: {
    translateY: 0,
    backgroundColor: "#EFFCFF",
    transition: {
      duration: 1,
    },
  },
  focused: {
    zIndex: 0,
    translateY: -2,
    backgroundColor: "#D3F7FF",
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
  pressed: {
    zIndex: 0,
    translateY: 3,
    transition: {
      duration: 0.1,
    },
  },
};

export const hoverTickPath = {
  initial: {
    pathLength: 0,
    display: "none",
  },
  hover: {
    pathLength: 1,
    opacity: 1,
    display: "initial",
  },
};

export const TodoObjZoom = {
  focused: {
    translateY: "-0.2rem",
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const AnimateTodoContainer = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
