import {Header_top, Header_bottom} from "../../utils/index"
const Header = () => {
  return (
    <header className="w-full bg-blue-50 ">
      <div className="w-[1133px] mx-auto  py-20 ">
        <Header_top />
        <Header_bottom />
      </div>
    </header>
  )
}
export default Header