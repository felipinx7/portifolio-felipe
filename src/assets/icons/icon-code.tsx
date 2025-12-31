import type { InterfaceClassIcon } from "../../interfaces/interface-class-icon";

export function IconCode({ className }: InterfaceClassIcon) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25.92 23.04L31.68 17.28L25.92 11.52"
        stroke="white"
        strokeWidth="2.88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.64 11.52L2.88 17.28L8.64 23.04"
        stroke="white"
        strokeWidth="2.88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.88 5.76001L13.68 28.8"
        stroke="white"
        strokeWidth="2.88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
