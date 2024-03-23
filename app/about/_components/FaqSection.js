import React from 'react'

const FaqSection = () => {
    return (
        <div>
            <div className="space-y-4">
                <details
                    className="group border-s-4 border-primary border border-t-slate-800 border-r-slate-800 border-b-slate-800 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 ">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                            What is File Vista?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                        File Share is a web application designed to simplify the process of sharing files securely over the internet.
                        It allows users to upload files to a centralized platform and share them with specific individuals or groups.
                        Whether you need to share documents, images, videos, or any other file type, File Share provides a convenient
                        and efficient solution.
                    </p>
                </details>

                <details
                    className="group border-s-4  border-primary border border-t-slate-800 border-r-slate-800 border-b-slate-800 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                            Is there a way to protect shared files with a password?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                        Yes, absolutely! File Share allows you to add an extra layer of security to your shared files by protecting them with passwords.
                        When Previewing a file before sending, you have the option to set a password that recipients will need to enter before accessing
                        the file. This ensures that only authorized individuals with the correct password
                        can view or download the shared file, adding an additional level of privacy and security to your shared content.
                    </p>
                </details>
                <details
                    className="group border-s-4 border-primary border border-t-slate-800 border-r-slate-800 border-b-slate-800 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                            Can I delete files after uploading them?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                        At present, the delete functionality is not available for users. Once a file is uploaded, it remains stored securely on our
                        servers until further notice. However, we are constantly working on enhancing our platform's features and
                        functionalities based on user feedback. Your suggestion for a delete feature is duly noted, and we will
                        consider it for future updates.
                    </p>
                </details>
            </div>
        </div>
    )
}

export default FaqSection