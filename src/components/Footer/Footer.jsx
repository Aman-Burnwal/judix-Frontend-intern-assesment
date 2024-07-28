import {FooterTop} from "../../utils/index"

const Footer = () => {
  return (
      <footer className="w-full bg-[#0B2C4B]  py-1 px-6 text-white">
          <div>
              <FooterTop/>
          </div>
          <div className="flex flex-row justify-between opacity-80 p-2">
              <p>2024&apos;© Black Coat Technologies Pvt. Ltd. | All Rights Reserved</p>
              <div className="flex flex-row gap-10 text-sm ">
                  <div className="">Privacy Policy</div>
                  <div>Terms & Conditions</div>
              </div>
          </div>
      </footer>
  )
}
export default Footer