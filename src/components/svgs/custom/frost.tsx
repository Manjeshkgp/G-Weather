import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const Icon: FC<IconProps> = ({...props }) => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M50 22.6562V77.3438" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M56.3594 15.5625L50 23.5L43.6406 15.5625" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M43.6406 84.4375L50 76.5L56.3594 84.4375" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M69.3281 30.6719L30.6719 69.3281" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M78.8437 30.1562L68.75 31.25L69.8438 21.1562" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M21.1562 69.8438L31.25 68.75L30.1562 78.8437" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M77.3438 50H22.6562" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M84.4375 56.3594L76.5 50L84.4375 43.6406" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M15.5625 43.6406L23.5 50L15.5625 56.3594" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M69.3281 69.3281L30.6719 30.6719" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M69.8438 78.8437L68.75 68.75L78.8437 69.8438" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M30.1562 21.1562L31.25 31.25L21.1562 30.1562" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M50.3981 29.7164L30.5107 49.6038L50.3981 69.4912L70.2855 49.6038L50.3981 29.7164Z" stroke="#B9C1C6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
    );
};

export default Icon;