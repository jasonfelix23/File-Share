import React from 'react';


const FilesTable = ({ files }) => {
    console.log(files)
    return (
        <div className='m-10'>
            <h2 className='m-2 font-semibold text-xl text-white/75'>My Files</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-700" >
                <table
                    className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900 "
                >
                    <thead className="text-left bg-gray-800">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Filename</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                Type
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Size</th>

                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-left">
                        {files.map((file) => (
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    {file.fileName}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{file.fileType}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{(file.fileSize / 1024 / 1024).toFixed(2)}MB</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a
                                        href={`/file-preview/${file.shortUrl.split('/').pop()}`}
                                        className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white hover:bg-blue-700"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FilesTable