import { subHeaderData } from "../../utils/constant"
import dots from "../../assets/dots-blue.png"

const SubHeader_card = ({image, text}) => {
    return (
        <div className="shadow-custom h-[250px] w-[500px] rounded-lg my-10">

            <div className="flex flex-col justify-center items-center 
            content-center p-10 gap-5 text-cente text-lg leading-[30px] font-normal">
                <div> 
                    <img className="h-[30px]" src={image}  alt="dots"/>
                </div>
                <div className="text-center">{text}</div>
            </div>

        </div>
    )
}
export default SubHeader_card