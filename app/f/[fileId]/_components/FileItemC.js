import React, { use, useState } from 'react'
import { Download } from 'lucide-react'
import Image from 'next/image'

const FileItemC = ({ file }) => {
    const [password, setPassword] = useState('');
    return file && (
        <div>
            <div className='p-5 rounded-md bg-white/75 flex flex-col items-center'>

                <div className='text-center flex-col gap-3 items-center flex'>
                    <h2 className='text-[20px] text-gray-600'>
                        <strong className="text-primary">{file.userName} </strong>
                        Shared a file with you
                    </h2>
                    <h2 className='text-[10px] text-gray-400'>Find File details below</h2>
                    <Image src='/download-file.gif'
                        width={150} height={150} alt='download'
                        className='w-[150px] h-[150px] p-5' />
                    <h2 className='text-gray-500 text-[15px]'>
                        {file.fileName} | {file.fileType} | {(file.fileSize / 1024 / 1024).toFixed(2)}MB
                    </h2>
                </div>
                {file.password.length > 3 &&
                    <input type='password' className='p-2 border rounded-md text-[14px]
            mt-5 text-center outline-blue-400'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Please enter the password to access'
                    />
                }
                <button href='' className='flex
            gap-2 p-2 bg-primary text-white rounded-full w-full
            items-center hover:bg-blue-600 text-[14px] mt-5 
            text-center justify-center disabled:bg-gray-300'
                    onClick={() => window.open(file?.fileUrl)}
                    disabled={file.password !== password}>
                    <Download className='h-4 w-4' />

                </button>
                <h2 className='text-gray-400 text-[12px]'>*Terms and conditions apply</h2>
            </div>
        </div>
    )
}

export default FileItemC