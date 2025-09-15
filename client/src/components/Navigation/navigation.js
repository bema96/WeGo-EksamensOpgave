"use client";

import { useAuth }             from '@/providers/auth.provider';
import { useIsMobile }         from "@/utils/isMobile";
import { MobileNavigation }    from './MobileNavigation';
import { DesktopNavigation }   from './DesktopNavigation';
import { useState, useEffect } from 'react';

import './hamburgerMenu.css';


export const Navigation = () => {
  const { loginData }           = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile                = useIsMobile();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const links = [
    { name: 'Find et Lift', path: '/' },
    { name: 'Products', path: '/products' },
  ];

  if (!loginData) links.push({ name: 'Login', path: '/login' });
  const username = loginData?.user?.firstname || 'user';

  if (!hydrated) return null;

  return (
    <nav className="bg-[var(--gray)] text-[var(--gral)] text-sm h-[120px] flex items-center py-4 px-6">
      {isMobile ? (
        <MobileNavigation
          loginData={loginData}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          links={links}
          username={username}
        />
      ) : (
        <DesktopNavigation
          loginData={loginData}
          links={links}
          username={username}
        />
      )}
    </nav>
  );
};
