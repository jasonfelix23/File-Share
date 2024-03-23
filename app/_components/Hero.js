import React from 'react'
import Constants from '../_utils/Constants'

function Hero() {
    return (
        <section className="bg-gray-900 text-white flex items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex md:mt-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="text-3xl font-bold sm:text-5xl"
                    >
                        <span className='bg-gradient-to-r from-cyan-400 to-indigo-800 bg-clip-text text-transparent font-extrabold'>
                            Upload, store and Share!<br />
                        </span>
                        Unleash the power of sharing.
                    </h1>

                    <p className="text-gray-500 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        {Constants.desc}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="/files"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border px-12 py-3 text-sm font-medium bg-white/90 hover:bg-white/75 text-primary hover:text-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero