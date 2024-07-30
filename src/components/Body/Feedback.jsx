import { michel_sibel } from "../../utils/constant"
import { Quote } from "../../utils/index"

const Feedback = () => {
    return (
        <section className="flex flex-col gap-10">
            <h1 className="text-[#0B2C4B]  text-center text-4xl leading-[60px] font-bold font-popins">
                What our <span className="text-[#F89A36]">users</span> say about us
            </h1>
            <div className="bg-[#afafaf18] h-[250px] w-[982px]  rounded-lg flex flex-row content-center items-center justify-between px-10">

                <Quote />

                <div className="w-[145px] h-[150.83px] font-plus-jakarta text-[#0B2C4B]">
                    <div className="flex justify-center items-center">
                        <img className="rounded-full" height="100px" width="100px" src={michel_sibel}></img>
                    </div>
                    <h3 className="font-semibold text-lg leading-[22.68px] ">Michael Siebel</h3>
                    <p className="text-sm leading-[17.64px] font-normal">CEO, Y COMBINATOR</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-1 ">
                <div className="size-[10px] bg-[#1B72B1] rounded-full"></div>
                <div className="size-[10px] bg-[#7DB1D1] rounded-full" ></div>
                <div className="size-[10px] bg-[#7DB1D1] rounded-full"></div>
                <div className="size-[10px] bg-[#7DB1D1] rounded-full"></div>



            </div>
        </section>
    )
}
export default Feedback