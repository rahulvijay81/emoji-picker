"use client";

import { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { IoCopyOutline } from "react-icons/io5";

export default function Home() {
  const [selectEmoji, setSelectEmoji] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const currentYear = new Date().getFullYear()

  const handleCopy = () => {
    navigator.clipboard.writeText(selectEmoji);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="pt-4 lg:pt-24 pb-8">
        <h1 className="text-3xl text-white font-semibold tracking-wider">
          Emoji Picker
        </h1>
      </div>
      <div className="w-80 h-14 bg-slate-500 rounded-lg flex items-center justify-betweenrelative">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 left-8 text-2xl">{selectEmoji}</div>
        <div
          className={`relative z-10 ${
            selectEmoji ? "left-[80%]" : "left-[87.5%]"
          } `}
        >
          <IoCopyOutline
            onClick={handleCopy}
            size={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      {showTooltip && selectEmoji && (
        <div className="text-white text-xs bg-black bg-opacity-75 border border-gray-500 rounded py-1 px-4 mt-1">
          Copied!
        </div>
      )}
      <div className="pt-8">
        <Picker data={data} onEmojiSelect={(e) => setSelectEmoji(e.native)} />
      </div>

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
    </main>
  );
}
