import {
    FaFacebookF,
    FaInstagram,
    FaSlack,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";

export const CopyrightSection = () => {
  return (
    <div className="w-[82%] m-auto py-10 flex justify-between items-center">
      <div>Copyright © 2024 Kanojiyastore. Powered by Kanojiyastore.</div>
      <div className="flex gap-5 text-lg">
        <FaFacebookF />
        <FaYoutube />
        <FaTwitter />
        <FaInstagram />
        <RiGoogleFill />
        <FaSlack />
      </div>
    </div>
  );
};
