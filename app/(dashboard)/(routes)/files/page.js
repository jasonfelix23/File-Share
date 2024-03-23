"use client"
import React, { useState, useEffect } from 'react'
import FilesTable from './_components/FilesTable';
import { app } from './../../../../firebaseConfig';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';


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