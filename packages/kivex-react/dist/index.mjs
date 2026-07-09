import { forwardRef } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/icons/alert.tsx
var IconBase = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    children
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var Alert = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsx("path", { d: "M12 8v5" }),
          /* @__PURE__ */ jsx("circle", { cx: 12, cy: 16, r: 0.5 })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var BarChart = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M3 3v17a1 1 0 0 0 1 1h17" }),
          /* @__PURE__ */ jsx("path", { d: "M7 6h4" }),
          /* @__PURE__ */ jsx("path", { d: "M7 11h12" }),
          /* @__PURE__ */ jsx("path", { d: "M7 16h8" })
        ]
      }
    );
  }
);
BarChart.displayName = "BarChart";
var BellRing = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M5.778 9.588C5.778 5.95 8.564 3 12 3s6.222 2.95 6.222 6.588v3.817c0 .585.129 1.161.376 1.684l1.027 2.175c.247.523.375 1.1.375 1.684V19H4v-.052c0-.585.129-1.161.375-1.684l1.027-2.175c.247-.523.376-1.1.376-1.684z" }),
          /* @__PURE__ */ jsx("path", { d: "M10 22h4" }),
          /* @__PURE__ */ jsx("path", { d: "M2 8c.167-.833.5-3.5 3-6" }),
          /* @__PURE__ */ jsx("path", { d: "M19 2c.833.833 2.6 3.2 3 6" })
        ]
      }
    );
  }
);
BellRing.displayName = "BellRing";
var Bookmark = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsx("path", { d: "M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.229a1 1 0 0 1-1.517.856l-4.966-2.996a1 1 0 0 0-1.033 0l-4.968 2.996A1 1 0 0 1 5 20.23z" })
      }
    );
  }
);
Bookmark.displayName = "Bookmark";
var Chat = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9.304a2 2 0 0 1-2 2H7.659a2 2 0 0 0-1.189.392l-3.673 2.715A.5.5 0 0 1 2 20.009z" }),
          /* @__PURE__ */ jsx("path", { d: "M6 8h11" }),
          /* @__PURE__ */ jsx("path", { d: "M6 13h9" })
        ]
      }
    );
  }
);
Chat.displayName = "Chat";
var Cheak = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsx("path", { d: "m4 13 8.07 5.675a.5.5 0 0 0 .73-.174L20 5" })
      }
    );
  }
);
Cheak.displayName = "Cheak";
var ColumnChartPlainIncreasing = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M5 21v-6" }),
          /* @__PURE__ */ jsx("path", { d: "M19 3v18" }),
          /* @__PURE__ */ jsx("path", { d: "M12 21V9" })
        ]
      }
    );
  }
);
ColumnChartPlainIncreasing.displayName = "ColumnChartPlainIncreasing";
var ColumnChart = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M3 3v17a1 1 0 0 0 1 1h17" }),
          /* @__PURE__ */ jsx("path", { d: "M8 17v-4" }),
          /* @__PURE__ */ jsx("path", { d: "M13 5v12" }),
          /* @__PURE__ */ jsx("path", { d: "M18 17V9" })
        ]
      }
    );
  }
);
ColumnChart.displayName = "ColumnChart";
var CreditCard = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsx("path", { d: "M2 10v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7M2 10V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3M2 10h20" })
      }
    );
  }
);
CreditCard.displayName = "CreditCard";
var Download = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" }),
          /* @__PURE__ */ jsx("path", { d: "m6 10 5.293 5.293a1 1 0 0 0 1.414 0L18 10" }),
          /* @__PURE__ */ jsx("path", { d: "M12 3v11" })
        ]
      }
    );
  }
);
Download.displayName = "Download";
var DraftBook = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M4 18v2a2 2 0 0 0 2 2h13.857M4 18h15.857M4 18V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.857a.143.143 0 0 1-.143.143M20 22h-.143m0-4-.576.538a2 2 0 0 0 0 2.924l.576.538" }),
          /* @__PURE__ */ jsx("path", { d: "M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.278M12 6h3.5a.5.5 0 0 1 .5.5v1.278" })
        ]
      }
    );
  }
);
DraftBook.displayName = "DraftBook";
var EyeClosed = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M21 8c0 3.314-4.03 6-9 6s-9-2.686-9-6" }),
          /* @__PURE__ */ jsx("path", { d: "m5 12-3 3" }),
          /* @__PURE__ */ jsx("path", { d: "m19 12 3 3" }),
          /* @__PURE__ */ jsx("path", { d: "m9 14-1 4" }),
          /* @__PURE__ */ jsx("path", { d: "m14 14 1 4" })
        ]
      }
    );
  }
);
EyeClosed.displayName = "EyeClosed";
var Eye = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 3 }),
          /* @__PURE__ */ jsx("path", { d: "M2 12C5 6.718 13.2-.678 22 12" }),
          /* @__PURE__ */ jsx("path", { d: "M22.008 12.023c-3 5.282-11.2 12.678-20 0" })
        ]
      }
    );
  }
);
Eye.displayName = "Eye";
var File = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M4 4a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 20 8.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsx("path", { d: "M13 2v5a2 2 0 0 0 2 2h5" })
        ]
      }
    );
  }
);
File.displayName = "File";
var Folder = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsx("path", { d: "M3 7a2 2 0 0 1 2-2h2.4a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" })
      }
    );
  }
);
Folder.displayName = "Folder";
var Heart = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("g", { clipPath: "url(#a)", children: /* @__PURE__ */ jsx("path", { d: "m11.958 7.692-1.183-1.27C7.639 3.053 2 5.272 2 9.874c0 1.451.623 2.834 1.71 3.795l8.098 7.16a.29.29 0 0 0 .384 0l8.097-7.16A5.07 5.07 0 0 0 22 9.875c0-4.602-5.639-6.82-8.775-3.454l-1.183 1.27a.06.06 0 0 1-.084 0Z" }) }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "a", children: /* @__PURE__ */ jsx("rect", { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
Heart.displayName = "Heart";
var Home = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M3 9.468a1 1 0 0 1 .36-.768l8-6.667a1 1 0 0 1 1.28 0l8 6.667a1 1 0 0 1 .36.768V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }),
          /* @__PURE__ */ jsx("path", { d: "M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" })
        ]
      }
    );
  }
);
Home.displayName = "Home";
var LayoutDashboard = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("rect", { width: 7, height: 9, x: 3, y: 3, rx: 0.5 }),
          /* @__PURE__ */ jsx("rect", { width: 7, height: 9, x: 14, y: 12, rx: 0.5 }),
          /* @__PURE__ */ jsx("rect", { width: 7, height: 5, x: 3, y: 16, rx: 0.5 }),
          /* @__PURE__ */ jsx("rect", { width: 7, height: 5, x: 14, y: 3, rx: 0.5 })
        ]
      }
    );
  }
);
LayoutDashboard.displayName = "LayoutDashboard";
var MenuVertical = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("rect", { width: 2, height: 2, x: 11, y: 4, rx: 1 }),
          /* @__PURE__ */ jsx("rect", { width: 2, height: 2, x: 11, y: 11, rx: 1 }),
          /* @__PURE__ */ jsx("rect", { width: 2, height: 2, x: 11, y: 18, rx: 1 })
        ]
      }
    );
  }
);
MenuVertical.displayName = "MenuVertical";
var Menu = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M4 5h15" }),
          /* @__PURE__ */ jsx("path", { d: "M4 12h15" }),
          /* @__PURE__ */ jsx("path", { d: "M4 19h15" })
        ]
      }
    );
  }
);
Menu.displayName = "Menu";
var Moon = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsx("path", { d: "M12 21c4.567 0 7.917-3.376 8.819-7.802.125-.616-.406-1.142-1.034-1.117-8.525.34-8.443-4.734-7.975-7.918.09-.611-.375-1.167-.988-1.087A9.002 9.002 0 0 0 12 21Z" })
      }
    );
  }
);
Moon.displayName = "Moon";
var Notification = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M5 9a7 7 0 0 1 14 0v4.056a4 4 0 0 0 .422 1.789l1.156 2.31a4 4 0 0 1 .422 1.79V19H3v-.056a4 4 0 0 1 .422-1.789l1.156-2.31A4 4 0 0 0 5 13.055z" }),
          /* @__PURE__ */ jsx("path", { d: "M10 22h4" })
        ]
      }
    );
  }
);
Notification.displayName = "Notification";
var Paperclip = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsx("path", { d: "M10 6.21v9.58a2 2 0 0 0 4 0V6a4 4 0 0 0-8 0v10a6 6 0 0 0 12 0V6.21" })
      }
    );
  }
);
Paperclip.displayName = "Paperclip";
var PenLine = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsxs("g", { clipPath: "url(#a)", children: [
            /* @__PURE__ */ jsx("path", { d: "M8.214 20.064 21.116 6.412a2.737 2.737 0 1 0-3.979-3.76L4.19 16.351q-.114.123-.184.275l-2.277 5.03a.5.5 0 0 0 .628.675l5.477-2.016a1 1 0 0 0 .381-.252Z" }),
            /* @__PURE__ */ jsx("path", { d: "M12 21h9" })
          ] }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "a", children: /* @__PURE__ */ jsx("rect", { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
PenLine.displayName = "PenLine";
var PieChart = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M21.996 13.107Q22 12.954 22 12.8C22 6.835 17.165 2 11.2 2q-.154 0-.307.004c-.51.014-.893.448-.893.957V13a1 1 0 0 0 1 1h10.039c.51 0 .942-.384.957-.893Z" }),
          /* @__PURE__ */ jsx("path", { d: "M20 17.632A9.82 9.82 0 0 1 11.827 22C6.4 22 2 17.6 2 12.173A9.82 9.82 0 0 1 6.368 4" })
        ]
      }
    );
  }
);
PieChart.displayName = "PieChart";
var Plus = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M12 5v14" }),
          /* @__PURE__ */ jsx("path", { d: "M5 12h14" })
        ]
      }
    );
  }
);
Plus.displayName = "Plus";
var Search = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("circle", { cx: 11, cy: 11, r: 8 }),
          /* @__PURE__ */ jsx("path", { d: "M16.947 17.054 21 21" })
        ]
      }
    );
  }
);
Search.displayName = "Search";
var Send = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M21.693 12.478 2.778 21.002a.5.5 0 0 1-.69-.576l2.042-8.284a.5.5 0 0 0 0-.24L2.087 3.619a.5.5 0 0 1 .691-.575l18.915 8.523a.5.5 0 0 1 0 .912Z" }),
          /* @__PURE__ */ jsx("path", { d: "M4.16 12.022h17.386" })
        ]
      }
    );
  }
);
Send.displayName = "Send";
var SettingsControl = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0h9" }),
          /* @__PURE__ */ jsx("path", { d: "M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 0H5" })
        ]
      }
    );
  }
);
SettingsControl.displayName = "SettingsControl";
var Settings = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82c0-1.586-1.757-2.541-3.088-1.679l-1.334.865a1 1 0 0 1-1.456-.428l-.945-2.1a1 1 0 0 1 .426-1.284l1.45-.806c1.372-.762 1.372-2.734 0-3.496l-1.45-.806a1 1 0 0 1-.426-1.284l.945-2.1a1 1 0 0 1 1.456-.428l1.334.865c1.33.862 3.088-.093 3.088-1.679V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82c0 1.586 1.757 2.541 3.088 1.679l1.334-.865a1 1 0 0 1 1.456.428l.945 2.1a1 1 0 0 1-.427 1.284l-1.449.806c-1.372.762-1.372 2.734 0 3.496l1.45.806a1 1 0 0 1 .426 1.284l-.945 2.1a1 1 0 0 1-1.456.428l-1.334-.865c-1.33-.862-3.088.093-3.088 1.679V21a1 1 0 0 1-1 1Z" }),
          /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 3 })
        ]
      }
    );
  }
);
Settings.displayName = "Settings";
var ShieldCheck = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M4 5.256a.23.23 0 0 1 .227-.229c2.45-.018 4.83-.82 6.791-2.29l.808-.606a.29.29 0 0 1 .348 0l.808.605a11.45 11.45 0 0 0 6.79 2.291.23.23 0 0 1 .228.229v6.712a10.29 10.29 0 0 1-7.977 10.027.1.1 0 0 1-.046 0A10.29 10.29 0 0 1 4 11.968V5.256Z" }),
          /* @__PURE__ */ jsx("path", { d: "m9 12 1.741 1.625a.5.5 0 0 0 .737-.06L15 9" })
        ]
      }
    );
  }
);
ShieldCheck.displayName = "ShieldCheck";
var ShoppingBag = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "m21 6-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM3 6h18" }),
          /* @__PURE__ */ jsx("path", { d: "M16 10a4 4 0 0 1-8 0" })
        ]
      }
    );
  }
);
ShoppingBag.displayName = "ShoppingBag";
var SlidersHorizontal = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M3 5h7" }),
          /* @__PURE__ */ jsx("path", { d: "M14 5V3m0 2v2m0-2h7" }),
          /* @__PURE__ */ jsx("path", { d: "M8 12v-2m0 2v2m0-2H3" }),
          /* @__PURE__ */ jsx("path", { d: "M12 12h9" }),
          /* @__PURE__ */ jsx("path", { d: "M3 19h9" }),
          /* @__PURE__ */ jsx("path", { d: "M16 19v-2m0 2v2m0-2h5" })
        ]
      }
    );
  }
);
SlidersHorizontal.displayName = "SlidersHorizontal";
var SlidersVertical = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M5 3v7" }),
          /* @__PURE__ */ jsx("path", { d: "M5 14v7m0-7H3m2 0h2" }),
          /* @__PURE__ */ jsx("path", { d: "M12 8h2m-2 0h-2m2 0V3" }),
          /* @__PURE__ */ jsx("path", { d: "M12 12v9" }),
          /* @__PURE__ */ jsx("path", { d: "M19 3v9" }),
          /* @__PURE__ */ jsx("path", { d: "M19 16h2m-2 0h-2m2 0v5" })
        ]
      }
    );
  }
);
SlidersVertical.displayName = "SlidersVertical";
var Trash2 = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M3 6h2m0 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6m2 0h-2m0 0h-3M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8" }),
          /* @__PURE__ */ jsx("path", { d: "M10 11v6" }),
          /* @__PURE__ */ jsx("path", { d: "M14 11v6" })
        ]
      }
    );
  }
);
Trash2.displayName = "Trash2";
var Trash = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsx("path", { d: "M3 6h2m16 0h-2M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8M8 6H5m11 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6" })
      }
    );
  }
);
Trash.displayName = "Trash";
var UserCheck = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("circle", { cx: 10, cy: 8, r: 5 }),
          /* @__PURE__ */ jsx("path", { d: "M15 14.755A8 8 0 0 0 2 21" }),
          /* @__PURE__ */ jsx("path", { d: "m16 19.333 1.608 1.34a.5.5 0 0 0 .71-.071L22 16" })
        ]
      }
    );
  }
);
UserCheck.displayName = "UserCheck";
var User = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("circle", { cx: 12, cy: 8, r: 5 }),
          /* @__PURE__ */ jsx("path", { d: "M20 21a8 8 0 1 0-16 0" })
        ]
      }
    );
  }
);
User.displayName = "User";
var Users = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("circle", { cx: 10, cy: 8, r: 5 }),
          /* @__PURE__ */ jsx("path", { d: "M18 21a8 8 0 1 0-16 0" }),
          /* @__PURE__ */ jsx("path", { d: "M18 4c.833 1.333 2 4.9 0 8.5" }),
          /* @__PURE__ */ jsx("path", { d: "M18 12.5c1.5 1.333 4.4 4.9 4 8.5" })
        ]
      }
    );
  }
);
Users.displayName = "Users";
var X = forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: [
          /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" }),
          /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" })
        ]
      }
    );
  }
);
X.displayName = "X";

export { Alert, BarChart, BellRing, Bookmark, Chat, Cheak, ColumnChart, ColumnChartPlainIncreasing, CreditCard, Download, DraftBook, Eye, EyeClosed, File, Folder, Heart, Home, LayoutDashboard, Menu, MenuVertical, Moon, Notification, Paperclip, PenLine, PieChart, Plus, Search, Send, Settings, SettingsControl, ShieldCheck, ShoppingBag, SlidersHorizontal, SlidersVertical, Trash, Trash2, User, UserCheck, Users, X };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map