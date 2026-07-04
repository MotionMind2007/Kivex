'use strict';

var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/icons/chat.tsx
var IconBase = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    children
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "svg",
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
        children
      }
    );
  }
);
IconBase.displayName = "IconBase";
var Chat = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V15.3043C22 16.4089 21.1046 17.3043 20 17.3043H12H7.65891C7.23095 17.3043 6.81428 17.4416 6.47012 17.696L2.7972 20.4108C2.46715 20.6547 2 20.4191 2 20.0087V6Z", stroke: "black", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 8L17 8", stroke: "black", strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 13H15", stroke: "black", strokeWidth: 2, strokeLinecap: "round" })
        ]
      }
    );
  }
);
Chat.displayName = "Chat";
var Close = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 7.75736, y: 6.34314, width: 14, height: 2, rx: 1, transform: "rotate(45 7.75736 6.34314)", fill: "black" }),
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 16.2426, y: 6.34314, width: 2, height: 14, rx: 1, transform: "rotate(45 16.2426 6.34314)", fill: "black" })
        ]
      }
    );
  }
);
Close.displayName = "Close";
var Dashboard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 3, y: 3, width: 7, height: 7, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 14, y: 3, width: 7, height: 7, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 3, y: 14, width: 7, height: 7, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 14, y: 14, width: 7, height: 7, rx: 1 })
        ]
      }
    );
  }
);
Dashboard.displayName = "Dashboard";
var DraftBook = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18V20C4 21.1046 4.89543 22 6 22H13.1429H17.7143H19.8571M4 18H13.1429H17.7143H19.8571M4 18V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V17.8571C20 17.936 19.936 18 19.8571 18M20 22H19.8571M19.8571 18L19.2808 18.5379C18.4337 19.3286 18.4337 20.6714 19.2808 21.4621L19.8571 22", stroke: "black", strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.6 14H12M14.4 14H12M12 14V6M12 6H8.5C8.22386 6 8 6.22386 8 6.5V7.77778M12 6H15.5C15.7761 6 16 6.22386 16 6.5V7.77778", stroke: "black", strokeWidth: 2, strokeLinecap: "round" })
        ]
      }
    );
  }
);
DraftBook.displayName = "DraftBook";
var File = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 4C4 2.89543 4.89543 2 6 2H12H13.1716C13.702 2 14.2107 2.21071 14.5858 2.58579L19.4142 7.41421C19.7893 7.78929 20 8.29799 20 8.82843V12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z", stroke: "black", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 2V7C13 8.10457 13.8954 9 15 9H20", stroke: "black", strokeWidth: 2 })
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
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 7C3 5.89543 3.89543 5 5 5H7.4C8.02951 5 8.62229 5.29639 9 5.8L10.05 7.2C10.4277 7.70361 11.0205 8 11.65 8H19C20.1046 8 21 8.89543 21 10V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V13.5V8.75V7Z", stroke: "black", strokeWidth: 2 })
      }
    );
  }
);
Folder.displayName = "Folder";
var Home = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 9.46838C3 9.1716 3.13182 8.89015 3.35982 8.70015L11.3598 2.03349C11.7307 1.72445 12.2693 1.72445 12.6402 2.03349L20.6402 8.70015C20.8682 8.89015 21 9.1716 21 9.46837V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.46838Z", stroke: "black", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 21V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V21", stroke: "black", strokeWidth: 2 })
        ]
      }
    );
  }
);
Home.displayName = "Home";
var MenuVertical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: 12, cy: 9, r: 1, fill: "black" }),
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: 12, cy: 12, r: 1, fill: "black" }),
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: 12, cy: 15, r: 1, fill: "black" })
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
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 4, y: 5, width: 16, height: 2, rx: 1, fill: "black" }),
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 4, y: 11, width: 16, height: 2, rx: 1, fill: "black" }),
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 4, y: 17, width: 16, height: 2, rx: 1, fill: "black" })
        ]
      }
    );
  }
);
Menu.displayName = "Menu";
var Notification = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V13.0557C19 13.6767 19.1446 14.2892 19.4223 14.8446L20.5777 17.1554C20.8554 17.7108 21 18.3233 21 18.9443V19H3V18.9443C3 18.3233 3.14458 17.7108 3.42229 17.1554L4.57771 14.8446C4.85542 14.2892 5 13.6767 5 13.0557V9Z", stroke: "black", strokeWidth: 2, strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 22H14", stroke: "black", strokeWidth: 2, strokeLinecap: "round" })
        ]
      }
    );
  }
);
Notification.displayName = "Notification";
var PenLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: "url(#clip0_47_35)", children: [
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8.21428 20.0643L21.1165 6.4117C22.155 5.31286 22.106 3.58026 21.0072 2.54182C19.9083 1.50338 18.1757 1.55234 17.1373 2.65117L4.18896 16.3525C4.11277 16.4332 4.05053 16.5259 4.00478 16.6269L1.72771 21.6562C1.54474 22.0603 1.93957 22.4848 2.35589 22.3316L7.83287 20.3159C7.97772 20.2626 8.10827 20.1765 8.21428 20.0643Z", stroke: "black", strokeWidth: 2 }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 21H21", stroke: "black", strokeWidth: 2, strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: "clip0_47_35", children: /* @__PURE__ */ jsxRuntime.jsx("rect", { width: 24, height: 24, fill: "white" }) }) })
        ]
      }
    );
  }
);
PenLine.displayName = "PenLine";
var PlayArrow = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.4183 11.7363C20.6175 11.8521 20.6172 12.1399 20.4179 12.2553L6.41609 20.3637C6.21599 20.4796 5.96555 20.3351 5.96575 20.1038L5.98014 3.86221C5.98034 3.63098 6.23104 3.4869 6.43094 3.60314L20.4183 11.7363Z", fill: "black" })
      }
    );
  }
);
PlayArrow.displayName = "PlayArrow";
var Plus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 11, y: 5, width: 2, height: 14, rx: 1, fill: "black" }),
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 19, y: 11, width: 2, height: 14, rx: 1, transform: "rotate(90 19 11)", fill: "black" })
        ]
      }
    );
  }
);
Plus.displayName = "Plus";
var Search = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: 11, cy: 11, r: 8, stroke: "black", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.9471 17.0541L21 21", stroke: "black", strokeWidth: 2, strokeLinecap: "round" })
        ]
      }
    );
  }
);
Search.displayName = "Search";
var Settings = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.3192 2C13.7332 2.00023 14.955 2.9877 15.2518 4.37012L15.3056 4.61914C15.4302 5.19874 16.0289 5.54288 16.5927 5.35938L16.6972 5.3252C18.06 4.8816 19.5463 5.46451 20.245 6.71582L20.621 7.3877C21.2895 8.58516 21.0605 10.0838 20.0653 11.0273L19.8056 11.2734C19.3896 11.6677 19.3888 12.3311 19.8046 12.7256L20.0663 12.9727C21.0609 13.9162 21.2891 15.4142 20.621 16.6113L20.246 17.2842C19.5472 18.5358 18.0601 19.1177 16.6972 18.6738L16.5927 18.6396C16.0288 18.4561 15.4301 18.801 15.3056 19.3809L15.2518 19.6299C14.9551 21.0123 13.7331 21.9998 12.3192 22H11.6825C10.2688 22 9.04722 21.013 8.7499 19.6309L8.69619 19.3809C8.57156 18.8011 7.97197 18.4559 7.4081 18.6396L7.30458 18.6738C5.94167 19.1179 4.45466 18.5356 3.75576 17.2842L3.38076 16.6113C2.71254 15.4141 2.94069 13.9162 3.93544 12.9727L4.19619 12.7256C4.61197 12.3312 4.61197 11.6688 4.19619 11.2744L3.93544 11.0273C2.94058 10.0837 2.71227 8.58496 3.38076 7.3877L3.75576 6.71582C4.45452 5.46434 5.94166 4.88244 7.30458 5.32617L7.4081 5.35938C7.97191 5.54294 8.57155 5.19883 8.69619 4.61914L8.7499 4.36914C9.04721 2.98706 10.2687 2 11.6825 2H12.3192ZM11.6825 4C11.2112 4 10.8041 4.32929 10.705 4.79004L10.6513 5.03906C10.2774 6.77815 8.4804 7.81241 6.78896 7.26172L6.68544 7.22754C6.23113 7.07963 5.73574 7.27425 5.50283 7.69141L5.12685 8.36328C4.90414 8.76235 4.9808 9.26166 5.3124 9.57617L5.57216 9.82324C6.81951 11.0063 6.81952 12.9937 5.57216 14.1768L5.3124 14.4238C4.98079 14.7383 4.90412 15.2376 5.12685 15.6367L5.50185 16.3086C5.73482 16.7259 6.23108 16.9206 6.68544 16.7725L6.78896 16.7383C8.48045 16.1873 10.2773 17.2208 10.6513 18.96L10.705 19.21C10.804 19.6707 11.2112 20 11.6825 20H12.3192C12.7904 19.9998 13.1978 19.6707 13.2968 19.21L13.3495 18.9609C13.7231 17.2214 15.52 16.1875 17.2118 16.7383L17.3163 16.7725C17.7707 16.9205 18.2659 16.7259 18.4989 16.3086L18.8749 15.6367C19.0976 15.2377 19.021 14.7383 18.6893 14.4238L18.4286 14.1758C17.1812 12.9924 17.1815 11.0052 18.4296 9.82227L18.6893 9.57617C19.0212 9.26164 19.0968 8.76149 18.8739 8.3623L18.4989 7.69043C18.2659 7.27356 17.7705 7.07972 17.3163 7.22754L17.2118 7.26172C15.5203 7.81231 13.7231 6.77832 13.3495 5.03906L13.2968 4.79004C13.1978 4.32934 12.7904 4.00023 12.3192 4H11.6825ZM12.0009 8.5C13.9338 8.50007 15.5009 10.067 15.5009 12C15.5009 13.933 13.9338 15.4999 12.0009 15.5C10.0679 15.5 8.50087 13.933 8.50087 12C8.50087 10.067 10.0679 8.5 12.0009 8.5ZM12.0009 10.5C11.1724 10.5 10.5009 11.1716 10.5009 12C10.5009 12.8284 11.1724 13.5 12.0009 13.5C12.8292 13.4999 13.5009 12.8284 13.5009 12C13.5009 11.1716 12.8292 10.5001 12.0009 10.5Z", fill: "black" })
      }
    );
  }
);
Settings.displayName = "Settings";
var Share = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
          /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "16 6 12 2 8 6" }),
          /* @__PURE__ */ jsxRuntime.jsx("line", { x1: 12, y1: 2, x2: 12, y2: 15 })
        ]
      }
    );
  }
);
Share.displayName = "Share";
var Users = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: 10, cy: 8, r: 5, stroke: "black", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 21C18 16.5817 14.4183 13 10 13C5.58172 13 2 16.5817 2 21", stroke: "black", strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 4C18.8333 5.33333 20 8.9 18 12.5", stroke: "black", strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 12.5C19.5 13.8333 22.4 17.4 22 21", stroke: "black", strokeWidth: 2, strokeLinecap: "round" })
        ]
      }
    );
  }
);
Users.displayName = "Users";

exports.Chat = Chat;
exports.Close = Close;
exports.Dashboard = Dashboard;
exports.DraftBook = DraftBook;
exports.File = File;
exports.Folder = Folder;
exports.Home = Home;
exports.Menu = Menu;
exports.MenuVertical = MenuVertical;
exports.Notification = Notification;
exports.PenLine = PenLine;
exports.PlayArrow = PlayArrow;
exports.Plus = Plus;
exports.Search = Search;
exports.Settings = Settings;
exports.Share = Share;
exports.Users = Users;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map