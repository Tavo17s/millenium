import React from 'react'
import { first, second, third, fourth } from '../assets'
import Button from './Button'

const Card = () => {

    return (
        <section id="card">
            <div className='mt-[150px]'>
                <h1 className='font-montserrat font-extrabold text-[36px] leading-[40px]'>
                    Что вы <span className='text-[#6B5AF9]'>получаете ?</span>
                </h1>
            </div>
            <div className='flex flex-col md:flex-row md:justify-center items-center mt-[54px]'>
                <div>
                    <img src={first} alt="img" />
                </div>
                <div className='ml-[71px]'>
                    <h1 className='font-montserrat font-bold text-[18px] leading-[22px] text-[#6B5AF9]'>
                        Каталог товаров
                    </h1>
                    <ul className='list-disc mb-2'>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>возможность выгружать свои товары в неограниченном количестве</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>добавлять и редактировать описание товаров</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>сортировать товары по заданным критериям</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>моментальная оплата товара или оформление при помощи добавления корзины</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse md:justify-center items-center mt-[24px]'>
                <div>
                    <img src={second} alt="img" />
                </div>
                <div className='ml-[71px]'>
                    <h1 className='font-montserrat font-bold text-[18px] leading-[22px] text-[#6B5AF9]'>
                        Оформление заказа
                    </h1>
                    <ul className='list-disc mb-2'>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>личный кабинет</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>корзина с отображением выбранных товаров</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>оформление заказа с указанием контактных данных</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>возможность приема онлайн-платежей</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>использование купонов, скидок и специальных предложений</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-center items-center mt-[24px]'>
                <div>
                    <img src={third} alt="img" />
                </div>
                <div className='ml-[71px]'>
                    <h1 className='font-montserrat font-bold text-[18px] leading-[22px] text-[#6B5AF9]'>
                        Интеграции
                    </h1>
                    <ul className='list-disc mb-2'>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>1С, Мой склад (выгрузка товаров на сайт, полная синхронизация)</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>Маркетплейсы (Яндекс.Маркет, Wildberries, Goods, Ozon)</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>Интеграция со службами доставки СДЭК, Почта России</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse md:justify-center items-center mt-[24px]'>
                <div>
                    <img src={fourth} alt="img" />
                </div>
                <div className='ml-[71px]'>
                    <h1 className='font-montserrat font-bold text-[18px] leading-[22px] text-[#6B5AF9]'>
                        CRM
                    </h1>
                    <ul className='list-disc mb-2'>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>фиксация и отслеживание поступивших заявок</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>уведомления о заказах</li>
                        <li className='font-montserrat font-normal text-[14px] leading-[17px] text-[#2A2367] mt-2'>отчетность магазина</li>
                    </ul>
                </div>
            </div>

            <div className="mt-20">
                <Button />
            </div>

        </section>
    )
}

export default Card