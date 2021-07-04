// @import Styling
import AppTheme from "../style/Theme";

// Animation Variant

// @desc Button pressing animation
// @used_in ["../auth/LoginForm","../auth/RegisterForm","../Icon/DoneIconSet","../Icon/SortIcon","../Icon/UserIcon","../todo/CreateTddo","../todo/TodoDetail","../../pages/Profile"]
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

// @desc Form input error popup animation
// @used_in ["../component/Input"]
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

// @desc Add todo div click animation
// @used_in ["../todo/AddTodoBlock"]
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

// @desc SVG path animation
// @used_in ["../Icon/AnimatedNotDoneIcon"]
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

// @desc Todo object zoom animation
// @used_in ["../todo/TodoObjBlockView"]
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

// @desc Todo object delete icon animation
// @used_in ["../Icon/DeleteIcon"]
export const deleteIconAnimation = {
  show: {
    stroke: AppTheme.fontColorErr,
    scale: 1.05,
  },
};
