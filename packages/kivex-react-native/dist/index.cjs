'use strict';

var react = require('react');
var Svg = require('react-native-svg');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/activity.tsx
var IconBase = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Svg__default.default,
      {
        ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children
      }
    );
  }
);
IconBase.displayName = "IconBase";
var Activity = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h2.42a.1.1 0 0 0 .1-.08l2.4-9.57c.02-.1.16-.1.19 0l5.8 19.37a.1.1 0 0 0 .2 0l3.61-9.66a.1.1 0 0 1 .1-.06H21" })
      }
    );
  }
);
Activity.displayName = "Activity";
var Alert = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 8v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 16, r: 0.5 })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var Angry = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 16c1.77-2.67 6.23-2.67 8 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 7 2 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 8 2-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 11, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 11, r: 0.5 })
        ]
      }
    );
  }
);
Angry.displayName = "Angry";
var Annoyed = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 15h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 9h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 9h2" })
        ]
      }
    );
  }
);
Annoyed.displayName = "Annoyed";
var ArrowLeftFromLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 7-5.87 5.8c-.17.1-.17.3 0 .4L9 19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 13h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 6v14" })
        ]
      }
    );
  }
);
ArrowLeftFromLine.displayName = "ArrowLeftFromLine";
var ArrowLeftToLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 6-5.87 5.8c-.17.1-.17.3 0 .4L13 18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5v14" })
        ]
      }
    );
  }
);
ArrowLeftToLine.displayName = "ArrowLeftToLine";
var ArrowLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 5-6.65 6.65a.5.5 0 0 0 0 .7L12 19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 12h13" })
        ]
      }
    );
  }
);
ArrowLeft.displayName = "ArrowLeft";
var ArrowRightFromLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 12h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 6 5.85 5.65a.5.5 0 0 1 0 .7L15 18" })
        ]
      }
    );
  }
);
ArrowRightFromLine.displayName = "ArrowRightFromLine";
var ArrowRightToLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12.05h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 5v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m11 6 5.65 5.65a.5.5 0 0 1 0 .7L11 18" })
        ]
      }
    );
  }
);
ArrowRightToLine.displayName = "ArrowRightToLine";
var ArrowUpFromLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 9 5.65-5.85a.5.5 0 0 1 .7 0L18 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3.8V17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 21h14" })
        ]
      }
    );
  }
);
ArrowUpFromLine.displayName = "ArrowUpFromLine";
var ArrowUpLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 8 9 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 17V7.5a.5.5 0 0 1 .5-.5H17" })
        ]
      }
    );
  }
);
ArrowUpLeft.displayName = "ArrowUpLeft";
var ArrowUpRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 7h9.5a.5.5 0 0 1 .5.5V17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 17 9-9" })
        ]
      }
    );
  }
);
ArrowUpRight.displayName = "ArrowUpRight";
var ArrowUpToLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m5 13 5.65-5.85a.5.5 0 0 1 .7 0L17 13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 8v13.2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 3h14" })
        ]
      }
    );
  }
);
ArrowUpToLine.displayName = "ArrowUpToLine";
var BarChart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 3v17a1 1 0 0 0 1 1h17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 6h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 11h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 16h8" })
        ]
      }
    );
  }
);
BarChart.displayName = "BarChart";
var BellRing = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5.78 9.59C5.78 5.95 8.56 3 12 3s6.22 2.95 6.22 6.59v3.82q0 .89.38 1.68l1.03 2.17q.36.8.37 1.69V19H4v-.05q0-.89.38-1.69L5.4 15.1q.38-.8.38-1.69z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 22h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 8c.17-.83.5-3.5 3-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 2c.83.83 2.6 3.2 3 6" })
        ]
      }
    );
  }
);
BellRing.displayName = "BellRing";
var Bookmark = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.23a1 1 0 0 1-1.52.85l-4.96-3a1 1 0 0 0-1.04 0l-4.96 3A1 1 0 0 1 5 20.24z" })
      }
    );
  }
);
Bookmark.displayName = "Bookmark";
var BriefcaseConveyorBelt = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18.4 6H5.6C4.72 6 4 6.58 4 7.29v6.42c0 .71.72 1.29 1.6 1.29h12.8c.88 0 1.6-.58 1.6-1.29V7.3c0-.72-.72-1.3-1.6-1.3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 15V3.44C8 2.64 8.9 2 10 2h4c1.1 0 2 .65 2 1.44V15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 19h16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 19v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 19v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 19v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 19v2" })
        ]
      }
    );
  }
);
BriefcaseConveyorBelt.displayName = "BriefcaseConveyorBelt";
var BriefcaseMedical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 20, height: 14, x: 2, y: 6, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 6v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 6v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 11v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 13h4" })
        ]
      }
    );
  }
);
BriefcaseMedical.displayName = "BriefcaseMedical";
var Briefcase = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 20, height: 14, x: 2, y: 6, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 20V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" })
        ]
      }
    );
  }
);
Briefcase.displayName = "Briefcase";
var Brush = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2.25 21.32 2.5-6.67A1 1 0 0 1 5.7 14h12.62a1 1 0 0 1 .93.65l2.5 6.67a.5.5 0 0 1-.46.68H2.72a.5.5 0 0 1-.47-.68" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 14a2 2 0 1 1 0-4h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 10h4a2 2 0 1 1 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 10V4a2 2 0 1 1 4 0v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 22 1-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 22-1-4" })
        ]
      }
    );
  }
);
Brush.displayName = "Brush";
var CalendarCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 16.4 1.93 1.54a.1.1 0 0 0 .13 0L15 14" })
        ]
      }
    );
  }
);
CalendarCheck.displayName = "CalendarCheck";
var CalendarDays = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 14, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 14, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 14, r: 0.5 })
        ]
      }
    );
  }
);
CalendarDays.displayName = "CalendarDays";
var CalendarX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 14 4 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 18 4-4" })
        ]
      }
    );
  }
);
CalendarX.displayName = "CalendarX";
var Calendar = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 4, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h18" })
        ]
      }
    );
  }
);
Calendar.displayName = "Calendar";
var Chat = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9.3a2 2 0 0 1-2 2H7.66a2 2 0 0 0-1.19.4L2.8 20.4A.5.5 0 0 1 2 20z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 8h11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 13h9" })
        ]
      }
    );
  }
);
Chat.displayName = "Chat";
var Check = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 13 8.07 5.68a.5.5 0 0 0 .73-.18L20 5" })
      }
    );
  }
);
Check.displayName = "Check";
var ChevronDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 9 5.65 5.65a.5.5 0 0 0 .7 0L18 9" })
      }
    );
  }
);
ChevronDown.displayName = "ChevronDown";
var ChevronUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 15 5.65-5.65a.5.5 0 0 1 .7 0L18 15" })
      }
    );
  }
);
ChevronUp.displayName = "ChevronUp";
var ChevronsDownUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 4 4.7 4.87a.4.4 0 0 0 .6 0L17 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 20 4.65-4.65a.5.5 0 0 1 .7 0L17 20" })
        ]
      }
    );
  }
);
ChevronsDownUp.displayName = "ChevronsDownUp";
var ChevronsDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 6 4.7 4.87a.4.4 0 0 0 .6 0L17 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 13 4.7 4.87a.4.4 0 0 0 .6 0L17 13" })
        ]
      }
    );
  }
);
ChevronsDown.displayName = "ChevronsDown";
var ChevronsUpDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 9 4.65-4.65a.5.5 0 0 1 .7 0L17 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 15 4.65 4.65a.5.5 0 0 0 .7 0L17 15" })
        ]
      }
    );
  }
);
ChevronsUpDown.displayName = "ChevronsUpDown";
var ChevronsUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 11 4.65-4.65a.5.5 0 0 1 .7 0L17 11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 18 4.65-4.65a.5.5 0 0 1 .7 0L17 18" })
        ]
      }
    );
  }
);
ChevronsUp.displayName = "ChevronsUp";
var CircleArrowLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 8-3.91 3.8a.3.3 0 0 0 0 .4L12 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 })
        ]
      }
    );
  }
);
CircleArrowLeft.displayName = "CircleArrowLeft";
var CircleArrowOutUpLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 3 8 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 8V2.5a.5.5 0 0 1 .5-.5H8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12A10 10 0 1 0 12 2" })
        ]
      }
    );
  }
);
CircleArrowOutUpLeft.displayName = "CircleArrowOutUpLeft";
var CircleArrowOutUpRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2h5.5a.5.5 0 0 1 .5.5V8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 11 8-8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 12A10 10 0 1 1 12 2" })
        ]
      }
    );
  }
);
CircleArrowOutUpRight.displayName = "CircleArrowOutUpRight";
var CircleCheckBig = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.54 9q.45 1.43.46 3a10 10 0 1 1-7-9.54" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9.5 10.5 2.23 1.85a1 1 0 0 0 1.44-.23L21 3" })
        ]
      }
    );
  }
);
CircleCheckBig.displayName = "CircleCheckBig";
var CircleCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 13 1.73 1.35a1 1 0 0 0 1.44-.23L15 10" })
        ]
      }
    );
  }
);
CircleCheck.displayName = "CircleCheck";
var CircleChevronDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 10 3.76 3.9c.13.13.34.13.48 0L16 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 })
        ]
      }
    );
  }
);
CircleChevronDown.displayName = "CircleChevronDown";
var CircleChevronUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 14 3.65-3.65a.5.5 0 0 1 .7 0L16 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" })
        ]
      }
    );
  }
);
CircleChevronUp.displayName = "CircleChevronUp";
var ClockArrowLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 12a10 10 0 1 0-10 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 13-3.91 3.9q-.18.1 0 .2L18 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 17h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 6v5l1 1" })
        ]
      }
    );
  }
);
ClockArrowLeft.displayName = "ClockArrowLeft";
var ColumnChartPlainIncreasing = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 21v-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21V9" })
        ]
      }
    );
  }
);
ColumnChartPlainIncreasing.displayName = "ColumnChartPlainIncreasing";
var ColumnChart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 3v17a1 1 0 0 0 1 1h17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 17v-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 5v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 17V9" })
        ]
      }
    );
  }
);
ColumnChart.displayName = "ColumnChart";
var Columns2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v18" })
        ]
      }
    );
  }
);
Columns2.displayName = "Columns2";
var Columns3 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3v18" })
        ]
      }
    );
  }
);
Columns3.displayName = "Columns3";
var Compass = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13.05 14.32-4.67 1.55a.2.2 0 0 1-.25-.25l1.56-4.67a2 2 0 0 1 1.26-1.27l4.67-1.55a.2.2 0 0 1 .25.25l-1.55 4.67a2 2 0 0 1-1.27 1.27" })
        ]
      }
    );
  }
);
Compass.displayName = "Compass";
var CreditCard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 10v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7M2 10V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3M2 10h20" })
      }
    );
  }
);
CreditCard.displayName = "CreditCard";
var Download = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 10 5.3 5.3a1 1 0 0 0 1.4 0L18 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v11" })
        ]
      }
    );
  }
);
Download.displayName = "Download";
var DraftBook = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 18v2a2 2 0 0 0 2 2h13.86M4 18h15.86M4 18V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.86a.14.14 0 0 1-.14.14m.14 4h-.14m0-4-.58.54a2 2 0 0 0 0 2.92l.58.54" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.28M12 6h3.5a.5.5 0 0 1 .5.5v1.28" })
        ]
      }
    );
  }
);
DraftBook.displayName = "DraftBook";
var Eraser = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 21h-9m0 0H8.46a1 1 0 0 1-.76-.35L2.6 14.7a1 1 0 0 1 .06-1.35L13.29 2.7a1 1 0 0 1 1.42 0l7.12 7.12a1 1 0 0 1 .03 1.38z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5.64 10.59 14 19" })
        ]
      }
    );
  }
);
Eraser.displayName = "Eraser";
var ExternalLink = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 13v7.58c0 .23-.19.42-.42.42H3.42a.4.4 0 0 1-.42-.42V6.42c0-.23.19-.42.42-.42H11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3h5.5a.5.5 0 0 1 .5.5V9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 14 20 4" })
        ]
      }
    );
  }
);
ExternalLink.displayName = "ExternalLink";
var EyeClosed = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 8c0 3.31-4.03 6-9 6s-9-2.69-9-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m5 12-3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19 12 3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 14-1 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 14 1 4" })
        ]
      }
    );
  }
);
EyeClosed.displayName = "EyeClosed";
var Eye = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 3 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12C5 6.72 13.2-.68 22 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 12.02c-3 5.29-11.2 12.68-20 0" })
        ]
      }
    );
  }
);
Eye.displayName = "Eye";
var FileVolume = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 10V4a2 2 0 0 1 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2h-3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 2v5a2 2 0 0 0 2 2h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 19.07v-3.14a1 1 0 0 1 1-1h1.4a1 1 0 0 0 .66-.24l1.11-.97a.5.5 0 0 1 .83.38v6.95a.5.5 0 0 1-.78.4l-1.74-1.2a1 1 0 0 0-.57-.18H4a1 1 0 0 1-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.99 14.53c.76.79 1.82 2.98.02 5.5" })
        ]
      }
    );
  }
);
FileVolume.displayName = "FileVolume";
var File = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 4a2 2 0 0 1 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 2v5a2 2 0 0 0 2 2h5" })
        ]
      }
    );
  }
);
File.displayName = "File";
var Folder = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 7a2 2 0 0 1 2-2h2.4a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
      }
    );
  }
);
Folder.displayName = "Folder";
var Frown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 10, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 10, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 16a4.6 4.6 0 0 1 8 0" })
        ]
      }
    );
  }
);
Frown.displayName = "Frown";
var Gem = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12.02 21.98a.02.02 0 0 1-.04 0L2.02 9.03A.02.02 0 0 1 2.04 9h19.92a.02.02 0 0 1 .02.03z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 9 3.4-5.11A2 2 0 0 1 7.08 3h9.86a2 2 0 0 1 1.66.89L22 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.67 3 8.3 8.3a2 2 0 0 0-.07 1.44L12 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13.33 3 2.36 5.3a2 2 0 0 1 .07 1.44L12 21" })
        ]
      }
    );
  }
);
Gem.displayName = "Gem";
var GenericLayout = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 9v12" })
        ]
      }
    );
  }
);
GenericLayout.displayName = "GenericLayout";
var Gift = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 10, x: 4, y: 11, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5.5 11H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 7v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 7 5.85 4.85A1.67 1.67 0 0 1 7.03 2h.42q.55 0 1.04.25l.34.16c.76.38 1.38 1 1.76 1.76L12 7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 7 2.15-2.15A1.67 1.67 0 0 0 16.97 2h-.42q-.55 0-1.04.25l-.34.16c-.76.38-1.38 1-1.76 1.76L12 7" })
        ]
      }
    );
  }
);
Gift.displayName = "Gift";
var GlobeCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.05A10 10 0 1 0 22 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.32C9.28 3.42 8 7.33 8 12c0 5.52 1.79 10 4 10s4-4.48 4-10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 6 2.62 1.75a.5.5 0 0 0 .67-.1L20 3" })
        ]
      }
    );
  }
);
GlobeCheck.displayName = "GlobeCheck";
var GlobeLock = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.8 14A10 10 0 1 1 11 2.05" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.32C9.28 3.42 8 7.33 8 12c0 5.52 1.79 10 4 10 1.64 0 3.38-3.47 4-7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 8, height: 5, x: 13, y: 6, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 5V4a2 2 0 1 1 4 0v1" })
        ]
      }
    );
  }
);
GlobeLock.displayName = "GlobeLock";
var GlobeOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.17 16a10 10 0 0 0 .83-4A10 10 0 0 0 12 2a10 10 0 0 0-4 .83" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4.86 5A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 7-2.86" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 12h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.98 11c-.1-2.52-.62-4.74-1.36-6.36C13.76 2.7 12.76 2 12 2s-1.75.71-2.62 2.64" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8.2 9a23 23 0 0 0-.2 3c0 2.93.54 5.53 1.38 7.36C10.25 21.3 11.25 22 12 22s1.75-.71 2.63-2.64c.42-.93.77-2.08 1.01-3.36" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
GlobeOff.displayName = "GlobeOff";
var GlobeX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.05A10 10 0 1 0 22 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.32C9.28 3.42 8 7.33 8 12c0 5.52 1.79 10 4 10s4-4.48 4-10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 3 5 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 8 5-5" })
        ]
      }
    );
  }
);
GlobeX.displayName = "GlobeX";
var Globe = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 2c.75 0 1.75.71 2.63 2.64C15.46 6.47 16 9.07 16 12s-.54 5.53-1.37 7.36C13.75 21.3 12.75 22 12 22s-1.75-.71-2.62-2.64C8.54 17.53 8 14.93 8 12s.54-5.53 1.38-7.36C10.25 2.7 11.25 2 12 2" })
        ]
      }
    );
  }
);
Globe.displayName = "Globe";
var Grid2x2Plus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" })
        ]
      }
    );
  }
);
Grid2x2Plus.displayName = "Grid2x2Plus";
var Grid2x2X = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 16 6 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 21 6-5" })
        ]
      }
    );
  }
);
Grid2x2X.displayName = "Grid2x2X";
var Grid2x2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v18" })
        ]
      }
    );
  }
);
Grid2x2.displayName = "Grid2x2";
var Grid3x3Plus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" })
        ]
      }
    );
  }
);
Grid3x3Plus.displayName = "Grid3x3Plus";
var Grid3x3 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15h18" })
        ]
      }
    );
  }
);
Grid3x3.displayName = "Grid3x3";
var Handbag = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.25 21H3.75a1.5 1.5 0 0 1-1.48-1.73L3.74 9.7A2 2 0 0 1 5.72 8h12.56a2 2 0 0 1 1.98 1.7l1.47 9.57A1.5 1.5 0 0 1 20.25 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 12V6a4 4 0 0 0-8 0v6" })
        ]
      }
    );
  }
);
Handbag.displayName = "Handbag";
var Hashtag = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 9h16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 15h16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 21 3-18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 21 3-18" })
        ]
      }
    );
  }
);
Hashtag.displayName = "Hashtag";
var HeartCrack = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16a.3.3 0 0 0 .38 0l8.1-7.16A5 5 0 0 0 22 9.87c0-4.6-5.64-6.82-8.77-3.45L12.04 7.7z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 8-1 1.98a.02.02 0 0 0 .02.03l1.96.98v.03l-1.97 1.97V13L13 15" })
        ]
      }
    );
  }
);
HeartCrack.displayName = "HeartCrack";
var HeartOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16.73 16.82-4.54 4a.3.3 0 0 1-.38 0l-8.1-7.15A5 5 0 0 1 2 9.87C2 7.67 3.3 6 5 5.25" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19 14.81 1.29-1.14A5 5 0 0 0 22 9.87c0-4.6-5.64-6.82-8.77-3.45L12.04 7.7h-.08l-1.19-1.27a5 5 0 0 0-1.27-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
HeartOff.displayName = "HeartOff";
var Heart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.G, { clipPath: "url(#a)", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16a.3.3 0 0 0 .38 0l8.1-7.16A5 5 0 0 0 22 9.87c0-4.6-5.64-6.81-8.77-3.45L12.04 7.7z" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, { children: /* @__PURE__ */ jsxRuntime.jsx(Svg.ClipPath, { id: "a", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
Heart.displayName = "Heart";
var Home = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9.47a1 1 0 0 1 .36-.77l8-6.67a1 1 0 0 1 1.28 0l8 6.67a1 1 0 0 1 .36.77V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" })
        ]
      }
    );
  }
);
Home.displayName = "Home";
var Info = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 8, r: 0.5 })
        ]
      }
    );
  }
);
Info.displayName = "Info";
var KeyRound = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 8q0 1.21.45 2.28c.18.43.1.95-.24 1.26L2.33 18.7a1 1 0 0 0-.33.74V21a1 1 0 0 0 1 1h2.98l.02-.02v-1.96l.02-.02h2.96l.02-.02v-2.96l.02-.02h1.53a1 1 0 0 0 .75-.33l2.25-2.51c.27-.3.7-.4 1.1-.31Q15.3 14 16 14a6 6 0 1 0-6-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16.5, cy: 7.5, r: 0.5 })
        ]
      }
    );
  }
);
KeyRound.displayName = "KeyRound";
var Key = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 7.5, cy: 15.5, r: 5.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.5 11.5 20 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18.64 4.1 2.18 1.84a1 1 0 0 1 .08 1.45l-2.27 2.44a1 1 0 0 1-1.35.1l-1.99-1.55" })
        ]
      }
    );
  }
);
Key.displayName = "Key";
var LaughWink = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 9c.8-.77 2.24-1.38 4 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14" })
        ]
      }
    );
  }
);
LaughWink.displayName = "LaughWink";
var Laugh = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" })
        ]
      }
    );
  }
);
Laugh.displayName = "Laugh";
var LayoutDashboard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 9, x: 3, y: 3, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 9, x: 14, y: 12, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 5, x: 3, y: 16, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 5, x: 14, y: 3, rx: 0.5 })
        ]
      }
    );
  }
);
LayoutDashboard.displayName = "LayoutDashboard";
var LayoutGrid = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 3, y: 3, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 14, y: 3, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 3, y: 14, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 14, y: 14, rx: 0.5 })
        ]
      }
    );
  }
);
LayoutGrid.displayName = "LayoutGrid";
var LayoutList = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 3, y: 3, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 3, y: 14, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 20h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 15h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 9h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 4h7" })
        ]
      }
    );
  }
);
LayoutList.displayName = "LayoutList";
var LayoutPanelLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 3h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 18, x: 3, y: 3, rx: 1 })
        ]
      }
    );
  }
);
LayoutPanelLeft.displayName = "LayoutPanelLeft";
var LayoutPanelRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 3h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" })
        ]
      }
    );
  }
);
LayoutPanelRight.displayName = "LayoutPanelRight";
var LayoutPanelTop = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 7, x: 3, y: 3, rx: 1 })
        ]
      }
    );
  }
);
LayoutPanelTop.displayName = "LayoutPanelTop";
var LayoutTemplate = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.71 14H4.3c-.72 0-1.3.45-1.3 1v5c0 .55.58 1 1.29 1h6.42c.71 0 1.29-.45 1.29-1v-5c0-.55-.58-1-1.29-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.29 14H16.7c-.39 0-.71.45-.71 1v5c0 .55.32 1 .71 1h3.58c.39 0 .71-.45.71-1v-5c0-.55-.32-1-.71-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" })
        ]
      }
    );
  }
);
LayoutTemplate.displayName = "LayoutTemplate";
var Link2Off = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 17a5 5 0 0 0 0-10h-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 17H7A5 5 0 0 1 7 7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 12h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
Link2Off.displayName = "Link2Off";
var Link2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 7H7a5 5 0 0 0 0 10h1m8-10h1a5 5 0 0 1 0 10h-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 12h9" })
        ]
      }
    );
  }
);
Link2.displayName = "Link2";
var ListChevronsDownUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 19 3.25-2.9a.4.4 0 0 1 .5 0L21 19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 19h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 5 3.25 2.9a.4.4 0 0 0 .5 0L21 5" })
        ]
      }
    );
  }
);
ListChevronsDownUp.displayName = "ListChevronsDownUp";
var ListChevronsUpDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 8 3.25-2.9a.4.4 0 0 1 .5 0L21 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 16 3.25 2.9a.4.4 0 0 0 .5 0L21 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 19h7" })
        ]
      }
    );
  }
);
ListChevronsUpDown.displayName = "ListChevronsUpDown";
var ListFilter = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 5h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 12h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 19h4" })
        ]
      }
    );
  }
);
ListFilter.displayName = "ListFilter";
var ListOrdered = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 5h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 12h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 19h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4.5 4h1a.5.5 0 0 1 .5.5V10m0 0H4.5M6 10h1.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4.5 15.29.63-.54a1.63 1.63 0 1 1 2.12 2.47L6 18.29l-.97.83a.5.5 0 0 0 .32.88H9" })
        ]
      }
    );
  }
);
ListOrdered.displayName = "ListOrdered";
var ListTodo = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 5h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 12h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 19h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 6, x: 3, y: 4, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 18 1.65 1.65a.5.5 0 0 0 .7 0L9 16" })
        ]
      }
    );
  }
);
ListTodo.displayName = "ListTodo";
var List = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 3, cy: 5, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 3, cy: 12, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 3, cy: 19, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 5h13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 12h13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 19h13" })
        ]
      }
    );
  }
);
List.displayName = "List";
var LockKeyhole = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 10H4c-.55 0-1 .49-1 1.09v9.82c0 .6.45 1.09 1 1.09h16c.55 0 1-.49 1-1.09v-9.82c0-.6-.45-1.09-1-1.09" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 10V6.44C7 4 9.24 2 12 2s5 1.99 5 4.44V10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 16, r: 1 })
        ]
      }
    );
  }
);
LockKeyhole.displayName = "LockKeyhole";
var LockOpenKeyhole = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 10H4c-.55 0-1 .49-1 1.09v9.82c0 .6.45 1.09 1 1.09h16c.55 0 1-.49 1-1.09v-9.82c0-.6-.45-1.09-1-1.09" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.87 5c-.52-1.87-2.5-3-4.87-3-2.76 0-5 1.99-5 4.44V10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" })
        ]
      }
    );
  }
);
LockOpenKeyhole.displayName = "LockOpenKeyhole";
var LockOpen = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 11H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 6a5.1 5.1 0 0 0-5-4 5 5 0 0 0-5 5v4" })
        ]
      }
    );
  }
);
LockOpen.displayName = "LockOpen";
var Lock = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 11, x: 3, y: 11, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 11V7a5 5 0 0 1 10 0v4" })
        ]
      }
    );
  }
);
Lock.displayName = "Lock";
var LogIn = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 7 5.08 4.23a1 1 0 0 1 0 1.54L10 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h11" })
        ]
      }
    );
  }
);
LogIn.displayName = "LogIn";
var LogOut = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 7 5.08 4.23a1 1 0 0 1 0 1.54L16 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12h11" })
        ]
      }
    );
  }
);
LogOut.displayName = "LogOut";
var MailCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 19 2.99 1.99H18L22 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" })
        ]
      }
    );
  }
);
MailCheck.displayName = "MailCheck";
var MailMinus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" })
        ]
      }
    );
  }
);
MailMinus.displayName = "MailMinus";
var MailOpen = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 10.89a2 2 0 0 1 .66-1.49l8-7.2a2 2 0 0 1 2.68 0l8 7.2a2 2 0 0 1 .66 1.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 10 7.89 5.26a2 2 0 0 0 2.22 0L21 10" })
        ]
      }
    );
  }
);
MailOpen.displayName = "MailOpen";
var MailPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" })
        ]
      }
    );
  }
);
MailPlus.displayName = "MailPlus";
var MailX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 17 4 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 21 4-4" })
        ]
      }
    );
  }
);
MailX.displayName = "MailX";
var Mail = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 18V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" })
        ]
      }
    );
  }
);
Mail.displayName = "Mail";
var MapPinCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64a.05.05 0 0 0 .08 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 9.5 1.56 1.46h.07L14 8" })
        ]
      }
    );
  }
);
MapPinCheck.displayName = "MapPinCheck";
var MapPin = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64a.05.05 0 0 0 .08 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 9, r: 2 })
        ]
      }
    );
  }
);
MapPin.displayName = "MapPin";
var MapPinned = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12.04 12.94 3.2-5.03a3.84 3.84 0 1 0-6.48 0l3.2 5.03a.04.04 0 0 0 .08 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 5.5, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 21 5.19-1.78a2 2 0 0 1 1.27-.01l4.83 1.59a2 2 0 0 0 1.25 0L21 19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 11v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 14v7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 11v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 14v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 10.5 3 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 12.5 1.19.82a2 2 0 0 0 2.05.13L21 11" })
        ]
      }
    );
  }
);
MapPinned.displayName = "MapPinned";
var Map = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 8 4.74-3.25a2 2 0 0 1 2.2-.05l4.12 2.6a2 2 0 0 0 2.2-.04L21 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 20 4.93-2.54a2 2 0 0 1 1.8-.02l4.3 2.12a2 2 0 0 0 1.77 0L21 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 4v13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 5v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 8v11" })
        ]
      }
    );
  }
);
Map.displayName = "Map";
var MehBlank = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" })
        ]
      }
    );
  }
);
MehBlank.displayName = "MehBlank";
var Meh = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15h10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" })
        ]
      }
    );
  }
);
Meh.displayName = "Meh";
var MenuHorizontal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 5, cy: 12, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 19, cy: 12, r: 1 })
        ]
      }
    );
  }
);
MenuHorizontal.displayName = "MenuHorizontal";
var MenuVertical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 2, height: 2, x: 11, y: 4, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 2, height: 2, x: 11, y: 11, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 2, height: 2, x: 11, y: 18, rx: 1 })
        ]
      }
    );
  }
);
MenuVertical.displayName = "MenuVertical";
var Menu = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5h15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 12h15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 19h15" })
        ]
      }
    );
  }
);
Menu.displayName = "Menu";
var MicOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.17 4A3 3 0 0 1 15 5v5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 14.24A3 3 0 0 1 9 12V9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18.84 13.5q.16-.73.16-1.5v-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 10v2a7 7 0 0 0 7 7m4-1.25A7 7 0 0 1 12 19m0 0v3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
MicOff.displayName = "MicOff";
var MicVintage = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12a3 3 0 1 0 6 0V5a3 3 0 1 0-6 0m0 7V8.5M9 12h2M9 5v3.5M9 5h2M9 8.5h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 10v2a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7v-2m-7 9v3" })
        ]
      }
    );
  }
);
MicVintage.displayName = "MicVintage";
var Mic = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 13, x: 9, y: 2, rx: 3 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 10v2a7 7 0 0 0 7 7m7-9v2a7 7 0 0 1-7 7m0 0v3" })
        ]
      }
    );
  }
);
Mic.displayName = "Mic";
var MoonStar = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.37-1.16-.99-1.08A9 9 0 0 0 12 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.54 3.26a1 1 0 0 0 .95.7h1.73l-1.4 1.01a1 1 0 0 0-.37 1.12L21 7.74l-1.4-1.02a1 1 0 0 0-1.18 0l-1.4 1.02.54-1.65a1 1 0 0 0-.37-1.12l-1.4-1.02h1.73a1 1 0 0 0 .95-.69L19 1.62z" })
        ]
      }
    );
  }
);
MoonStar.displayName = "MoonStar";
var Moon = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.37-1.16-.99-1.08A9 9 0 0 0 12 21" })
      }
    );
  }
);
Moon.displayName = "Moon";
var MousePointer = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.95 19.88 3.05 3.1a.05.05 0 0 1 .06-.07l16.77 6.9a.05.05 0 0 1 0 .1l-6.43 2.14a2 2 0 0 0-1.27 1.27l-2.14 6.42a.05.05 0 0 1-.1 0Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 13 6 6" })
        ]
      }
    );
  }
);
MousePointer.displayName = "MousePointer";
var Navigation2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.98 2.04a.02.02 0 0 1 .04 0l7.96 18.92-.02.02-7.6-2.85a1 1 0 0 0-.71 0l-7.6 2.85a.02.02 0 0 1-.03-.02z" })
      }
    );
  }
);
Navigation2.displayName = "Navigation2";
var Navigation = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.G, { clipPath: "url(#a)", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21.96 2.02.02.02-7.96 18.91a.02.02 0 0 1-.04 0l-2.84-7.58a1 1 0 0 0-.5-.55l-7.6-3.8a.02.02 0 0 1 0-.04z" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, { children: /* @__PURE__ */ jsxRuntime.jsx(Svg.ClipPath, { id: "a", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
Navigation.displayName = "Navigation";
var Notification = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 9a7 7 0 0 1 14 0v4.06a4 4 0 0 0 .42 1.79l1.16 2.3a4 4 0 0 1 .42 1.8V19H3v-.06a4 4 0 0 1 .42-1.79l1.16-2.3a4 4 0 0 0 .42-1.8z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 22h4" })
        ]
      }
    );
  }
);
Notification.displayName = "Notification";
var PackageCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15.38 20.13-1.13.62-1.28.71a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82V8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18V11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 16 1.84 1.84a.2.2 0 0 0 .3-.02L22 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3.5 7.5 7.56 4a2 2 0 0 0 1.88 0l7.56-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12v9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8.5 4.5 8 5" })
        ]
      }
    );
  }
);
PackageCheck.displayName = "PackageCheck";
var PaintBucket = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 5 2.3-2.3a1 1 0 0 1 1.4 0l6.95 6.95a.5.5 0 0 1 0 .7l-8.03 8.03a3 3 0 0 1-4.24 0l-3.76-3.76a3 3 0 0 1 0-4.24L7 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 3.5 3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 12.5h14.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.98 15.06a.02.02 0 0 1 .04 0l1.35 4.04a1.44 1.44 0 1 1-2.74 0z" })
        ]
      }
    );
  }
);
PaintBucket.displayName = "PaintBucket";
var Paperclip = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 6.21v9.58a2 2 0 0 0 4 0V6a4 4 0 0 0-8 0v10a6 6 0 0 0 12 0V6.21" })
      }
    );
  }
);
Paperclip.displayName = "Paperclip";
var PenLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Svg.G, { clipPath: "url(#a)", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35q-.11.12-.18.28l-2.28 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .39-.26Z" }),
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21h9" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, { children: /* @__PURE__ */ jsxRuntime.jsx(Svg.ClipPath, { id: "a", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
PenLine.displayName = "PenLine";
var PenTool = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.73 16.34 6.1 14.33a1 1 0 0 1-.57-.68L2.8 2.85l.02-.02 10.82 2.68a1 1 0 0 1 .67.56l2.07 4.6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 10, height: 4, x: 10.66, y: 17.68, rx: 1, transform: "rotate(-45.78 10.66 17.68)" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3.53 3.53 4.5 4.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8.53, cy: 8.53, r: 0.5 })
        ]
      }
    );
  }
);
PenTool.displayName = "PenTool";
var Pencil = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35q-.11.12-.18.28l-2.28 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .39-.26Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.5 4.5 19 8" })
        ]
      }
    );
  }
);
Pencil.displayName = "Pencil";
var PhoneCall = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 6a4.18 4.18 0 0 1 5 4.1v.9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 2h1a7 7 0 0 1 7 7v2" })
        ]
      }
    );
  }
);
PhoneCall.displayName = "PhoneCall";
var PhoneForward = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.87a.2.2 0 0 1-.18 0 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3a1 1 0 0 0-1-1.03" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 6h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 2 3.82 3.6c.24.22.24.58 0 .8L18 10" })
        ]
      }
    );
  }
);
PhoneForward.displayName = "PhoneForward";
var PhoneIncoming = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.87a.2.2 0 0 1-.18 0 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3a1 1 0 0 0-1-1.03" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v5a1 1 0 0 0 1 1h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 7 5-5" })
        ]
      }
    );
  }
);
PhoneIncoming.displayName = "PhoneIncoming";
var PhoneOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 13.33a19 19 0 0 0 3.91 2.62.2.2 0 0 0 .18 0l2.13-1.28a1 1 0 0 1 .6-.14l4.27.39a1 1 0 0 1 .91 1v5a1 1 0 0 1-1.1.97C14.3 21.15 9.8 19 6.88 16.25" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7.76 11-.38-.5-.29-.38a.2.2 0 0 1 0-.24L8.3 8.27a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1H3.3a.95.95 0 0 0-.95.8c-.47 3.08.02 6.8 2.15 10.12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 22 22 2" })
        ]
      }
    );
  }
);
PhoneOff.displayName = "PhoneOff";
var PhoneOutgoing = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.87a.2.2 0 0 1-.18 0 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3a1 1 0 0 0-1-1.03" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 8V3a1 1 0 0 0-1-1h-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21 3-5 5" })
        ]
      }
    );
  }
);
PhoneOutgoing.displayName = "PhoneOutgoing";
var PhoneX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 3 6 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21 3-6 6" })
        ]
      }
    );
  }
);
PhoneX.displayName = "PhoneX";
var Phone = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1" })
      }
    );
  }
);
Phone.displayName = "Phone";
var PieChart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 13.1v-.3A10.8 10.8 0 0 0 11.2 2h-.3a.94.94 0 0 0-.9.96V13a1 1 0 0 0 1 1h10.04c.5 0 .94-.38.96-.9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 17.63A9.8 9.8 0 0 1 11.83 22 9.83 9.83 0 0 1 2 12.17 9.8 9.8 0 0 1 6.37 4" })
        ]
      }
    );
  }
);
PieChart.displayName = "PieChart";
var Pin = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 4a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4 1 1 0 0 0-1 1v2.33a2 2 0 0 0 .4 1.2l2.2 2.94a2 2 0 0 1 .4 1.2V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.17a2 2 0 0 1 .59-1.42L8.4 11.6a2 2 0 0 0 .6-1.43V7a1 1 0 0 0-1-1 2 2 0 0 1-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 17v5" })
        ]
      }
    );
  }
);
Pin.displayName = "Pin";
var Pipette = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13.64 7.26 7.1 14.03l-.15.23L6 18m0 0c-2 2-.35.13 0 0m0 0 4.18-.7a1 1 0 0 0 .32-.2l6.36-6.6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15.31 5.41 2.7-2.7a2.34 2.34 0 0 1 3.27-.1c.92.87.96 2.3.09 3.2l-2.83 2.83" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.07 7.76a2 2 0 0 1-2.83 2.83l-2.83-2.83a2 2 0 0 1 2.83-2.83" })
        ]
      }
    );
  }
);
Pipette.displayName = "Pipette";
var PlaySquare = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 15.12V8.88c0-.28.3-.47.55-.33l5.25 2.77a.38.38 0 0 1 .03.65l-5.25 3.47a.37.37 0 0 1-.58-.32" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 20V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" })
        ]
      }
    );
  }
);
PlaySquare.displayName = "PlaySquare";
var Play = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 20.15V3.65a1 1 0 0 1 1.46-.88L20.5 10.1a1 1 0 0 1 .08 1.72L6.55 21A1 1 0 0 1 5 20.15" })
      }
    );
  }
);
Play.displayName = "Play";
var Plus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 5v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 12h14" })
        ]
      }
    );
  }
);
Plus.displayName = "Plus";
var Radio = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 20a10 10 0 0 0 4-8 10 10 0 0 0-4-8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 20a10 10 0 0 1-4-8 10 10 0 0 1 4-8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8.26 16.69A6 6 0 0 1 6 12c0-1.9.88-3.59 2.26-4.69" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.74 7.3A6 6 0 0 1 18 12a6 6 0 0 1-2.26 4.7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" })
        ]
      }
    );
  }
);
Radio.displayName = "Radio";
var RefreshCw = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.48 6.77a10.5 10.5 0 0 0-5.94-3.63 9 9 0 0 0-10.48 7.23" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.9 11.61a9 9 0 0 1-10.62 9.23C7.22 20.28 5.15 17.66 4 15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 14H3.5a.5.5 0 0 0-.5.5V19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 3v4.5a.5.5 0 0 1-.5.5H15" })
        ]
      }
    );
  }
);
RefreshCw.displayName = "RefreshCw";
var RotateCwSquare = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.5 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.25M11 5H7a2 2 0 0 0-2 2v3.25" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 2 2.3 2.3a1 1 0 0 1 0 1.4L9 8" })
        ]
      }
    );
  }
);
RotateCwSquare.displayName = "RotateCwSquare";
var Rows2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" })
        ]
      }
    );
  }
);
Rows2.displayName = "Rows2";
var Rows3 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15h18" })
        ]
      }
    );
  }
);
Rows3.displayName = "Rows3";
var Search = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11, cy: 11, r: 8 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.95 17.05 21 21" })
        ]
      }
    );
  }
);
Search.displayName = "Search";
var Send = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.7 12.48 2.77 21a.5.5 0 0 1-.7-.57l2.05-8.29v-.24L2.09 3.62a.5.5 0 0 1 .69-.58l18.91 8.53a.5.5 0 0 1 0 .9Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4.16 12.02h17.39" })
        ]
      }
    );
  }
);
Send.displayName = "Send";
var SettingsControl = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0H5" })
        ]
      }
    );
  }
);
SettingsControl.displayName = "SettingsControl";
var Settings = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82a2 2 0 0 0-3.09-1.68l-1.33.87a1 1 0 0 1-1.46-.43l-.94-2.1a1 1 0 0 1 .42-1.29l1.45-.8a2 2 0 0 0 0-3.5l-1.45-.8a1 1 0 0 1-.42-1.29l.94-2.1a1 1 0 0 1 1.46-.43l1.33.87a2 2 0 0 0 3.09-1.68V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82a2 2 0 0 0 3.09 1.68l1.33-.87a1 1 0 0 1 1.46.43l.94 2.1a1 1 0 0 1-.42 1.29l-1.45.8a2 2 0 0 0 0 3.5l1.45.8a1 1 0 0 1 .42 1.29l-.94 2.1a1 1 0 0 1-1.46.43l-1.33-.87a2 2 0 0 0-3.09 1.68V21a1 1 0 0 1-1 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 3 })
        ]
      }
    );
  }
);
Settings.displayName = "Settings";
var ShieldCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.26a.23.23 0 0 1 .23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6a.3.3 0 0 1 .35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3.23.23 0 0 1 .22.23v6.7A10.3 10.3 0 0 1 12.02 22h-.04A10.3 10.3 0 0 1 4 11.97z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 12 1.74 1.63a.5.5 0 0 0 .74-.07L15 9" })
        ]
      }
    );
  }
);
ShieldCheck.displayName = "ShieldCheck";
var ShieldQuestion = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.18a.23.23 0 0 1 .23-.23 11.4 11.4 0 0 0 6.79-2.29l.8-.6a.3.3 0 0 1 .35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3.23.23 0 0 1 .22.22v6.72a10.3 10.3 0 0 1-7.98 10.02h-.04A10.3 10.3 0 0 1 4 11.9z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.17 9A3 3 0 0 1 15 10c0 1.66-1.34 3.5-3 3.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 17, r: 0.5 })
        ]
      }
    );
  }
);
ShieldQuestion.displayName = "ShieldQuestion";
var ShoppingBag = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21 6-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM3 6h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10a4 4 0 0 1-8 0" })
        ]
      }
    );
  }
);
ShoppingBag.displayName = "ShoppingBag";
var ShoppingCart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 7h14.5a2 2 0 0 1 1.96 2.43l-1.11 5A2 2 0 0 1 18.4 16H8.6a2 2 0 0 1-1.95-1.57zm0 0L4 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 2h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 9, cy: 21, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 18, cy: 21, r: 1 })
        ]
      }
    );
  }
);
ShoppingCart.displayName = "ShoppingCart";
var SimCard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 4a2 2 0 0 1 2-2h9.35a2 2 0 0 1 1.62.83l4.65 6.42a2 2 0 0 1 .38 1.18V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 8, height: 9, x: 8, y: 9, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 9v2.98q0 .02.02.02H16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8.5 15h3.48l.02.02V18" })
        ]
      }
    );
  }
);
SimCard.displayName = "SimCard";
var SlidersHorizontal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 5V3m0 2v2m0-2h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 12v-2m0 2v2m0-2H3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12h9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 19h9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19v-2m0 2v2m0-2h5" })
        ]
      }
    );
  }
);
SlidersHorizontal.displayName = "SlidersHorizontal";
var SlidersVertical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 3v7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 14v7m0-7H3m2 0h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 8h2m-2 0h-2m2 0V3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12v9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 3v9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16h2m-2 0h-2m2 0v5" })
        ]
      }
    );
  }
);
SlidersVertical.displayName = "SlidersVertical";
var SmilePlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.95 11q.05.5.05 1A10 10 0 1 1 12 2q.5 0 1 .05" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15a6.15 6.15 0 0 0 10 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 2v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 5h6" })
        ]
      }
    );
  }
);
SmilePlus.displayName = "SmilePlus";
var SmileWink = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15a6.15 6.15 0 0 0 10 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13.42 9.5c.8-.77 2.26-1.38 4.02 0" })
        ]
      }
    );
  }
);
SmileWink.displayName = "SmileWink";
var Smile = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15a6.15 6.15 0 0 0 10 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 10, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 10, r: 0.5 })
        ]
      }
    );
  }
);
Smile.displayName = "Smile";
var Sparkles = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10.87 12.09-4.44-1.9a.2.2 0 0 1 0-.37l4.44-1.9a2 2 0 0 0 1.05-1.05l1.9-4.44a.2.2 0 0 1 .36 0l1.9 4.44a2 2 0 0 0 1.06 1.05l4.43 1.9a.2.2 0 0 1 0 .36l-4.44 1.9a2 2 0 0 0-1.05 1.06l-1.9 4.43a.2.2 0 0 1-.36 0l-1.9-4.43a2 2 0 0 0-1.06-1.05" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4.07 18.89-1.96-.84a.05.05 0 0 1 0-.1l1.96-.83a2 2 0 0 0 1.05-1.05l.83-1.96a.05.05 0 0 1 .1 0l.84 1.96a2 2 0 0 0 1.05 1.05l1.95.83a.05.05 0 0 1 0 .1l-1.96.84a2 2 0 0 0-1.05 1.05l-.83 1.95a.05.05 0 0 1-.1 0l-.84-1.95a2 2 0 0 0-1.05-1.05" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 4h4" })
        ]
      }
    );
  }
);
Sparkles.displayName = "Sparkles";
var Split = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 4 7.32 6.4a2 2 0 0 1 .68 1.5V22" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8V3.5a.5.5 0 0 1 .5-.5H8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 8V3.5a.5.5 0 0 0-.5-.5H16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m20 4-5 4" })
        ]
      }
    );
  }
);
Split.displayName = "Split";
var SquareActivity = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 11.98h1.35l.05-.04 1.33-4.9c.01-.05.09-.05.1 0l3.24 9.92c.01.05.08.05.1 0l2.01-4.94.05-.04H17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 })
        ]
      }
    );
  }
);
SquareActivity.displayName = "SquareActivity";
var SquareArrowOutUpLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9V3.5a.5.5 0 0 1 .5-.5H9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 4 8 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 13v7.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H13" })
        ]
      }
    );
  }
);
SquareArrowOutUpLeft.displayName = "SquareArrowOutUpLeft";
var SquareArrowOutUpRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 13v7.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5H11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3h5.5a.5.5 0 0 1 .5.5V9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 12 8-8" })
        ]
      }
    );
  }
);
SquareArrowOutUpRight.displayName = "SquareArrowOutUpRight";
var SquareArrowUpLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 10 5 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.5 21h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 15V9.5a.5.5 0 0 1 .5-.5H15" })
        ]
      }
    );
  }
);
SquareArrowUpLeft.displayName = "SquareArrowUpLeft";
var SquareArrowUpRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 9h5.7a.3.3 0 0 1 .3.3V15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 15 5-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.5 21h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5" })
        ]
      }
    );
  }
);
SquareArrowUpRight.displayName = "SquareArrowUpRight";
var SquareChevronDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 10 3.76 3.9c.13.13.34.13.48 0L16 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 1.5 })
        ]
      }
    );
  }
);
SquareChevronDown.displayName = "SquareChevronDown";
var SquareChevronUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 14 3.65-3.65a.5.5 0 0 1 .7 0L16 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 1 })
        ]
      }
    );
  }
);
SquareChevronUp.displayName = "SquareChevronUp";
var Star = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.95 2.15a.05.05 0 0 1 .1 0l2.4 7.42.06.03h7.8a.05.05 0 0 1 .03.1l-6.31 4.58-.02.05 2.4 7.42a.05.05 0 0 1-.07.06l-6.31-4.59h-.06l-6.31 4.59a.05.05 0 0 1-.08-.06L8 14.33l-.02-.05-6.3-4.59a.05.05 0 0 1 .02-.09h7.8l.05-.03z" })
      }
    );
  }
);
Star.displayName = "Star";
var SunDim = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 4, cy: 12, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 4, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 20, cy: 12, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 20, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6, cy: 6, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 18, cy: 6, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 18, cy: 18, r: 0.5 })
        ]
      }
    );
  }
);
SunDim.displayName = "SunDim";
var SunMoon = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.06 21c3.07 0 5.32-2.26 5.93-5.22.08-.41-.28-.77-.7-.75-5.73.23-5.68-3.17-5.36-5.3.06-.4-.26-.78-.67-.73a6.03 6.03 0 0 0 .8 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.97 12C15.8 10 15 8.07 12 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 4V2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 12h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 6.5 19.5 5" })
        ]
      }
    );
  }
);
SunMoon.displayName = "SunMoon";
var Sun = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 4 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 4V2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 20v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 12H2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 12h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6.5 5.5 5 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17.5 5.5 19 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18.5 18.5 20 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 20 1.5-1.5" })
        ]
      }
    );
  }
);
Sun.displayName = "Sun";
var SwapHorizontal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 3 4.13 6.8c-.17.11-.17.29 0 .4L8 11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 7h14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 13 3.65 3.65a.5.5 0 0 1 0 .7L16 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 17h14" })
        ]
      }
    );
  }
);
SwapHorizontal.displayName = "SwapHorizontal";
var SwapVertical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 4v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 16 3.65 3.65a.5.5 0 0 0 .7 0L11 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 8 3.65-3.65a.5.5 0 0 1 .7 0L21 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 6v14" })
        ]
      }
    );
  }
);
SwapVertical.displayName = "SwapVertical";
var TagPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.5 9.01a1 1 0 0 0 1.4-.04L17.27 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 8v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 11h6" })
        ]
      }
    );
  }
);
TagPlus.displayName = "TagPlus";
var TagX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.5 9.01a1 1 0 0 0 1.4-.04L17.27 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 13 4-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 9 4 4" })
        ]
      }
    );
  }
);
TagX.displayName = "TagX";
var Tags = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 9.33V2.77c0-.43.34-.77.77-.77h6.18q.3 0 .53.21l7.28 6.92c.3.3.32.78.03 1.08l-6.2 6.55a.77.77 0 0 1-1.09.03l-7.26-6.9A.8.8 0 0 1 7 9.32" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8v3.17a2 2 0 0 0 .59 1.42l7.4 7.4a2 2 0 0 0 2.3.37L14 20" })
        ]
      }
    );
  }
);
Tags.displayName = "Tags";
var Target = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 6 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 2 })
        ]
      }
    );
  }
);
Target.displayName = "Target";
var ThumbsDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4m0 12h-.26a1 1 0 0 0-.96.7l-2.16 6.93a.37.37 0 0 1-.48.24 4.1 4.1 0 0 1-2.66-3.4l-.4-3.66a.9.9 0 0 0-.9-.81h-6a1 1 0 0 1-.99-1.16l1.67-10A1 1 0 0 1 4.85 2H17m0 12V2" })
      }
    );
  }
);
ThumbsDown.displayName = "ThumbsDown";
var ThumbsUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4m0-12h.27a1 1 0 0 0 .95-.7l2.16-6.93a.37.37 0 0 1 .48-.24 4.1 4.1 0 0 1 2.66 3.4l.4 3.66a.9.9 0 0 0 .9.81h6a1 1 0 0 1 .99 1.16l-1.67 10a1 1 0 0 1-.99.84H7m0-12v12" })
      }
    );
  }
);
ThumbsUp.displayName = "ThumbsUp";
var Trash2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 6h2m0 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6m2 0h-2m0 0h-3M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 11v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 11v6" })
        ]
      }
    );
  }
);
Trash2.displayName = "Trash2";
var Trash = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 6h2m16 0h-2M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8M8 6H5m11 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6" })
      }
    );
  }
);
Trash.displayName = "Trash";
var TruckElectric = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 18H4a2 2 0 0 1-2-2v-5m12 7V6a2 2 0 0 0-2-2H8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 2 2.13 5.74a.12.12 0 0 0 .14.17l2.51-.84a.12.12 0 0 1 .16.15L4 8.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 18h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14" })
        ]
      }
    );
  }
);
TruckElectric.displayName = "TruckElectric";
var Truck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 7, cy: 18, r: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17, cy: 18, r: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 18H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 18h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14" })
        ]
      }
    );
  }
);
Truck.displayName = "Truck";
var Upload = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 8 4.65-4.65a.5.5 0 0 1 .7 0L17 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 4v11" })
        ]
      }
    );
  }
);
Upload.displayName = "Upload";
var UserCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 10, cy: 8, r: 5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 14.76A8 8 0 0 0 2 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 19.33 1.6 1.34a.5.5 0 0 0 .72-.07L22 16" })
        ]
      }
    );
  }
);
UserCheck.displayName = "UserCheck";
var User = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 8, r: 5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 21a8 8 0 1 0-16 0" })
        ]
      }
    );
  }
);
User.displayName = "User";
var Users = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 10, cy: 8, r: 5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 21a8 8 0 1 0-16 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 4c.83 1.33 2 4.9 0 8.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 12.5c1.5 1.33 4.4 4.9 4 8.5" })
        ]
      }
    );
  }
);
Users.displayName = "Users";
var Van = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 18H4c-1.1 0-2-.77-2-1.71V7.7C2 6.77 2.9 6 4 6h11.56a2 2 0 0 1 1.9 1.37L19 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 18h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.55 18H20a2 2 0 0 0 2-2v-.7a3 3 0 0 0-.83-2.08l-.28-.3a3 3 0 0 0-2.17-.92H14a1 1 0 0 1-1-1V6" })
        ]
      }
    );
  }
);
Van.displayName = "Van";
var VideoCamera = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14.21 7H4.8a.77.77 0 0 0-.79.75v7.5c0 .41.35.75.79.75h9.42c.44 0 .79-.34.79-.75v-7.5a.77.77 0 0 0-.79-.75" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 12.1 3.7 1.8c.56.26 1.3-.02 1.3-.5V9.6c0-.48-.74-.76-1.3-.5L15 10.9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 21 2.14-3.57a1 1 0 0 1 1.72 0L13 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6.5, cy: 3.5, r: 1.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11.5, cy: 3.5, r: 1.5 })
        ]
      }
    );
  }
);
VideoCamera.displayName = "VideoCamera";
var Video = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 14, height: 12, x: 2, y: 6, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 13 4.45 2.96a1 1 0 0 0 1.55-.83V8.87a1 1 0 0 0-1.55-.83L16 11" })
        ]
      }
    );
  }
);
Video.displayName = "Video";
var Volume1 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15.57V8.43a1 1 0 0 1 1-1h4.22a1 1 0 0 0 .6-.2l3.38-2.6a.5.5 0 0 1 .8.39V19.1a.5.5 0 0 1-.76.42l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 7c1.17 1.33 2.8 5.2 0 10" })
        ]
      }
    );
  }
);
Volume1.displayName = "Volume1";
var Volume2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15V9a1 1 0 0 1 1-1h3.67a1 1 0 0 0 .6-.2l2.93-2.2a.5.5 0 0 1 .8.4v12.12a.5.5 0 0 1-.76.43l-4-2.4a1 1 0 0 0-.52-.15H3a1 1 0 0 1-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 9c.83 1 2 3.6 0 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 5c2.33 2.33 5.6 8.4 0 14" })
        ]
      }
    );
  }
);
Volume2.displayName = "Volume2";
var VolumeOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.72a1 1 0 0 1 .52.14l4 2.4a.5.5 0 0 0 .76-.42V12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 5.75.2-.15a.5.5 0 0 1 .8.4v1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 9a5 5 0 0 1 1.09 3.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 5c1.92 1.92 4.47 6.37 2.2 11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
VolumeOff.displayName = "VolumeOff";
var VolumeX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15.57V8.43a1 1 0 0 1 1-1h4.22a1 1 0 0 0 .6-.2l3.38-2.6a.5.5 0 0 1 .8.39V19.1a.5.5 0 0 1-.76.42l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 9 6 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m22 9-6 6" })
        ]
      }
    );
  }
);
VolumeX.displayName = "VolumeX";
var Volume = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15.57V8.43a1 1 0 0 1 1-1h4.22a1 1 0 0 0 .6-.2l3.38-2.6a.5.5 0 0 1 .8.39V19.1a.5.5 0 0 1-.76.42l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1" })
      }
    );
  }
);
Volume.displayName = "Volume";
var Wand = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 12-9 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 9H8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 6-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 4V2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 9h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 14v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 12 1 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 6 1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 15, cy: 9, r: 0.5 })
        ]
      }
    );
  }
);
Wand.displayName = "Wand";
var X = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 6 12 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 6 6 18" })
        ]
      }
    );
  }
);
X.displayName = "X";

exports.Activity = Activity;
exports.Alert = Alert;
exports.Angry = Angry;
exports.Annoyed = Annoyed;
exports.ArrowLeft = ArrowLeft;
exports.ArrowLeftFromLine = ArrowLeftFromLine;
exports.ArrowLeftToLine = ArrowLeftToLine;
exports.ArrowRightFromLine = ArrowRightFromLine;
exports.ArrowRightToLine = ArrowRightToLine;
exports.ArrowUpFromLine = ArrowUpFromLine;
exports.ArrowUpLeft = ArrowUpLeft;
exports.ArrowUpRight = ArrowUpRight;
exports.ArrowUpToLine = ArrowUpToLine;
exports.BarChart = BarChart;
exports.BellRing = BellRing;
exports.Bookmark = Bookmark;
exports.Briefcase = Briefcase;
exports.BriefcaseConveyorBelt = BriefcaseConveyorBelt;
exports.BriefcaseMedical = BriefcaseMedical;
exports.Brush = Brush;
exports.Calendar = Calendar;
exports.CalendarCheck = CalendarCheck;
exports.CalendarDays = CalendarDays;
exports.CalendarX = CalendarX;
exports.Chat = Chat;
exports.Check = Check;
exports.ChevronDown = ChevronDown;
exports.ChevronUp = ChevronUp;
exports.ChevronsDown = ChevronsDown;
exports.ChevronsDownUp = ChevronsDownUp;
exports.ChevronsUp = ChevronsUp;
exports.ChevronsUpDown = ChevronsUpDown;
exports.CircleArrowLeft = CircleArrowLeft;
exports.CircleArrowOutUpLeft = CircleArrowOutUpLeft;
exports.CircleArrowOutUpRight = CircleArrowOutUpRight;
exports.CircleCheck = CircleCheck;
exports.CircleCheckBig = CircleCheckBig;
exports.CircleChevronDown = CircleChevronDown;
exports.CircleChevronUp = CircleChevronUp;
exports.ClockArrowLeft = ClockArrowLeft;
exports.ColumnChart = ColumnChart;
exports.ColumnChartPlainIncreasing = ColumnChartPlainIncreasing;
exports.Columns2 = Columns2;
exports.Columns3 = Columns3;
exports.Compass = Compass;
exports.CreditCard = CreditCard;
exports.Download = Download;
exports.DraftBook = DraftBook;
exports.Eraser = Eraser;
exports.ExternalLink = ExternalLink;
exports.Eye = Eye;
exports.EyeClosed = EyeClosed;
exports.File = File;
exports.FileVolume = FileVolume;
exports.Folder = Folder;
exports.Frown = Frown;
exports.Gem = Gem;
exports.GenericLayout = GenericLayout;
exports.Gift = Gift;
exports.Globe = Globe;
exports.GlobeCheck = GlobeCheck;
exports.GlobeLock = GlobeLock;
exports.GlobeOff = GlobeOff;
exports.GlobeX = GlobeX;
exports.Grid2x2 = Grid2x2;
exports.Grid2x2Plus = Grid2x2Plus;
exports.Grid2x2X = Grid2x2X;
exports.Grid3x3 = Grid3x3;
exports.Grid3x3Plus = Grid3x3Plus;
exports.Handbag = Handbag;
exports.Hashtag = Hashtag;
exports.Heart = Heart;
exports.HeartCrack = HeartCrack;
exports.HeartOff = HeartOff;
exports.Home = Home;
exports.Info = Info;
exports.Key = Key;
exports.KeyRound = KeyRound;
exports.Laugh = Laugh;
exports.LaughWink = LaughWink;
exports.LayoutDashboard = LayoutDashboard;
exports.LayoutGrid = LayoutGrid;
exports.LayoutList = LayoutList;
exports.LayoutPanelLeft = LayoutPanelLeft;
exports.LayoutPanelRight = LayoutPanelRight;
exports.LayoutPanelTop = LayoutPanelTop;
exports.LayoutTemplate = LayoutTemplate;
exports.Link2 = Link2;
exports.Link2Off = Link2Off;
exports.List = List;
exports.ListChevronsDownUp = ListChevronsDownUp;
exports.ListChevronsUpDown = ListChevronsUpDown;
exports.ListFilter = ListFilter;
exports.ListOrdered = ListOrdered;
exports.ListTodo = ListTodo;
exports.Lock = Lock;
exports.LockKeyhole = LockKeyhole;
exports.LockOpen = LockOpen;
exports.LockOpenKeyhole = LockOpenKeyhole;
exports.LogIn = LogIn;
exports.LogOut = LogOut;
exports.Mail = Mail;
exports.MailCheck = MailCheck;
exports.MailMinus = MailMinus;
exports.MailOpen = MailOpen;
exports.MailPlus = MailPlus;
exports.MailX = MailX;
exports.Map = Map;
exports.MapPin = MapPin;
exports.MapPinCheck = MapPinCheck;
exports.MapPinned = MapPinned;
exports.Meh = Meh;
exports.MehBlank = MehBlank;
exports.Menu = Menu;
exports.MenuHorizontal = MenuHorizontal;
exports.MenuVertical = MenuVertical;
exports.Mic = Mic;
exports.MicOff = MicOff;
exports.MicVintage = MicVintage;
exports.Moon = Moon;
exports.MoonStar = MoonStar;
exports.MousePointer = MousePointer;
exports.Navigation = Navigation;
exports.Navigation2 = Navigation2;
exports.Notification = Notification;
exports.PackageCheck = PackageCheck;
exports.PaintBucket = PaintBucket;
exports.Paperclip = Paperclip;
exports.PenLine = PenLine;
exports.PenTool = PenTool;
exports.Pencil = Pencil;
exports.Phone = Phone;
exports.PhoneCall = PhoneCall;
exports.PhoneForward = PhoneForward;
exports.PhoneIncoming = PhoneIncoming;
exports.PhoneOff = PhoneOff;
exports.PhoneOutgoing = PhoneOutgoing;
exports.PhoneX = PhoneX;
exports.PieChart = PieChart;
exports.Pin = Pin;
exports.Pipette = Pipette;
exports.Play = Play;
exports.PlaySquare = PlaySquare;
exports.Plus = Plus;
exports.Radio = Radio;
exports.RefreshCw = RefreshCw;
exports.RotateCwSquare = RotateCwSquare;
exports.Rows2 = Rows2;
exports.Rows3 = Rows3;
exports.Search = Search;
exports.Send = Send;
exports.Settings = Settings;
exports.SettingsControl = SettingsControl;
exports.ShieldCheck = ShieldCheck;
exports.ShieldQuestion = ShieldQuestion;
exports.ShoppingBag = ShoppingBag;
exports.ShoppingCart = ShoppingCart;
exports.SimCard = SimCard;
exports.SlidersHorizontal = SlidersHorizontal;
exports.SlidersVertical = SlidersVertical;
exports.Smile = Smile;
exports.SmilePlus = SmilePlus;
exports.SmileWink = SmileWink;
exports.Sparkles = Sparkles;
exports.Split = Split;
exports.SquareActivity = SquareActivity;
exports.SquareArrowOutUpLeft = SquareArrowOutUpLeft;
exports.SquareArrowOutUpRight = SquareArrowOutUpRight;
exports.SquareArrowUpLeft = SquareArrowUpLeft;
exports.SquareArrowUpRight = SquareArrowUpRight;
exports.SquareChevronDown = SquareChevronDown;
exports.SquareChevronUp = SquareChevronUp;
exports.Star = Star;
exports.Sun = Sun;
exports.SunDim = SunDim;
exports.SunMoon = SunMoon;
exports.SwapHorizontal = SwapHorizontal;
exports.SwapVertical = SwapVertical;
exports.TagPlus = TagPlus;
exports.TagX = TagX;
exports.Tags = Tags;
exports.Target = Target;
exports.ThumbsDown = ThumbsDown;
exports.ThumbsUp = ThumbsUp;
exports.Trash = Trash;
exports.Trash2 = Trash2;
exports.Truck = Truck;
exports.TruckElectric = TruckElectric;
exports.Upload = Upload;
exports.User = User;
exports.UserCheck = UserCheck;
exports.Users = Users;
exports.Van = Van;
exports.Video = Video;
exports.VideoCamera = VideoCamera;
exports.Volume = Volume;
exports.Volume1 = Volume1;
exports.Volume2 = Volume2;
exports.VolumeOff = VolumeOff;
exports.VolumeX = VolumeX;
exports.Wand = Wand;
exports.X = X;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map