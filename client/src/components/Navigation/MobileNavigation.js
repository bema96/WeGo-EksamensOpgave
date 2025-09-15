import { Button }         from "@/components/UI/UniversalButton/button";
import { Avatar }    from '@/assets/icons/avatar';
import { slide as Menu }  from 'react-burger-menu';

import Link from 'next/link';


export const MobileNavigation = ({ loginData, menuOpen, setMenuOpen, links, username }) => (
  
  <div className="flex w-full items-center justify-between">

    <Link href="/" className="flex items-center gap-2">
      <img 
      src="/WeGo.svg" 
      alt="Logo" 
      width={"100"}
       />
    </Link>

    <div className="realtive flex items-center gap-8">

      <div className="flex justify-center items-center gap-3">
      {loginData && (
        <div className="flex flex-col text-xs opacity-80">
          <span className="flex justify-end">Velkommen </span>
          <span className="font-bold flex justify-end">{username}</span>
        </div>
      )}
      {loginData ? (
        <Link href="/dashboard">
          <Avatar className="w-10 cursor-pointer" />
        </Link>

      ) : (

        <Link href="/login" rel="noopener noreferrer">
          <Avatar className="w-10" />
        </Link>
      )}
      </div>
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={state => setMenuOpen(state.isOpen)}
        customCrossIcon={
          <Button
            aria-label="Luk menu"
            className="text-5xl absolute top-4 right-5 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </Button>
        }
      >
        {links.map(link =>
          link.name === 'Login' ? null : (
            <Link key={link.name} href={link.path} className="">
              {link.name}
            </Link>
          )
        )}
      </Menu>
    </div>
    
  </div>
);
