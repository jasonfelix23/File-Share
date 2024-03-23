"use client"
import { app } from './../../../../../firebaseConfig'
import { doc, getFirestore, getDoc } from 'firebase/firestore'
import { ArrowLeftSquare } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import FileInfo from './_components/FileInfo'
import ShareFile from './_components/ShareFile'

const FilePreview = ({ params }) => {
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

    const onPasswordSave = async (password) => {
        const docRef = doc(db, "File-share-uploadedFiles", params?.fileId);
        await updataDoc(docRef, {
            password: password,
        })
    }
    return (
        <div className='py-10 px-20 text-white/75'>
            <Link href='/upload' className='flex gap-3'><ArrowLeftSquare />Back</Link>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                <FileInfo file={file} />
                <ShareFile file={file}
                    onPasswordSave={(p) => onPasswordSave(p)} />
            </div>
        </div>
    )
}

export default FilePreview