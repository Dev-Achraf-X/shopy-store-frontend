import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-center">
      <div className="w-1/2 flex items-center justify-between">
        <span>BE IN TOUCH WITH US:</span>
        <div>
          <input
            type="text"
            placeholder="Enter your e-mail..."
            className="p-2.5 border-none rounded-s-md"
          />
          <button className="p-2.5 text-white bg-[#333] rounded-e-md">
            JOIN US
          </button>
        </div>
        <div className="flex gap-2.5">
          <FacebookIcon size={20} className="cursor-pointer" />
          <InstagramIcon size={20} className="cursor-pointer" />
          <TwitterIcon size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
