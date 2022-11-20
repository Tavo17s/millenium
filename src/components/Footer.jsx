import { whatsapp2, telegram2, logo2 } from "../assets"

const Footer = () => {
    return (
        <footer>
            <div className='w-full bg-[#2A2367] pt-20 px-[40px]'>
                <h2 className=' text-white font-bold font-montserrat text-[20px] leading-[29px] lg:text-[36px] lg:leading-[44px]'>
                    Напишите нам
                </h2>
                <div className='flex justify-start flex-col sm:flex-row sm:justify-between sm:items-center'>
                    <h1 className='mt-[30px] font-montserrat font-bold text-[29px] leading-[35px] lg:text-[48px] lg:leading-[59px] text-[#6B5AF9]'>
                        info@millenium.ru
                    </h1>
                    <div className='flex mt-8'>
                        <button className="bg-[#6B5AF9] rounded-md w-[275px] h-[60px]">
                            <p className="font-montserrat font-extrabold text-[12px] leading-4 text-white">Узнать стоимость</p>
                        </button>
                    </div>

                </div>
                <div className='mt-[33px] w-full h-[2px] bg-[#6B5AF9]'>

                </div>

                <div className='mt-11 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center'>
                    <p className='mb-4 max-w-[310px] font-montserrat font-bold text-[18px] leading-[22px] text-white'>
                        Москва,
                        ул. Профсоюзная 76,БЦ «ГАЛЕРЕЯ 76» 2 этаж
                    </p>
                    <div className="flex mb-14 gap-5 sm:mb-0">
                        <img src={whatsapp2} alt="a" />
                        <img src={telegram2} alt="a" />
                    </div>
                </div>
                <div className="max-w-[178px] mt-6 sm:mt-0 font-montserrat font-bold text-lg leading-[22px] text-white">
                    <p>+7 (495) 792-66-69
                        пн-пт 10:00–19:00</p>
                </div>
                <div className="flex mt-8 sm:mt-0 flex-col justify-center items-center">
                    <div>
                        <img src={logo2} alt="a" />
                    </div>
                    <div className="flex flex-col mt-5 justify-center items-center">
                        <p className="mb-4 font-montserrat font-normal text-sm text-white">© 2018–2021 | Millenium - создание интернет-магазинов на 1С Битрикс</p>
                        <p className="mb-14 font-montserrat font-normal text-sm text-white">Политика конфиденциальности</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer