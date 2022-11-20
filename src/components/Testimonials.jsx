import React from 'react';
import { stats } from '../constants';
import FeedbackCard from './FeedBackCard'
import Button from './Button'

const Testimonials = () => {
    return (
        <section>
            <div className='mt-[76px]'>
                <h1 className='font-montserrat font-extrabold text-4xl text-[#2A2367]'>
                    Мы создаем интернет-магазины, <span className='text-[#6B5AF9]'> которые продают </span>
                </h1>
                <div className="mt-7 flex flex-wrap justify-center relative z-[1]">
                    {stats.map((card) => <FeedbackCard key={card.id} {...card} />)}
                </div>
                <Button />
            </div>
        </section>
    )
}

export default Testimonials