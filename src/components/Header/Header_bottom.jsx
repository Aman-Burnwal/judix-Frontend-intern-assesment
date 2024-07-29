
import { brnadLogoList } from "../../utils/constant"
import {StartuLogo} from "../../utils/index"


const Header_bottom = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 ">


      <div className="flex flex-row justify-center items-center gap-2">
        <div className="w-[100px] h-[2px] bg-[#6D6969] "></div>
        <div className="text-2xl text-[#455A64] leading-[25px] font-plus-jakarta tracking-8pct font-extrabold"> TRUSTED BY STARTUPS  <span className="text-[#F89A36]">LIKE YOURS</span> </div>
        <div className=" w-[100px] h-[2px] bg-[#6D6969] "></div>
      </div>

      <div className="flex flex-row  justify-evenly items-baseline content-center h-20">
        {brnadLogoList.map((image) =>
          <StartuLogo
            key={image.name}
            image={image.image}
            alt={image.name}
            height={image.height}
            width={image.width} />
        )}
      </div>

    </div>
  )
}
export default Header_bottom