import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="absolute bottom-0 flex flex-row items-center h-10 gap-6 mt-6 -translate-x-1/2 w-fit left-1/2 ">
      <a
        href="https://github.com/holtonpk/typingGame"
        target="_blank"
        className="flex flex-row items-center gap-2 text-[12px] font-f1 text-c8 fill-c8 hover:fill-white hover:text-white"
      >
        <AiFillGithub className="w-4 h-4 " />
        GitHub
      </a>
      <div className="flex flex-row items-center gap-2 text-[12px] font-f1 text-c8 fill-c8 hover:fill-white hover:text-white">
        <MdEmail className="w-4 h-4 " />
        Contact
      </div>
      <div className="flex flex-row items-center gap-2 text-[12px] font-f1 text-c8 fill-c8 hover:fill-white hover:text-white">
        <FaLock className="w-4 h-4" />
        Privacy
      </div>
      <div className="flex flex-row items-center gap-2 text-[12px] font-f1 text-c8 fill-c8 hover:fill-white hover:text-white">
        <BsTwitter className="w-4 h-4" />
        Twitter
      </div>
    </div>
  );
};

export default Footer;
