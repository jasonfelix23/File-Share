'use client'
import React, { useEffect, useState } from 'react'
import { app } from '../../../firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import FileItemC from './_components/FileItemC'
import Link from 'next/link';
import Image from 'next/image';

const FileView = ({ params }) => {
    const db = getFirestore(app);
    const [file, setFile] = useState();
    useEffect(() => {
        console.log(params?.fileId);
        params.fileId && getFileInfo();
    }, [])

    const getFileInfo = async () => {
        const docRef = doc(db, "File-share-uploadedFiles", params?.fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data: ", docSnap.data());
            setFile(docSnap.data());
        } else {
            console.log("No such document!")
        }
    }
    return (
        <div className='bg-gray-100 h-screen
        w-full flex justify-center items-center flex-col gap-4'>
            <Link href=''>
                <Image src='/logo.svg'
                    alt='logo'
                    width={60}
                    height={60}
                />
            </Link>
            <FileItemC file={file} />
        </div>
    )
}

export default FileView