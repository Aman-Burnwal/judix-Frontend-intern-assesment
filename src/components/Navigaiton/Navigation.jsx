import { Navigation_left, Navigation_right } from "../../utils"

const Navigation = () => {

    return (

        <nav className="w-[1440px] h-[70px] bg-[#FFFFFFBF] ">

            <div className="flex flex-row justify-between w-4/5 ml-40 right-0 p-3 items-baseline content-center">
                
                <Navigation_left />
                <Navigation_right />

                
            </div>
        </nav>
    )
}
export default Navigation