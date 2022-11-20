import { useState } from "react";
import { close, logo, menu, phone, menu2 } from "../assets";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className="w-full flex justify-between items-center py-6">
            <div className="md:hidden flex">
                <img
                    src={toggle ? menu2 : menu}
                    alt="menu"
                    className="w-[60px] h-[60px] cursor-pointer transition-all"
                    onClick={() => setToggle((prev) => !prev)}
                />

            </div>
            <div className={` ${toggle ? "block" : "hidden"} h-full left-0 absolute top-20 w-full`}>
                <img src={close} alt="close" className="cursor-pointer absolute xs:w-[14px] ss:w-[20px] top-10 left-5" onClick={() => setToggle((prev) => !prev)} />
                <ul className="h-[100vh] w-full flex flex-col p-4 mt-4 border bg-white">
                    <li className="mt-12">
                        <a href="#" className="flex justify-center items-center py-2 pl-3 pr-4 dark:text-[#2A2367] rounded hover:bg-gray-100 md:hover:text-blue-700 dark:font-bold dark:hover:bg-gray-700 dark:hover:text-white">Главная</a>
                    </li>
                    <li>
                        <a href="#" className="flex justify-center items-center py-2 pl-3 pr-4 dark:text-[#2A2367] rounded hover:bg-gray-100 md:hover:text-blue-700 dark:font-bold dark:hover:bg-gray-700 dark:hover:text-white">Цены</a>
                    </li>

                    <li>
                        <a href="#" className="flex justify-center items-center py-2 pl-3 pr-4 dark:text-[#2A2367] rounded hover:bg-gray-100 md:hover:text-blue-700 dark:font-bold dark:hover:bg-gray-700 dark:hover:text-white">Кейсы и отзывы</a>
                    </li>
                    <li>
                        <a href="#" className="flex justify-center items-center py-2 pl-3 pr-4 dark:text-[#2A2367] rounded hover:bg-gray-100 md:hover:text-blue-700 dark:font-bold dark:hover:bg-gray-700 dark:hover:text-white">Контакты</a>
                    </li>
                    <li>
                        <a href="#" className="flex justify-center items-center py-2 pl-3 pr-4 dark:text-[#6B5AF9] rounded hover:bg-gray-100 md:hover:text-blue-700 dark:font-bold dark:hover:bg-gray-700 dark:hover:text-white">info@millenium.ru</a>
                    </li>
                    <li>
                        <a href="#" className="flex justify-center items-center py-2 pl-3 pr-4 dark:text-[#6B5AF9] rounded hover:bg-gray-100 md:hover:text-blue-700 dark:font-bold dark:hover:bg-gray-700 dark:hover:text-white">+7 (495) 792-66-69 <br />
                            &nbsp; пн-пт 10:00–19:00</a>
                    </li>
                </ul >
            </div >
            <div className="md:w-full flex items-center">
                <img src={logo} alt="hoobank" className="w-[161px] h-[55px] md:mr-[45px] " />
                <ul className="list-none hidden md:flex flex-row items-start p-0 gap-[27px]">
                    <li className="font-monserrat cursor-pointer text-[14px] leading-4 text-[#2A2367] font-bold">Цены</li>
                    <li className="font-monserrat cursor-pointer text-[14px] leading-4 text-[#2A2367] font-bold">Кейсы и отзывы</li>
                    <li className="font-monserrat cursor-pointer text-[14px] leading-4 text-[#2A2367] font-bold">Контакты</li>
                    <li className="font-monserrat cursor-pointer text-[14px] leading-4 text-[#2A2367] font-bold">Главная</li>
                </ul>

            </div>
            <div className="md:hidden flex">
                <img
                    src={phone}
                    alt="menu"
                    className="w-[60px] h-[60px] cursor-pointer"
                />
            </div>



            <div className="hidden md:flex gap-[20px] items-center justify-center content-end">
                <button className="bg-[#6B5AF9] rounded-md w-[177px] h-[60px]">
                    <p className="font-montserrat font-extrabold text-[12px] leading-4 text-white">Заказать звонок</p>
                </button>
            </div>

        </nav >
    )
}

export default Navbar