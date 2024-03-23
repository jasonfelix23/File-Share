"use client"
import React, { useState, useEffect } from 'react'
import FilesTable from './_components/FilesTable';
import { app } from './../../../../firebaseConfig';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';

const dummyTemp = [
    {
        fileName: "IMG-20190201-WA0001.jpg",
        fileSize: 15428,
        fileType
            :
            "image/jpeg",
        fileUrl
            :
            "https://firebasestorage.googleapis.com/v0/b/file-shareing-23.appspot.com/o/file_share_upload%2FIMG-20190201-WA0001.jpg?alt=media&token=845b7d36-5b94-479c-a6b4-af9f7c347cc8",
        password
            :
            "",
        shortUrl
            :
            "http://localhost:3000/GWmAHF",
        userEmail
            :
            "jaab9381@colorado.edu",
        userName
            :
            "Jason Felix Abraham"
    }, {
        fileName
            :
            "IMG-20181202-WA0006.jpg",
        fileSize
            :
            94545,
        fileType
            :
            "image/jpeg",
        fileUrl
            :
            "https://firebasestorage.googleapis.com/v0/b/file-shareing-23.appspot.com/o/file_share_upload%2FIMG-20181202-WA0006.jpg?alt=media&token=ebfa1402-50dc-48aa-8ed1-eafb65790e78",
        password
            :
            "",
        shortUrl
            :
            "http://localhost:3000/wLKsOz",
        userEmail
            :
            "jaab9381@colorado.edu",
        userName
            :
            "Jason Felix Abraham",
    }
]
const Files = () => {
    const { user } = useUser();
    const db = getFirestore(app);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    const queryFiles = async () => {
        const email = user.primaryEmailAddress.emailAddress;
        const q = query(collection(db, "File-share-uploadedFiles"), where("userEmail", "==", `${email}`));
        const querySnapshot = await getDocs(q);
        let temp = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            temp.push(doc.data());

        });
        setFiles(temp);
    }

    useEffect(() => {
        setLoading(true);
        if (user) {
            queryFiles();
            // setFiles(dummyTemp);
        }
        setLoading(false);
    }, [user]);
    if (loading) return (<h2>Loading ...</h2>);
    if (!files) return (<h2>Upload</h2>);
    return (
        <div>
            <FilesTable files={files} />
        </div>
    )
}

export default Files;