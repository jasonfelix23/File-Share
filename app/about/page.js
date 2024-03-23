import React from 'react';
import FaqSection from './_components/FaqSection'
import Header from '../_components/Header';

const about = () => {
    return (
        <div>
            <Header />
            <div className='w-2/3 flex mx-auto mt-10'>
                <FaqSection />
            </div>
        </div>
    )
}

export default about