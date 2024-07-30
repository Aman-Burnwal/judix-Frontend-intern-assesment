import { quote_icon } from "../../utils/constant"

const Quote = () => {
  return (
      <blockquote className="flex flex-row w-[663px] font-plus-jakarta  ">
          <h1 className="-mt-2 w-[75px]  items-stretch pl-8">
              <img className="leading-[126px] " height="35px" width="35px" src={quote_icon} />
          </h1>


          <p className="w-[585px] text-lg leading-[30px] text-[#6D6969] font-[500]">This is one of the best Legal Tech platform I have ever used.
              This platform is the one stop solution that most startups should use for their
              legal and consultation purposes. Kudos to the brains behind this platform.
          </p>
      </blockquote>
  )
}
export default Quote