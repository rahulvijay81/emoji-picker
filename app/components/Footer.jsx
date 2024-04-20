import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <div className="flex items-center justify-center gap-1 fixed bottom-4">
      <div className="text-center text-xs font-poppins">
        © Copyright <b>{currentYear}</b> Designed & Built by
      </div>
      <div
        className="font-bold tracking-wider cursor-pointer text-xs"
        onClick={() => {
          window.open("https://rahulvijay.netlify.app/");
        }}
      >
        rahulvijay
      </div>
    </div>
  );
};

export default Footer;
