import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (
        < section className="bg-white dark:bg-gray-900" >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1605106925746-22f723ca945b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-2 xl:col-span-6"
                >
                    <div className="flex flex-col max-w-xl lg:max-w-3xl">
                        <a className="block mx-auto text-center mb-2" href="/">
                            <span className="sr-only">Home</span>
                            <Image src="logo.svg" width={100} height={100} />
                        </a>

                        <SignUp />
                    </div>
                </main>
            </div>
        </section >
    );
}