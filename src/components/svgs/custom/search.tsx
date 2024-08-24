import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const Icon: FC<IconProps> = ({...props }) => {
  return (
<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="9.16667" cy="9.66671" r="5.83333" stroke="currentColor" stroke-width="2"/>
<path d="M19 19.5L14 14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
  );
};

export default Icon;