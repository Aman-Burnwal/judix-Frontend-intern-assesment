import { body_btn_data, body_card_img, body_container_card } from "../../utils/constant"
import { Body_bottom, Body_btn, Body_card, Body_container, Feedback } from "../../utils/index";


const Body = () => {
    return (
        <div className="w-full bg-blue-50 py-10">
            <div className="flex flex-col gap-10 justify-center items-center content-center  ">
                <div className="flex flex-row gap-20">
                    {body_btn_data.map(data => <Body_btn key={data.text} color={data.color} text={data.text} />)}
                </div>

                <h1 className="text-[#0B2C4B] text-[40px] leading-[60px] font-bold ">All you need is <span className="text-[#F89A36]">Judix</span></h1>
                {
                    body_container_card.map((body, index) => <Body_container key={body.header}
                        img={body_card_img} 
                        header={body.header}
                        paragraph={body.paragraph}
                        reverse={index % 2 }
                    />
                    )
                }
                <div>
                    <Body_card />
                </div>
                <Feedback />
                <Body_bottom />
                
            </div>

        </div>
    )
}
export default Body