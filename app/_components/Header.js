'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header class="bg-white dark:bg-gray-900 border-b border-slate-800">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
                <div class="flex h-16 items-center justify-between">
                    <div class="md:flex md:items-center md:gap-12">
                        <Image src='/logo.svg' width={60} height={60} />
                    </div>

                    <div class="hidden md:block">
                        <nav aria-label="Global">
                            <ul class="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/upload"
                                    >
                                        Upload
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/about"
                                    >
                                        About us
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="http://www.jasonfelix.in" target="_blank"
                                    >
                                        Contact us
                                    </a>
                                </li>


                            </ul>
                        </nav>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4">
                            <a
                                class="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-blue-700"
                                href="/files"
                            >
                                Get Started
                            </a>
                        </div>


                        <div className="relative block md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <div className={`relative block md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                                <div
                                    className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-700 bg-gray-800 shadow-lg"
                                    role="menu"
                                >
                                    <div className="p-2">
                                        <a
                                            href="/"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Home
                                        </a>

                                        <a
                                            href="/upload"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Upload
                                        </a>

                                        <a
                                            href="/about"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            About
                                        </a>

                                        <a
                                            href="http://www.jasonfelix.in" target="_blank"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Contact me
                                        </a>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header