import type { InterfaceClassIcon } from "../../interfaces/interface-class-icon";

export function IconEmail({ className }: InterfaceClassIcon) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.232 4.64639H4.64638C3.36331 4.64639 2.32318 5.68652 2.32318 6.96959V20.9088C2.32318 22.1919 3.36331 23.232 4.64638 23.232H23.232C24.515 23.232 25.5552 22.1919 25.5552 20.9088V6.96959C25.5552 5.68652 24.515 4.64639 23.232 4.64639Z"
        stroke="currentColor"
        strokeWidth="2.3232"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5552 8.1312L15.1356 14.7523C14.777 14.977 14.3624 15.0962 13.9392 15.0962C13.516 15.0962 13.1014 14.977 12.7427 14.7523L2.32318 8.1312"
        stroke="currentColor"
        strokeWidth="2.3232"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
