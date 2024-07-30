import { green_tick } from "../../utils/constant"

const Experties = () => {
    return (
        <div className="w-[1440px] h-[600px] pt-10 ">
            <div className=" relative w-9/12 mx-auto flex flex-col items-center font-plus-jakarta gap-12 ">
                <div className="flex flex-row justify-between gap-20">
                    <div >
                        <div className="h-[420px] w-[407px] bg-[#EEEEEE] rounded-[10px] "></div>
                    </div>
                    <div className="w-[668px] h-[426px] flex flex-col gap-10  font-plus-jakarta">
                        <h1 className="text-4xl font-bold leading-[45.36px] tracking-2pct text-[#0B2C4B] ">Expert Consultation</h1>
                        <p className="text-[#263238] text-[20px] leading-[35px] font-[500]">Get personalized legal and financial guidance from anywhere with our online platform connecting you to certified experts.</p>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-5">
                                <img src={green_tick} alt="tick" />
                                <p className="text-[#455A64] font-normal text-lg leading-[32px]">Expert guidance 24*7</p>
                            </div>
                            <div className="flex flex-row gap-5">
                                <img src={green_tick} alt="tick" />
                                <p className="text-[#455A64] font-normal text-lg leading-[32px]">Experienced lawyers and chartered accountants from all over India</p>
                            </div>
                            <div className="flex flex-row gap-5">
                                <img src={green_tick} alt="tick" />
                                <p className="text-[#455A64] font-normal text-lg leading-[32px]">Get transcription and recordings of consultation for future reference</p>
                            </div>
                            
                        </div>
                        <button className="text-white text-lg leading-[30px] tracking-2pct font-popins  bg-[#1B72B1] w-[166px] h-[52px] rounded-md">Learn more</button>
                    </div>
                </div>

                <div className="flex flex-row gap-3 ">
                    <div className="size-[10px] bg-[#AAAAAA] rounded-full "></div>
                    <div className="w-[50px] bg-[#009EFF] h-[10px] rounded-[5px] "></div>
                </div>
            </div>
        </div>
    )
}
export default Experties