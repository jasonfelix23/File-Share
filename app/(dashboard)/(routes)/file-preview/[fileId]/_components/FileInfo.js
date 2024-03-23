import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { File } from 'lucide-react';

const FileInfo = ({ file }) => {
    const [fileType, setFileType] = useState();
    useEffect(() => {
        file && setFileType(file?.fileType.split('/')[0]);
        console.log(fileType);
    }, [file]);
    return (
        file && (
            <div className='text-center border flex justify-center m-4 flex-col items-center
            p-2  rounded-lg border-slate-800'>
                <Image
                    src={fileType == 'image' ? file?.fileUrl :
                        '/logo.svg'
                    }
                    width={200}
                    height={200}
                    alt='file'
                    className='h-[200px] md:h-[300px] lg:scale-125 rounded-md object-contain'
                />
                <div>
                    <h2>{file.fileName}</h2>
                    <h2 className='text-gray-400 text-[13px]'> {file.fileType} {(file.fileSize / 1024 / 1024).toFixed(2)}MB</h2>
                </div>
            </div>
        )
    )
}

export default FileInfo