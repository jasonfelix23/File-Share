import { AlignJustify } from 'lucide-react'
import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

const TopHeader = ({ toggleSideBar, toggle }) => {
    return (
        <div className='flex p-5 border-b border-slate-800 items-center justify-between 
            md:justify-end'>
            {!toggle && <AlignJustify className='md:hidden text-white/75' onClick={toggleSideBar} />}

            <Image src='/logo.svg' width={60} height={60} className='md:hidden' onClick={toggleSideBar} />
            <UserButton />
        </div>
    )
}

export default TopHeader