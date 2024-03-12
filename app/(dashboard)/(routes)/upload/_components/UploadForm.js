'use client'
import React, { useState } from 'react'
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

const UploadForm = ({ uploadClickHandler, progress }) => {
    const [file, setFile] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const onFileUpload = (e) => {
        let tempFile = e.target.files[0];
        console.log(tempFile)
        if (tempFile && tempFile.size > 2000000) {
            console.log("Size is greater than 2 MB");
            setErrorMsg('Maximum file upload size is 2MB.')
            return;
        }
        setErrorMsg(null);
        setFile(tempFile);
    }
    const closeClickHandler = () => {
        setFile(null);
    }
    return (
        <div className='text-center'>

            <div className="flex items-center justify-center w-full">
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-900 dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-12 h-12 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF <span className='font-light'> (Max size is 2MB)</span></p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden"
                        onChange={(e) => onFileUpload(e)}
                    />
                </label>
            </div>
            {errorMsg && <AlertMsg msg={errorMsg} />}
            {file && <FilePreview file={file} closeClickHandler={closeClickHandler} />}

            {progress > 0
                ? <ProgressBar progress={progress} />
                : <button
                    disabled={!file}
                    className={`${!file ? 'opacity-30 cursor-not-allowed' : ''} p-2 bg-primary text-white 
                    w-full md:w-[30%] lg:w-[15%] rounded-full mt-5 disabled:bg-gray-700`}
                    onClick={() => uploadClickHandler(file)}>
                    Upload
                </button>}
        </div>
    )
}

export default UploadForm