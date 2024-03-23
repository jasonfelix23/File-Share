import { CheckCircle2 } from 'lucide-react'
import React from 'react'

const CompleteCheck = () => {
    return (
        <div className='flex flex-col gap-2 px-2 py-3 w-full justify-center text-3xl text-center'>
            <CheckCircle2 className='text-primary mx-auto block h-16 w-16' />
            <h2 className='text-white/75'>File  <strong className='text-primary'> Uploaded </strong> successfully</h2>
        </div>
    )
}

export default CompleteCheck