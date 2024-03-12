import React from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <div className='bg-white/85 w-full mt-3 h-4 rounded-full'>
            <div className='bg-primary rounded-full h-4 text-sm text-white/85'
                style={{ width: `${progress}%` }}
            >
                {`${Number(progress).toFixed(0)}%`}
            </div>
        </div>
    )
}

export default ProgressBar