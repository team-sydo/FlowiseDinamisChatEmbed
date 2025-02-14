import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#0C8E80';
export const XIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement> & { isCurrentColor?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.isCurrentColor ? 'currentColor' : props.color ?? defaultButtonColor}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
