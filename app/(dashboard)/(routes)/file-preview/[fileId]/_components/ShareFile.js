import { Copy, CopyIcon } from 'lucide-react'
import React, { useContext, useState } from 'react'
import GlobalApi from './../../../../../_utils/GlobalApi'
import { useUser } from '@clerk/nextjs';
import Toast from '../../../../../_components/Toast';

const ShareFile = ({ file, onPassWordSave }) => {
    const [isPasswordEnable, setIsEnablePassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [toast, setToast] = useState();
    const { user } = useUser();

    const sendEmail = () => {

        setToast({
            status: 'Info',
            msg: 'Sending Email...!'
        })
        const data = {
            emailToSend: email,
            userName: user?.fullName,
            fileName: file.fileName,
            fileSize: file.fileSize,
            fileType: file.fileType,
            shortUrl: file?.shortUrl
        }
        GlobalApi.SendEmail(data).then(resp => {
            console.log(resp);
            setToast({
                status: 'success',
                msg: 'Email Sent Successfully!'
            })
        })
    }

    const onCopyClick = () => {
        navigator.clipboard.writeText(file.shortUrl);
        setToast({
            status: 'Copied',
            msg: 'Url Copied!'
        })

    }
    return file && (
        <div className='flex flex-col justify-between gap-2 h-[200px] md:h-[300px]'>
            <div>
                <label className='text-[14px] text-gray-500'>Short URL</label>
                <div className='flex gap-5 p-2 border rounded-md justify-between bg-white/75 '>
                    <input type='text' value={file.shortUrl} disabled
                        className='disabled:text-gray-600 bg-transparent
                        outline-none w-full'
                    />
                    <Copy className='text-gray-600 hover:text-gray-800 cursor-pointer'
                        onClick={() => onCopyClick()}
                    />
                </div>
            </div>
            <div className='gap-3 flex mt-5'>
                <input type='checkbox'
                    defaultChecked={file.password != ''}
                    onChange={(e) => setIsEnablePassword(e.target.checked)} />
                <label className='text-[14px] text-gray-500'>Enable Password</label>
            </div>
            {isPasswordEnable &&
                <div className='flex gap-3 items-center'>
                    <div className='border rounded-md w-full p-2 bg-white/75 '>
                        <input type='password'
                            defaultValue={file.password}
                            className='disabled:text-gray-500 justify-between bg-transparent outline-none text-gray-800'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='p-2 bg-primary disabled:text-white/75 text-white rounded-md
                 disabled:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-600'
                        disabled={password?.length < 3}
                        onClick={() => onPassWordSave(password)}
                    >
                        Save
                    </button>
                </div>}

            <div className='border border-slate-800 rounded-md p-3 mt-5'>
                <label className='text-[14px] text-gray-500'>Send file through Email</label>
                <div className='border rounded-md p-2 bg-white/75'>
                    <input type='email'
                        placeholder='example@abc.com'
                        className='bg-transparent outline-none w-full text-gray-800'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className='p-2 disabled:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed
                 bg-primary text-white hover:bg-blue-600
                w-full mt-2 rounded-md'
                    disabled={email?.length < 3}
                    onClick={() => sendEmail()}>
                    Send Email
                </button>
            </div>
            {toast?.status && <Toast toast={toast}
                closeToast={() => setToast(nulll)} />}
        </div>
    )
}

export default ShareFile