import React from 'react'
import { computer, ellipsis } from '../assets'
import Button from './Button'
const Hero = () => {
    return (
        <section id="home" className='w-full flex md:flex-row flex-col sm:py-16 py-6'>

            <div className='md:w-1/2 flex flex-1 justify-between items-start flex-col xl:px-0 pl-[40px] md:pl-[140px]'>
                <div className='md:max-w-[653px]'>
                    <h1 className='font-montserrat font-bold text-[36px] leading-[44px] text-[#2A2367]'>
                        Разработка интернет-магазинов
                    </h1>
                    <h1 className='font-montserrat font-bold text-[36px] leading-[44px] text-[#6B5AF9]'>
                        на 1C-Битрикс
                    </h1>
                </div>
                <div className='mt-[30px] w-full max-w-[619px]'>
                    <p className='font-montserrat font-normal text-[16px] leading-[20px] text-[#2A2367]'>
                        Разработаем интернет-магазин за 30 дней с уникальным дизайном и продуманной структурой который <span className='text-[#6B5AF9] font-bold'>выделит вас на фоне конкурентов</span>
                    </p>
                </div>
                <Button />
                <div className='max-w-[472px] max-h-[64px] mt-0'>
                    <p className='font-montserrat font-semibold text-xs leading-[16px] text-[#6B5AF9]'>Оставьте заявку и получите бесплатную консультацию от специалиста, полный расчет стоимости разработки и бонус: </p>
                    <p className='font-montserrat font-semibold text-xs leading-[16px] text-[#2A2367]'>«15 сервисов которые покажут стратегию продвижения конкурентов, всё об их выдаче в поиске и не только»</p>
                </div>
            </div>

            <div className='md:w-1/2 flex flex-1 justify-center items-center md:my-0 my-10 relative md:top-[-90px] md:right-8'>
                <img src={computer} alt="c" className='w-[100%] h-[100%] relative z-[5]' />
                <img src={ellipsis} alt="e" className='absolute z-[0]' />

            </div>

        </section>
    )
}

export default Hero