const FeedbackCard = ({ id, title, value }) => (
    <div className="flex justify-between flex-col px-5 py-4 md:py-12 rounded-[20px] ">
        <div className="w-[373px] h-[200px] flex flex-col box-shadow rounded-xl  ">
            <h1 className="ml-[15px] mr-[38px] font-montserrat font-bold text-[64px] leading-[78px]">
                <span className="text-white text-shadow-md">{id}</span>
            </h1>
            <div className="flex flex-col ml-4">
                <h4 className="ml-[15px] mr-[38px] font-montserrat font-bold text-[14px] leading-[17px] text-[#2A2367] mt-0">
                    {title}
                </h4>
                <div className="ml-[15px] mr-[38px] mt-[10px] w-[175px] h-[2px] border-solid bg-[#E37575]">
                </div>
                <p className="mb-[39px] ml-[15px] mr-[38px] max-h-[60px] max-w-[344px] mt-2 font-montserrat font-normal text-[12px] leading-[15px] text-[#2A2367]">
                    {value}
                </p>
            </div>
        </div>
    </div>
);


export default FeedbackCard;