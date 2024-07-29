import Body_subCard from "./Body_subCard"
import Body_subCard_right from "./Body_subCard_right"

const Body_card = () => {
  return (
      <div className="w-[959px] h-[500px]">
          <div className=" h-full flex flex-row  ">
            <Body_subCard />
            <Body_subCard_right />
          </div>
    </div>
  )
}
export default Body_card