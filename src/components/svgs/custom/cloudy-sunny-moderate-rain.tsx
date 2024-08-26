import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const Icon: FC<IconProps> = ({...props }) => {
  return (
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M63 5L63 9" stroke="#FCFC07" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M63 53C74.0457 53 83 44.0457 83 33C83 21.9543 74.0457 13 63 13C51.9543 13 43 21.9543 43 33C43 44.0457 51.9543 53 63 53Z" fill="#FCFC07"/>
<path d="M91 33L87 33" stroke="#FCFC07" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M83.5 13L80 16.5" stroke="#FCFC07" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M46.5 16.5L43 13" stroke="#FCFC07" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M36.7188 24.8437C41.6994 24.8336 46.5881 26.1849 50.8566 28.7515C55.125 31.3181 58.6109 35.0024 60.9375 39.4062C63.7878 37.7397 66.9838 36.7526 70.2775 36.5215C73.5711 36.2903 76.8737 36.8214 79.9288 38.0735C82.9839 39.3256 85.7093 41.265 87.8935 43.7411C90.0776 46.2172 91.6616 49.1634 92.5225 52.3509C93.3835 55.5384 93.4982 58.8815 92.8578 62.1205C92.2173 65.3595 90.8389 68.4074 88.8297 71.0274C86.8204 73.6474 84.2344 75.769 81.2722 77.2276C78.3102 78.6861 75.0517 79.4423 71.75 79.4375L36.7188 79.5312C29.4667 79.5312 22.5117 76.6504 17.3838 71.5224C12.2559 66.3945 9.375 59.4395 9.375 52.1875C9.375 44.9355 12.2559 37.9805 17.3838 32.8525C22.5117 27.7246 29.4667 24.8437 36.7188 24.8437Z" fill="url(#paint0_linear_1_43)"/>
<path d="M92.3957 63.7235C95.5886 52.2957 88.9128 40.4433 77.485 37.2504C66.0571 34.0575 54.2047 40.7333 51.0118 52.1612C47.819 63.589 54.4947 75.4414 65.9226 78.6343C77.3504 81.8271 89.2029 75.1514 92.3957 63.7235Z" fill="url(#paint1_linear_1_43)"/>
<path d="M50.7812 86.7188V88.2812" stroke="#0BAEFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M41.4062 83.5938V85.1562" stroke="#0BAEFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M60.1562 83.5938V85.1562" stroke="#0BAEFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M60.1562 92.9688V94.5312" stroke="#0BAEFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M41.4062 92.9688V94.5312" stroke="#0BAEFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M50.7812 96.0938V97.6562" stroke="#0BAEFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_1_43" x1="29.8125" y1="81.8594" x2="62.7656" y2="39.1875" gradientUnits="userSpaceOnUse">
<stop stop-color="#F2F2F2"/>
<stop offset="1" stop-color="#CFCFCF"/>
</linearGradient>
<linearGradient id="paint1_linear_1_43" x1="80.4889" y1="50.3059" x2="55.5856" y2="71.9661" gradientUnits="userSpaceOnUse">
<stop offset="0.02" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

    );
};

export default Icon;