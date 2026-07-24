import type { SVGProps } from "react";

/**
 * Duotone inline icon set — soft fill layer + crisp 2px stroke, 24px grid.
 * Icons inherit currentColor, so they recolor automatically wherever used.
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
  | "star"
  | "camera"
  | "dollar"
  | "tub";

/** Soft fill layer helper style */
const fillProps = {
  fill: "currentColor",
  stroke: "none",
  opacity: 0.14,
} as const;

const paths: Record<IconName, JSX.Element> = {
  "map-pin": (
    <>
      <path
        d="M12 21.2S5 16.5 5 10.4a7 7 0 0 1 14 0c0 6.1-7 10.8-7 10.8Z"
        {...fillProps}
      />
      <path d="M12 21.2S5 16.5 5 10.4a7 7 0 0 1 14 0c0 6.1-7 10.8-7 10.8Z" />
      <circle cx="12" cy="10.2" r="2.6" fill="#fff" fillOpacity="0.9" />
    </>
  ),
  wrench: (
    <>
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        {...fillProps}
      />
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </>
  ),
  home: (
    <>
      <path d="M5.5 9.6 12 4l6.5 5.6V20a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Z" {...fillProps} />
      <path d="M3 10.8 12 3l9 7.8" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5" />
      <path d="M10 21v-5a2 2 0 0 1 4 0v5" />
    </>
  ),
  chat: (
    <>
      <path
        d="M21 11.8a8 8 0 0 1-11.6 7.1L4 20.5l1.6-4.6A8 8 0 1 1 21 11.8Z"
        {...fillProps}
      />
      <path d="M21 11.8a8 8 0 0 1-11.6 7.1L4 20.5l1.6-4.6A8 8 0 1 1 21 11.8Z" />
      <path d="M8.6 12h.01M12.1 12h.01M15.6 12h.01" />
    </>
  ),
  door: (
    <>
      <path d="M6.5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16Z" {...fillProps} />
      <path d="M4 21h16" />
      <path d="M6.5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
      <path d="M14 11.6v1.6" />
    </>
  ),
  chair: (
    <>
      <path
        d="M5 13a2 2 0 0 1 2 2v0h10v0a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z"
        {...fillProps}
      />
      <path d="M6.5 12V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6" />
      <path d="M7 14.5v-.5h10v.5" />
      <path d="M5 13a2 2 0 0 1 2 2v0h10v0a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
      <path d="M6 21v-1M18 21v-1" />
    </>
  ),
  support: (
    <>
      <circle cx="5" cy="12" r="2.2" {...fillProps} />
      <circle cx="19" cy="12" r="2.2" {...fillProps} />
      <circle cx="5" cy="12" r="2.2" />
      <circle cx="19" cy="12" r="2.2" />
      <path d="M7.2 12h9.6" />
      <path d="M5 7.5v2.3M5 14.2v2.3M19 7.5v2.3M19 14.2v2.3" />
    </>
  ),
  water: (
    <>
      <path
        d="M12 3s6.3 6.9 6.3 10.9a6.3 6.3 0 0 1-12.6 0C5.7 9.9 12 3 12 3Z"
        {...fillProps}
      />
      <path d="M12 3s6.3 6.9 6.3 10.9a6.3 6.3 0 0 1-12.6 0C5.7 9.9 12 3 12 3Z" />
      <path d="M9.3 13.7a2.9 2.9 0 0 0 2 2.7" />
    </>
  ),
  independence: (
    <>
      <circle cx="12.5" cy="4.9" r="2.1" {...fillProps} />
      <circle cx="12.5" cy="4.9" r="2.1" />
      <path d="M12.5 7.3V13" />
      <path d="M12.5 9.6 8.9 11.6" />
      <path d="m12.5 9.6 3.6 1.5" />
      <path d="M16.6 11.4V20" />
      <path d="m12.5 13-2.9 7" />
      <path d="m12.5 13 2.3 7" />
    </>
  ),
  heart: (
    <>
      <path
        d="M12 20.3S4.3 15.6 2.9 10.7C2 7.6 4 4.9 6.9 4.6c2-.2 3.6.8 5.1 2.9 1.5-2.1 3.1-3.1 5.1-2.9 2.9.3 4.9 3 4 6.1-1.4 4.9-9.1 9.6-9.1 9.6Z"
        {...fillProps}
      />
      <path d="M12 20.3S4.3 15.6 2.9 10.7C2 7.6 4 4.9 6.9 4.6c2-.2 3.6.8 5.1 2.9 1.5-2.1 3.1-3.1 5.1-2.9 2.9.3 4.9 3 4 6.1-1.4 4.9-9.1 9.6-9.1 9.6Z" />
    </>
  ),
  phone: (
    <>
      <path
        d="M5.2 3h3.1l1.9 4.8-2.3 1.5a12.6 12.6 0 0 0 5.9 5.9l1.5-2.3 4.8 1.9v3.1a2.2 2.2 0 0 1-2.4 2.2A16.6 16.6 0 0 1 3 5.4 2.2 2.2 0 0 1 5.2 3Z"
        {...fillProps}
      />
      <path d="M5.2 3h3.1l1.9 4.8-2.3 1.5a12.6 12.6 0 0 0 5.9 5.9l1.5-2.3 4.8 1.9v3.1a2.2 2.2 0 0 1-2.4 2.2A16.6 16.6 0 0 1 3 5.4 2.2 2.2 0 0 1 5.2 3Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.2" {...fillProps} />
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="m3.5 7.5 8.5 5.6 8.5-5.6" />
    </>
  ),
  check: <polyline points="20 6.5 9.5 17 4 11.5" />,
  shield: (
    <>
      <path d="M12 3l7.2 2.9v5c0 4.6-3.1 8.5-7.2 10.2C7.9 19.4 4.8 15.5 4.8 10.9v-5Z" {...fillProps} />
      <path d="M12 3l7.2 2.9v5c0 4.6-3.1 8.5-7.2 10.2C7.9 19.4 4.8 15.5 4.8 10.9v-5Z" />
      <polyline points="9 12.2 11.2 14.4 15.3 10.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" {...fillProps} />
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3.1 1.9" />
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
    <>
      <path
        d="M12 3.3 14.7 8.8l6 .9-4.3 4.2 1 6L12 17l-5.4 2.9 1-6L3.3 9.7l6-.9L12 3.3Z"
        fill="currentColor"
        stroke="none"
        opacity="0.25"
      />
      <path d="M12 3.3 14.7 8.8l6 .9-4.3 4.2 1 6L12 17l-5.4 2.9 1-6L3.3 9.7l6-.9L12 3.3Z" />
    </>
  ),
  camera: (
    <>
      <path
        d="M4 8h3.2l1.9-2.8h5.8L16.8 8H20a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
        {...fillProps}
      />
      <path d="M4 8h3.2l1.9-2.8h5.8L16.8 8H20a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.2" r="3.4" fill="#fff" fillOpacity="0.85" />
      <circle cx="12" cy="13.2" r="3.4" />
    </>
  ),
  dollar: (
    <>
      <circle cx="12" cy="12" r="8.8" {...fillProps} />
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 6.8v10.4" />
      <path d="M14.9 8.9c-.7-.9-1.7-1.3-2.9-1.3-1.6 0-2.9.9-2.9 2.2 0 2.8 5.8 1.6 5.8 4.4 0 1.3-1.3 2.2-2.9 2.2-1.2 0-2.2-.4-2.9-1.3" />
    </>
  ),
  tub: (
    <>
      <path d="M4 12v3.4A4.6 4.6 0 0 0 8.6 20h6.8a4.6 4.6 0 0 0 4.6-4.6V12Z" {...fillProps} />
      <path d="M3 12h18" />
      <path d="M4 12v3.4A4.6 4.6 0 0 0 8.6 20h6.8a4.6 4.6 0 0 0 4.6-4.6V12" />
      <path d="M6.5 12V6.4A2.4 2.4 0 0 1 8.9 4h.3a2.3 2.3 0 0 1 2.3 2.2" />
      <path d="M11.5 8.6h.01M11.5 10.4h.01" />
      <path d="m7 20-.9 1.8M17 20l.9 1.8" />
    </>
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
      strokeWidth="1.8"
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
