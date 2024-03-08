import { File, X } from 'lucide-react'
import React from 'react'

const FilePreview = ({ file, closeClickHandler }) => {
    return (
        <div className='flex items-center gap-2 p-2 justify-between m-2 md:mt-5 sm:mx-8 md:mx-16 lg:mx-48 border border-gray-700 rounded-md'>
            <div className='flex items-center gap-2 md:px-10'>
                <File className='text-white/75' />
                <div className='text-left text-white/75'>
                    <h2 >{file.name}</h2>
                    <h2 className='text-[12px] text-gray-600'>{file?.type} / {(file.size / 1024 / 1024).toFixed(2)}MB</h2>
                </div>
            </div>
            <X className='text-red-500 cursor-pointer' onClick={closeClickHandler} />
        </div>
    )
}

export default FilePreview