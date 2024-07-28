import { Features_card_details, left_icon, right_icon } from "../../utils/constant"
import Features_card from "./Features_card"

const Features = () => {
  return (
      <div className="w-full bg-slate-100 flex flex-col py-10 gap-10">
          <div className="w-9/12 mx-auto  ">
              <p className="text-[#8F8D8E] text-sm">That&apos;s where we come</p>
              <div className="flex flex-row justify-between">
                  <p className="text-[#455A64] text-xl font-semibold">Judix : The smarter way to manage your legal and financial matters.</p>
                  <div className="flex flex-row gap-5">
                      <div className="bg-[#DDDDDD]  size-10">
                          <img className="fill-[#263238]" height="20px" src={left_icon} />
                      </div>
                      <div className="bg-[#DDDDDD]  size-10">
                          <img className="fill-[#263238]" height="20px" src={right_icon} />
                      </div>
                    </div>
              </div>
          </div>
          <div className="relative w-full">
              <div className="  flex items-center flex-row justify-between gap-10">
                  
                  <div className="absolute w-[285px] z-20  h-[255px] bg-gradient-to-r from-[#F3F8FC] via-[rgba(255,255,255,0.86)] to-transparent"></div>
                  <div className="absolute w-[285px] z-20 right-0  h-[225px] bg-gradient-to-l from-[#F3F8FC] via-[rgba(255,255,255,0.86)] to-transparent"></div>
                  {Features_card_details.map((card, index) =>
                 
                  <Features_card
                      
                      key={card.feature_name} 
                      height={index == 1 ? "325px" : "225px"}
                      width={index == 1 ? "585px" : "405px"}
                      discripton={card.feature_discription}
                      logo={card.feature_icon}
                      header={card.feature_name}
                  
                  />)}
              </div>
          </div>
          <div className="flex w-full flex-row gap-3 justify-center ">
              <div className="h-[10px] w-[10px] bg-[#AAAAAA] rounded-full"></div>
              <div className="h-[10px] w-[10px] bg-[#AAAAAA] rounded-full"></div>
              <div className="h-[10px] w-[50px] bg-[#009EFF] rounded-full"></div>
              <div className="h-[10px] w-[10px] bg-[#AAAAAA] rounded-full"></div>
              <div className="h-[10px] w-[10px] bg-[#AAAAAA] rounded-full"></div>

          </div>
    </div>
  )
}
export default Features