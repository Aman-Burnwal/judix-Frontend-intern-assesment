import {FooterTop} from "../../utils/index"

const Footer = () => {
  return (
      <footer className="w-full bg-[#0B2C4B] font-plus-jakarta h-[200px]  py-1 px-16 text-white">
          <div>
              <FooterTop/>
          </div>
          <div className="flex flex-row justify-between items-center p-2 font-plus-jakarta pt-4">
              <p className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal">2024&apos;© Black Coat Technologies Pvt. Ltd. | All Rights Reserved</p>
              <div className="flex flex-row gap-10 text-sm ">
                  <div className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Privacy Policy</div>
                  <div className="text-[#E9F2F9] text-[15px] leading-[18.9px] font-normal cursor-pointer">Terms & Conditions</div>
              </div>
          </div>
      </footer>
  )
}
export default Footer