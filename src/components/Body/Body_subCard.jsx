
import { body_card_judix_data,  judix_logo2 } from "../../utils/constant"
import Body_card_component from "./Body_card_component"

const Body_subCard = () => {
  return (
      <div className="bg-custom-gradient  w-[495.45px] flex flex-col pl- gap-8 rounded-md
       rounded-bl-lg rounded-tl-lg  clip-custom  text-white z-30  
      ">
          <div className=" ml-32  mt-8">
              <img className="block" width="90px" height="46px" src={judix_logo2} />
          </div>
          
          {body_card_judix_data.map((data, index) => 
              <Body_card_component
                  key={data.para}
                  para={data.para}
                  header={data.title}
                  logo={data.icon} 
                  line={index != body_card_judix_data.length - 1}
                  color={"white"}
                  />
          
          )}
          
      </div>
  )
}
export default Body_subCard