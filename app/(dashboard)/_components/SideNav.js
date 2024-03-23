"use client"
import { Shield, Files, UploadCloud, PanelLeftClose } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const SideNav = ({ closeSideBar, toggle }) => {
    const menuList = [
        {
            id: 1,
            name: 'Upload',
            icon: UploadCloud,
            path: 'upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: Files,
            path: 'files'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        }
    ]
    const [activeIndex, setActiveIndex] = useState(1);



    return (
        <div className={`shadow-sm border-r border-slate-800 h-full w-64}`}>
            <div className='p-5 border-b border-slate-800 flex justify-between'>
                <Image src="/logo.svg" width={60} height={60} />
                {toggle && <PanelLeftClose className='md:hidden text-white/75' onClick={closeSideBar} />}
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuList.map((item, index) => (

                    <Link href={item.path} key={item.id}>
                        <button
                            key={item.id}
                            onClick={() => { setActiveIndex(index); closeSideBar() }}
                            className={`flex gap-2 p-4 px-6 hover:bg-gray-800 w-full text-gray-500 
                            ${activeIndex == index ? 'bg-gray-800 text-primary' : null}`}>
                            <item.icon />
                            <h2>{item.name}</h2>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav