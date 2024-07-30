import { NavList } from "../../utils"

const Navigation_left = () => {
  return (
      <ul className="flex flex-row gap-4 list-none content-center items-center  text-xl">
          {NavList.map((list) => {
              return <li key={list} className="text-lg leading-[22.68px]  text-center">{list}</li>
          })}
          <li className="border w-[180px] h-[40px]  rounded-md font-[500px] text-lg leading-[22.67px] 
          border-[#1B72B1] text-[#1B72B1] text-center content-center cursor-pointer ">Talk to Lawyer/CA </li>
      </ul>

  )
}
export default Navigation_left