import unknownWeatherImg from "~/public/cloud_unknown.png";
import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const Icon: FC<IconProps> = ({...props }) => {
  return (
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<image height={100} width={100} href={unknownWeatherImg.src}/>
</svg>

    );
};

export default Icon;