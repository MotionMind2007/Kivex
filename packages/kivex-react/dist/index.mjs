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
var Close = forwardRef(
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
          /* @__PURE__ */ jsx("rect", { width: 14, height: 2, x: 7.757, y: 6.343, rx: 1, transform: "rotate(45 7.757 6.343)" }),
          /* @__PURE__ */ jsx("rect", { width: 2, height: 14, x: 16.243, y: 6.343, rx: 1, transform: "rotate(45 16.243 6.343)" })
        ]
      }
    );
  }
);
Close.displayName = "Close";
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
        children: /* @__PURE__ */ jsx("path", { d: "M3 7a2 2 0 0 1 2-2h2.4a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
      }
    );
  }
);
Folder.displayName = "Folder";
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
          /* @__PURE__ */ jsx("rect", { width: 16, height: 2, x: 4, y: 5, rx: 1 }),
          /* @__PURE__ */ jsx("rect", { width: 16, height: 2, x: 4, y: 11, rx: 1 }),
          /* @__PURE__ */ jsx("rect", { width: 16, height: 2, x: 4, y: 17, rx: 1 })
        ]
      }
    );
  }
);
Menu.displayName = "Menu";
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
    return /* @__PURE__ */ jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        children: /* @__PURE__ */ jsx("path", { d: "M1.116 3.858c-.3-1.214.932-2.24 2.072-1.726l18.915 8.523c1.179.531 1.179 2.205 0 2.736L3.189 21.914c-1.14.513-2.37-.512-2.072-1.727l2.012-8.164zm3.826 9.165-1.64 6.645 14.749-6.645zm0-2h13.109L3.303 4.377z" })
      }
    );
  }
);
Send.displayName = "Send";
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

export { Alert, Bookmark, Chat, Cheak, Close, Download, DraftBook, File, Folder, Home, Menu, MenuVertical, Notification, PenLine, Plus, Search, Send, Settings, User, Users };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map