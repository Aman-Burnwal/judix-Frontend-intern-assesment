import { NavList } from "../../utils"

const Navigation_left = () => {
  return (
      <ul className="flex flex-row gap-4 list-none text-xl">
          {NavList.map((list) => {
              return <li key={list} className="tex-xl text-center">{list}</li>
          })}
          <li className="border w-[180px] text-xl border-[#1B72B1] text-[#1B72B1] text-center">Talk to Lawyer/CA </li>
      </ul>

  )
}
export default Navigation_left