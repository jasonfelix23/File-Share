"use client"
import { Shield, Files, UploadCloud } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const SideNav = () => {
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
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={`shadow-sm border-r border-slate-800 h-full w-64}`}>
            <div className='p-5 border-b border-slate-800'>
                <Image src="/logo.svg" width={60} height={60} />
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuList.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveIndex(index)}
                        className={`flex gap-2 p-4 px-6 hover:bg-gray-800 w-full text-gray-500 
                            ${activeIndex == index ? 'bg-gray-800 text-primary' : null}`}>
                        <item.icon />
                        <h2>{item.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SideNav