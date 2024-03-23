'use client'
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm';
import { app } from './../../../../firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from './../../../../app/_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';
import CompleteCheck from './_components/CompleteCheck';

const Upload = () => {
    const { user } = useUser();

    const storage = getStorage(app);
    const db = getFirestore(app);
    const router = useRouter();


    const [progress, setProgress] = useState();
    const [uploadComplete, setUploadComplete] = useState(false);
    const [fileDocId, setFileDocId] = useState();

    const uploadFile = (file) => {
        const metadata = {
            contentType: file.type
        };
        const storageRef = ref(storage, 'file_share_upload/' + file?.name);
        const uploadTask = uploadBytesResumable(storageRef, file, file.type);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setProgress(progress);
                if (progress == 100) {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        saveInfo(file, downloadURL).then((docId) => {
                            setFileDocId(docId);
                        });
                    });
                }
            })
    }
    const saveInfo = async (file, fileUrl) => {
        const docId = generateRandomString();
        await setDoc(doc(db, "File-share-uploadedFiles", docId), {
            fileName: file?.name,
            fileSize: file?.size,
            fileType: file?.type,
            fileUrl: fileUrl,
            userEmail: user?.primaryEmailAddress.emailAddress,
            userName: user?.fullName,
            password: '',
            shortUrl: process.env.NEXT_PUBLIC_BASE_URL + 'f/' + docId,
        });
        return docId;
    }
    useEffect(() => {

        progress == 100 && setTimeout(() => {
            setUploadComplete(true);
        }, 2000)
    }, [progress == 100]);

    useEffect(() => {
        console.log("uploadComplete:", uploadComplete);
        console.log("fileDocId:", fileDocId);
        uploadComplete && fileDocId && setTimeout(() => {
            setUploadComplete(false);
            router.push('/file-preview/' + fileDocId);
        }, 2000)
    }, [uploadComplete == true, fileDocId])
    return (
        <div className='p-5 px-8 md:px-28'>
            {!uploadComplete ? <div>
                <h2 className='text-[20px] text-center m-5 text-white/75'>Start
                    <strong className='text-primary'> Uploading </strong>
                    File and
                    <strong className='text-primary'> Share </strong>
                    it.</h2>

                <UploadForm uploadClickHandler={(file) => uploadFile(file)}
                    progress={progress}
                />
            </div>
                :
                <CompleteCheck />
            }

        </div>
    )
}

export default Upload