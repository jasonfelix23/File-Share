"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';


const layout = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className={`h-full w-64 flex-col fixed inset-y-0 z-50 md:flex hidden bg-gray-900`}>
                <SideNav closeSideBar={() => setToggle(false)} toggle={toggle} />
            </div>
            {toggle && <div className={`h-full w-64 flex-col fixed inset-y-0 z-30 bg-gray-800 flex`}>
                <SideNav closeSideBar={() => setToggle(false)} toggle={toggle} />
            </div>}
            <div className='md:ml-64'>
                <TopHeader toggleSideBar={() => setToggle(true)} toggle={toggle} />
                {children}
            </div>
        </div>
    )
}

export default layout