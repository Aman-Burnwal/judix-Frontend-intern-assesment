import { subHeaderData } from "../../utils/constant"
import SubHeader_card from "./SubHeader_card"

const SubHeader = () => {
  return (
      <div className="relative w-full ">
          <div className=" flex flex-col py-4 justify-center items-center content-center ">
              <h2 className="text-center font-semibold text-xl">Managing legal affairs is complicated!</h2>

              <div className="flex flex-row gap-12">
                  {subHeaderData.map(data => <SubHeader_card key={data.logo} image={data.logo} text={data.para} />)
                     }
              </div>
              <div className="flex flex-row gap-1">
                  <div className="w-2 bg-slate-700 h-2 rounded-xl"></div>
                  <div className="w-8 bg-blue-500 h-2 rounded-lg"></div>
              </div>
          </div>
          
    </div>
  )
}
export default SubHeader