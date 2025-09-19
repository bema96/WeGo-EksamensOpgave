// components/Navigation/DesktopNavigation.jsx
"use client";

import Link from "next/link";
import { AvatarIcon } from "@/assets/icons/avatar";

export const DesktopNavigation = ({ loginData, username, onHowItWorks }) => (
  <div className="flex w-full items-center justify-between">
    <div className="flex items-center gap-10">
      <Link href="/" className="flex items-center gap-2 mr-5">
        <img src="/WeGo.svg" alt="Logo" width={120} />
      </Link>

      {/* 1 link + 1 knap */}
      <Link href="/list" className="hover:underline">
        Find et Lift
      </Link>
      <button type="button" onClick={onHowItWorks} className="hover:underline">
        Sådan virker det
      </button>
    </div>

    <div className="flex gap-5 items-center">
      {loginData && (
        <div className="flex flex-col text-xs opacity-80 absolute right-20 top-8">
          <span className="flex justify-end">Velkommen</span>
          <span className="font-bold flex justify-end">{username}</span>
        </div>
      )}

      {loginData ? (
        <Link href="/dashboard">
          <AvatarIcon className="w-10 cursor-pointer" />
        </Link>
      ) : (
        <Link href="/login" rel="noopener noreferrer">
          <AvatarIcon className="w-10" />
        </Link>
      )}
    </div>
  </div>
);
