

import { socialMedia, email_logo, phone_logo, judix_logo2 } from "../../utils/constant";
import { Logo } from "../../utils/index";

const FooterTop = () => {
    return (
        <div>
            <div className="flex flex-row justify-between p-4 text-[#E9F2F9]">
                <ul className="flex items-center ">
                    <img src={judix_logo2} height="60px" width="120px" alt="judix logo" />
                </ul>
                <ul className=" flex flex-col gap-5 items-end">
                    <li className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Plus Jakarta Sans</li>
                    <li>
                        <button className="border border-[#F89A36] text-[18px] font-[500] leading-[22.68px] 
                        text-[#F89A36] w-[209px] h-[40px] rounded-md font-plus-jakarta cursor-pointer">Lawyer/CA click here</button>
                    </li>
                </ul>
                <ul className="flex flex-col gap-3 text-[#E9F2F9]">
                    <li className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Products</li>
                    <li className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Features</li>
                    <li className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Talk to a Lawyer</li>
                    <li className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Talk to a CA</li>
                </ul>
                <ul className="flex flex-col gap-3 text-[#E9F2F9]">
                    <li className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">About Us</li>
                    <li className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Contact Us</li>
                    <li className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Careers</li>
                </ul>
                <ul className="flex flex-col gap-5">
                    <li className="flex flex-row gap-2 ">
                        
                        <div>
                            <img className="cursor-pointer" height="25px" width="25px" src={phone_logo} alt="phone_logo" />
                        </div>
                        <div className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Request a Callback</div>
                    </li>
                    <li className="flex flex-row gap-2 ">
                        <div>
                            <img className="cursor-pointer" height="25px" width="25px" src={email_logo} alt="phone_logo" />
                        </div>
                        <div className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">projectx@gmail.com</div>
                        
                    </li>
                    <ul className="flex flex-row gap-5">
                        {
                            socialMedia.map((logo) => <Logo key={logo} logo={logo} />)
                        }

                    </ul>
                    
                </ul>
            </div>
            <div className="w-full h-[0.1px] bg-[#6D6969]"></div>
        </div>
    )
}
export default FooterTop