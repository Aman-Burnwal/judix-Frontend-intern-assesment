import { body_card_regular_data } from "../../utils/constant"
import Body_card_component from "./Body_card_component"

const Body_subCard_right = () => {
  return (
      <div className=" shadow-md w-[495.45px] flex flex-col  gap-8 rounded-lg
       rounded-bl-lg rounded-tl-lg  clip-custom-left text-[#455A64]  bg-white z-20 -ml-9
      ">
       
         <p className="text-center font-[500px] text-2xl mt-8  leading-[30px] font-popins pb-5 " >Regular</p>
       
        <div className="gap-8  flex flex-col pl-9">
          {body_card_regular_data.map((data, index) =>
              <Body_card_component
                  key={data.para}
                  para={data.para}
                  header={data.title}
                  logo={data.icon}
                  line={index != body_card_regular_data.length - 1}
                  color={"#455A64"}
              />

              )}
          </div>
      </div>
  )
}
export default Body_subCard_right