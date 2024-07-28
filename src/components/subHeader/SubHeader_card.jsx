import { subHeaderData } from "../../utils/constant"
import dots from "../../assets/dots-blue.png"

const SubHeader_card = ({image, text}) => {
    return (
        <div className="shadow-custom h-[200px] w-[400px] rounded-lg my-10">

            <div className="flex flex-col justify-center items-center content-center p-10 gap-5 text-center">
                <div> 
                    <img className="h-6" src={image}  alt="dots"/>
                </div>
                <div>{text}</div>
            </div>

        </div>
    )
}
export default SubHeader_card