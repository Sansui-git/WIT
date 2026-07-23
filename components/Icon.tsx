import type { SVGProps } from "react";

/**
 * Lightweight inline icon set (stroke style, currentColor).
 * Keeping icons inline avoids an icon-font dependency and keeps pages fast.
 */

export type IconName =
  | "map-pin"
  | "wrench"
  | "home"
  | "chat"
  | "door"
  | "chair"
  | "support"
  | "water"
  | "independence"
  | "heart"
  | "phone"
  | "mail"
  | "check"
  | "shield"
  | "clock"
  | "arrow-right"
  | "menu"
  | "close"
  | "star";

const paths: Record<IconName, JSX.Element> = {
  "map-pin": (
    <>
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4Z" />
  ),
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  chat: (
    <path d="M21 11.5a7.5 7.5 0 0 1-10.8 6.7L3 20l1.8-6.2A7.5 7.5 0 1 1 21 11.5Z" />
  ),
  door: (
    <>
      <path d="M4 21h16" />
      <path d="M6 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17" />
      <path d="M13 12h.01" />
    </>
  ),
  chair: (
    <>
      <path d="M6 4v8h12V4" />
      <path d="M4 12h16" />
      <path d="M6 12v8" />
      <path d="M18 12v8" />
      <path d="M6 17h12" />
    </>
  ),
  support: (
    <>
      <path d="M12 2v20" />
      <path d="M5 6v12" />
      <path d="M19 6v12" />
      <path d="M5 9h14" />
      <path d="M5 15h14" />
    </>
  ),
  water: (
    <path d="M12 2.7s6.5 7 6.5 11.3a6.5 6.5 0 0 1-13 0C5.5 9.7 12 2.7 12 2.7Z" />
  ),
  independence: (
    <>
      <circle cx="12" cy="6" r="3" />
      <path d="M12 9v7" />
      <path d="M8 22l4-6 4 6" />
      <path d="M6 12h12" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.7-9.3-9.2C1.2 8 2.6 4.8 5.8 4.4 8 4.1 9.6 5.4 12 8c2.4-2.6 4-3.9 6.2-3.6 3.2.4 4.6 3.6 3.1 6.4C19 15.3 12 20 12 20Z" />
  ),
  phone: (
    <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3Z" />
      <polyline points="9 12 11 14 15 10" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  title?: string;
}

export default function Icon({ name, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
