"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { github } from '@/app/utils/icons';
import { ThemeDropDown } from './ThemeDropDown/ThemeDropDown';
import SearchButton from './SearchButton/SearchButton';
import { useGlobalcontext } from '@/app/context/globalcontext';
function Navbar() {
  const router = useRouter();
  const {state} = useGlobalcontext();

  console.log(state);
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className='left'></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:fit">
        <SearchButton />
        <ThemeDropDown />

        <div className="btn-group flex items-center gap-2 ">
        <Button className='source=code flex items-center gap-2' onClick={() => {
        router.push("https//github.com");
      }}>{github}Search</Button>
        </div>
      </div>

    </div>
  )
}

export default Navbar