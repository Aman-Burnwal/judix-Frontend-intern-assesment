import { green_tick } from "../../utils/constant"

const Experties = () => {
    return (
        <div className="w-[1440px] h-[600px] pt-10 ">
            <div className=" relative w-9/12 mx-auto flex flex-col items-center">
                <div className="flex flex-row justify-between gap-20">
                <div >
                    <div className="h-[420px] w-[407px] bg-[#e8e3e3] "></div>
                </div>
                <div className="w-[668px] h-[426px] flex flex-col gap-10">
                    <h1 className="text-3xl font-bold">Expert Consultation</h1>
                    <p>Get personalized legal and financial guidance from anywhere with our online platform connecting you to certified experts.</p>
                    <div className="flex flex-row gap-5">
                        <img src={green_tick} alt="tick" />
                        <p>Expert guidance 24*7</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <img src={green_tick} alt="tick" />
                        <p>Experienced lawyers and chartered accountants from all over India</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <img src={green_tick} alt="tick" />
                        <p>Get transcription and recordings of consultation for future reference</p>
                    </div>
                    <button className="text-white px-4 py-2 bg-blue-600 w-fit rounded-sm">Learn more</button>
                    </div>
                </div>

                <div className="flex flex-row gap-1 pt-4">
                    <div className="w-2 bg-slate-700 h-2 rounded-xl"></div>
                    <div className="w-8 bg-blue-500 h-2 rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}
export default Experties