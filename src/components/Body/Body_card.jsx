import Body_subCard from "./Body_subCard"
import Body_subCard_right from "./Body_subCard_right"

const Body_card = () => {
  return (
    <div className="w-[959px] h-[500px]">
      <div className="relative h-full flex flex-row  ">
        <h1 className=" absolute w-full  text-[#009EFF] text-[28px] leading-[30px] text-center font-semibold">VS</h1>
        <Body_subCard />
        <Body_subCard_right />
      </div>
    </div>
  )
}
export default Body_card