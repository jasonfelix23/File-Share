import { AlignJustify, PanelLeftClose } from 'lucide-react'
import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

const TopHeader = ({ toggleSideBar, isSidebarVisible }) => {
    return (
        <div className='flex p-5 border-b border-slate-800 items-center justify-between 
            md:justify-end'>
            <AlignJustify className={`md:hidden ${isSidebarVisible ? 'hidden' : ''}`} onClick={toggleSideBar} />
            <PanelLeftClose className={`md:hidden ${isSidebarVisible ? '' : 'hidden'}`} onClick={toggleSideBar} />
            <Image src='/logo.svg' width={60} height={60} className='md:hidden' />
            <UserButton />
        </div>
    )
}

export default TopHeader