// components/Navigation/MobileNavigation.jsx
"use client";

import Link from "next/link";
import { Button } from "@/components/UI/UniversalButton/button";
import { AvatarIcon } from "@/assets/icons/avatar";
import { slide as Menu } from "react-burger-menu";

export const MobileNavigation = ({ loginData, menuOpen, setMenuOpen, username, onHowItWorks }) => {
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <img src="/WeGo.svg" alt="Logo" width={100} />
      </Link>

      <div className="relative flex items-center gap-8">
        <div className="flex justify-center items-center gap-3">
          {loginData && (
            <div className="flex flex-col text-xs opacity-80">
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

        <Menu
          right
          isOpen={menuOpen}
          onStateChange={(state) => setMenuOpen(state.isOpen)}
          customCrossIcon={
            <Button
              aria-label="Luk menu"
              className="text-5xl absolute top-4 right-5 bg-transparent border-none cursor-pointer"
              onClick={closeMenu}
            >
              ×
            </Button>
          }
        >
          {/* Ét link */}
          <Link href="/list" onClick={closeMenu} className="mb-4 block">
            Find et Lift
          </Link>

          {/* Én knap der åbner modal */}
          <button
            type="button"
            onClick={() => {
              closeMenu();
              onHowItWorks?.();
            }}
            className="block text-left"
          >
            Sådan virker det
          </button>
        </Menu>
      </div>
    </div>
  );
};
