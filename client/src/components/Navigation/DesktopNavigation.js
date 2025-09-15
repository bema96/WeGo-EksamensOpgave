import Link             from 'next/link';
import { Avatar }  from '@/assets/icons/avatar';

export const DesktopNavigation = ({ loginData, links, username }) => (
  
  <div className="flex w-full items-center justify-between">

    <div className='flex items-center gap-10'>

      <Link href="/" className="flex items-center gap-2 mr-5">
        <img 
        src="/WeGo.svg" 
        alt="Logo" 
        width={120} />
      </Link>

      {links.map(link =>
        link.name === 'Login' ? null : (
          <Link key={link.name} href={link.path}>
            {link.name}
          </Link>
        )
      )}
    </div>

    
    <div className="flex gap-5 items-center">

      {loginData && (
        <div className="flex flex-col text-xs opacity-80 absolute right-20 top-8 align-right">
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

  </div>
);
