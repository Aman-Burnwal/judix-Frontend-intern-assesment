

import { socialMedia, judix_logo, email_logo, phone_logo } from "../../utils/constant";
import { Logo } from "../../utils/index";

const FooterTop = () => {
    return (
        <div>
            <div className="flex flex-row justify-between p-4">
                <ul className="flex items-center ">
                    <img src={judix_logo} height="60px" width="120px" alt="judix logo" />
                </ul>
                <ul className=" flex flex-col gap-5 items-end">
                    <li>Plus Jakarta Sans</li>
                    <li>
                        <button className="border border-[#F89A36] text-[#F89A36] px-2 py-1 rounded-sm">Lawyer/CA click here</button>
                    </li>
                </ul>
                <ul className="flex flex-col gap-3">
                    <li>Products</li>
                    <li>Features</li>
                    <li>Talk to a Lawyer</li>
                    <li>Talk to a CA</li>
                </ul>
                <ul className="flex flex-col gap-3">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Careers</li>
                </ul>
                <ul className="flex flex-col gap-5">
                    <li className="flex flex-row gap-2 ">
                        
                        <div>
                            <img height="25px" width="25px" src={phone_logo} alt="phone_logo" />
                        </div>
                        <div>Request a Callback</div>
                    </li>
                    <li className="flex flex-row gap-2 ">
                        <div>
                            <img height="25px" width="25px" src={email_logo} alt="phone_logo" />
                        </div>
                        <div>projectx@gmail.com</div>
                        
                    </li>
                    <ul className="flex flex-row gap-5">
                        {
                            socialMedia.map((logo) => <Logo key={logo} logo={logo} />)
                        }

                    </ul>
                    
                </ul>
            </div>
            <div className="w-full h-[0.1px] bg-white"></div>
        </div>
    )
}
export default FooterTop