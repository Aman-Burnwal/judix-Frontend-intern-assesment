import { Features_card_details, left_icon, right_icon } from "../../utils/constant"
import Features_card from "./Features_card"

const Features = () => {
  return (
      <div className="w-full bg-blue-50 flex flex-col py-10 gap-10">
          <div className="w-10/12 mx-auto font-popins ">
              <p className="text-[#8F8D8E] text-lg leading-[27px] tracking-2pct">That&apos;s where we come</p>
              <div className="flex flex-row justify-between pt-4">
                  <p className="text-[#455A64] text-[28px] leading-[42px] tracking-2pct font-semibold">Judix : The smarter way to manage your legal and financial matters.</p>
                  <div className="flex flex-row gap-5">
                      <div className="bg-[#DDDDDD]  size-[50px] rounded-[10px] flex items-center justify-center">
                          <img className="  h-[20px]  "  src={left_icon} />
                      </div>
                      <div className="bg-[#DDDDDD]  size-[50px] rounded-[10px] flex items-center justify-center">
                          <img className="fill-[#263238]  h-[20px] " src={right_icon} />
                      </div>
                    </div>
              </div>
          </div>
          <div className="relative w-full">
              <div className="  w-full  flex  gap-4
               flex-row ">
                  
                  <div className="absolute w-[475px] z-20  h-[265px] bg-gradient-to-r from-[#F3F8FC] via-[rgba(255,255,255,0.86)]to-transparent"></div>
                  <div className="absolute w-[265px] z-20 right-0  h-[215px] bg-gradient-to-l mt-6  from-[#F3F8FC] via-[rgba(255,255,255,0.86)] to-transparent"></div>
                  
                  {Features_card_details.map((card, index) =>
                 
                  <Features_card
                      
                      key={card.feature_name} 
                          height="265px"
                          width="545px"
                          scale={index == 1 ? "1" : "0.8"}

           
                      discripton={card.feature_discription}
                      logo={card.feature_icon}
                      header={card.feature_name}
                  
                      />
                  )}
                 
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