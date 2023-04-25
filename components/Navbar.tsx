/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
import {useLocale} from './useLocale';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const {t} = useLocale()
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-red-400 p-3 '>
        <Link href='/'>
          < div className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              {t.KENTA_OKUBO}
            </span>
          </div>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-red-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 hover:text-white '>
                Home
              </div>
            </Link>
            <Link href='/myProjects'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 hover:text-white'>
                {t.MY_PROJECTS}
              </div>
            </Link>
            <Link href='/history'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 hover:text-white'>
                {t.HISTORY}
              </div>
            </Link>
            <Link href='/blog'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 hover:text-white'>
                {t.BLOG}
              </div>
            </Link>
            <Link href='/contact'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 hover:text-white'>
                {t.CONTACT}
              </div>
            </Link>
            <Link href='/' locale={t.TOGGLE_LANGUAGE} passHref>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 hover:text-white'>
                Change language to {t.TOGGLE_LANGUAGE}　(言語を変える)
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

