"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';


const layout = ({ children }) => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const toggleSideBar = () => {
        console.log("clicked");
        setSidebarVisible(!isSidebarVisible);
    }
    return (
        <div>
            <div className={`h-full w-64 flex-col fixed inset-y-0 z-50 ${isSidebarVisible ? 'md:flex' : 'hidden md:hidden'}`}>
                <SideNav />
            </div>
            <div className={`md:ml-64 ${isSidebarVisible ? 'ml-64' : ''}`}>
                <TopHeader toggleSideBar={toggleSideBar} isSidebarVisible={isSidebarVisible} />
                {children}
            </div>
        </div>
    )
}

export default layout