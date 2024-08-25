import GoogleLogoImg from "~/public/google-logo.png";
import Image from "next/image";
import Search from "@/components/Search";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  const languages = ["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"];
  return (
   <div className="flex flex-col items-center justify-center gap-9 pt-[15vh] pb-[5vh] w-full">
        <Image src={GoogleLogoImg} alt="Google Logo Image" className="w-[50vw] max-w-[330px]"/>
        <Search/>
        <div className="flex justify-start gap-4">
          <Button size="sm">Google Search</Button>
          <Button size="sm">{`I'm Feeling Lucky`}</Button>
        </div>
        <div className="w-[85vw] sm:w-[65vw] max-w-[670px] text-sm flex flex-col md:flex-row justify-center items-center gap-1.5">
          <p className="text-primary-400 dark:text-primary-300 min-w-max">Google offered in:</p>{" "}
          <div className="text-blue-800 dark:text-sky-300 flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-2.5 items-center">
            {languages.map((str)=><Link key={str} className="hover:underline" href="#">{str}</Link>)}
          </div>
        </div>
   </div>
  );
}
