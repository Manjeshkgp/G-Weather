import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const Icon: FC<IconProps> = ({...props }) => {
  return (
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M64.5312 29.5313C59.5585 29.5297 54.6797 30.885 50.4202 33.4511C46.1608 36.0172 42.6823 39.6969 40.3594 44.0938C37.5091 42.4272 34.313 41.4401 31.0194 41.209C27.7258 40.9778 24.4232 41.509 21.3681 42.761C18.313 44.0131 15.5875 45.9525 13.4034 48.4286C11.2193 50.9047 9.63528 53.8509 8.77433 57.0384C7.91338 60.226 7.79868 63.569 8.43912 66.808C9.07957 70.0471 10.4579 73.0949 12.4672 75.7149C14.4764 78.3349 17.0625 80.4565 20.0246 81.9151C22.9867 83.3736 26.2451 84.1298 29.5469 84.125L64.5312 84.2188C71.7833 84.2188 78.7383 81.3379 83.8662 76.2099C88.9941 71.082 91.875 64.127 91.875 56.875C91.875 49.623 88.9941 42.668 83.8662 37.5401C78.7383 32.4121 71.7833 29.5313 64.5312 29.5313Z" fill="url(#paint0_linear_1_3)"/>
<path d="M35.3435 83.3328C46.7713 80.14 53.4471 68.2875 50.2543 56.8597C47.0614 45.4319 35.209 38.7561 23.7811 41.9489C12.3533 45.1418 5.67752 56.9942 8.87038 68.4221C12.0632 79.8499 23.9157 86.5257 35.3435 83.3328Z" fill="url(#paint1_linear_1_3)"/>
<defs>
<linearGradient id="paint0_linear_1_3" x1="71.4375" y1="86.5469" x2="38.4844" y2="43.875" gradientUnits="userSpaceOnUse">
<stop stop-color="#F2F2F2"/>
<stop offset="1" stop-color="#CFCFCF"/>
</linearGradient>
<linearGradient id="paint1_linear_1_3" x1="20.773" y1="54.9894" x2="45.6654" y2="76.6689" gradientUnits="userSpaceOnUse">
<stop offset="0.02" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

    );
};

export default Icon;