import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const Icon: FC<IconProps> = ({...props }) => {
  return (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 5C18.875 5 20 3.875 20 2.5C20 1.125 18.875 0 17.5 0C16.125 0 15 1.125 15 2.5C15 3.875 16.125 5 17.5 5ZM17.5 7.5C16.125 7.5 15 8.625 15 10C15 11.375 16.125 12.5 17.5 12.5C18.875 12.5 20 11.375 20 10C20 8.625 18.875 7.5 17.5 7.5ZM17.5 15C16.125 15 15 16.125 15 17.5C15 18.875 16.125 20 17.5 20C18.875 20 20 18.875 20 17.5C20 16.125 18.875 15 17.5 15Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 5C10.875 5 12 3.875 12 2.5C12 1.125 10.875 0 9.5 0C8.125 0 7 1.125 7 2.5C7 3.875 8.125 5 9.5 5ZM9.5 7.5C8.125 7.5 7 8.625 7 10C7 11.375 8.125 12.5 9.5 12.5C10.875 12.5 12 11.375 12 10C12 8.625 10.875 7.5 9.5 7.5ZM9.5 15C8.125 15 7 16.125 7 17.5C7 18.875 8.125 20 9.5 20C10.875 20 12 18.875 12 17.5C12 16.125 10.875 15 9.5 15Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C3.875 5 5 3.875 5 2.5C5 1.125 3.875 0 2.5 0C1.125 0 0 1.125 0 2.5C0 3.875 1.125 5 2.5 5ZM2.5 7.5C1.125 7.5 0 8.625 0 10C0 11.375 1.125 12.5 2.5 12.5C3.875 12.5 5 11.375 5 10C5 8.625 3.875 7.5 2.5 7.5ZM2.5 15C1.125 15 0 16.125 0 17.5C0 18.875 1.125 20 2.5 20C3.875 20 5 18.875 5 17.5C5 16.125 3.875 15 2.5 15Z" fill="currentColor"/>
</svg>
  );
};

export default Icon;