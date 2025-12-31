import type { InterfaceClassIcon } from "../../interfaces/interface-class-icon";

export function IconCss({ className }: InterfaceClassIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      className={className}
    >
      <path
        d="M31.875 2.125L27.625 26.5625L12.7965 31.875L0 26.5625L1.30156 20.2672H6.74687L6.21562 22.9633L13.9453 25.9117L22.8504 22.9633L24.0988 16.5152H1.95898L3.02148 11.0699H25.1813L25.8785 7.57031H3.73867L4.82109 2.125H31.875Z"
        fill="white"
      />
    </svg>
  );
}
