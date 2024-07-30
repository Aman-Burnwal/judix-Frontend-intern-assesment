const Body_container = ({ img, header, paragraph, reverse }) => {
    return (
        <div className="w-[1040px] h-[267.57px] font-popins">
            <div className={`flex flex-row ${reverse ? 'flex-row-reverse' : ''} gap-10`}>
                <div className="flex flex-col gap-5 w-[606px] h-[170px]"> 
                    <h1 className="text-[#263238] font-semibold leading-[60px] text-[28px]">{header}</h1>
                    <p className="font-[300] text-[16px] leading-[30px] ">{paragraph}</p>
                </div>
                <div className="w-[375px] h-[267.57px]">
                    <img src={img} />
                </div>

            </div>
        </div>
    )
}
export default Body_container