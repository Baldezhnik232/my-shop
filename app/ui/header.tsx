import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-[189px] flex-col items-center justify-evenly rounded-b-[8px] border-b border-[#DCDCDC] ">
      {" "}
      <h1
        className="
      text-[2rem] 
      bg-gradient-to-r from-[#59006F] to-[#260DC1] bg-clip-text
      text-transparent
      "
      >
        GLANCE
      </h1>
      <label className="input-lable">
        <div className="relative peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden ">
          <input
            name="search-panel"
            type="search"
            className="peer bg-[#DCDCDC] rounded-[8px] w-xs h-[47px] pl-11 pr-5 text-[#27272a] placeholder-[#434349] focus:border-blue-500 "
            placeholder="Поиск"
            required
          />
          <div className="pointer-events-none transition-opacity duration-200 peer-[:not(:placeholder-shown)]:opacity-0">
            <Image
              src="vector.svg"
              width={3.87}
              height={3.87}
              alt="Vector Stick"
              style={{position:"absolute", left:26.3, top:26}}
            />
            <Image
              src="round.svg"
              width={14.22}
              height={14.22}
              alt="Vector Round"
              style={{ position: "absolute", left: 16, top: 16 }}
            />
          </div>
        </div>
      </label>
    </header>
  );
}
