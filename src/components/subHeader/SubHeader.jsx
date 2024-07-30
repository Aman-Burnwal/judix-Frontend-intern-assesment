import { subHeaderData } from "../../utils/constant"
import SubHeader_card from "./SubHeader_card"

const SubHeader = () => {
  return (
      <div className="relative w-full font-plus-jakarta ">
          <div className=" flex flex-col py-10 tracking-2pct justify-center items-center content-center ">
              <h2 className="text-center font-semibold text-[28px] leading-[35.28px] text-[#263238]">Managing legal affairs is complicated!</h2>

              <div className="flex flex-row gap-12">
                  {subHeaderData.map(data => <SubHeader_card key={data.logo} image={data.logo} text={data.para} />)
                     }
              </div>
              <div className="flex flex-row gap-2">
                  <div className="w-[10px] h-[10px]  bg-[#AAAAAA] rounded-xl"></div>
                  <div className="w-[50px] h-[10px] bg-[#009EFF] rounded-lg"></div>
              </div>
          </div>
          
    </div>
  )
}
export default SubHeader