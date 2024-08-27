import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const Icon: FC<IconProps> = ({...props }) => {
  return (<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80Z" fill="#FCFC07"/>
    <path d="M50 8L50 14" stroke="#FCFC07" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M50 86L50 92" stroke="#FCFC07" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M92 50L86 50" stroke="#FCFC07" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M14 50H8" stroke="#FCFC07" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M80 20L75 25" stroke="#FCFC07" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M25 75L20 80" stroke="#FCFC07" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M80 80L75 75" stroke="#FCFC07" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M25 25L20 20" stroke="#FCFC07" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
    );
};

export default Icon;