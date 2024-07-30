import { Navigation_left, Navigation_right } from "../../utils"

const Navigation = () => {

    return (

        <nav className="w-[1440px] h-[70px] bg-[#FFFFFFBF] font-plus-jakarta ">
            <div className="w-8/12 ml-96 ">
                <div className="flex flex-row justify-between  p-3 items-baseline content-center">

                    <Navigation_left />
                    <Navigation_right />


                </div>
            </div>
        </nav>
    )
}
export default Navigation