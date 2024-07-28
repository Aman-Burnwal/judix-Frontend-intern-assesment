import {Header_top, Header_bottom} from "../../utils/index"
const Header = () => {
  return (
    <div className="w-full bg-[#dfdbec] ">
      <div className="w-3/5 mx-auto  py-20 ">
        <Header_top />
        <Header_bottom />
      </div>
    </div>
  )
}
export default Header