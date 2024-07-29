import { michel_sibel } from "../../utils/constant"
import {Quote} from "../../utils/index"

const Feedback = () => {
  return (
      <section className="flex flex-col gap-10">
          <h1 className="text-[#0B2C4B]  text-center text-4xl font-semibold">
              What our <span className="text-[#F89A36]">users</span> say about us
          </h1>
          <div className="bg-[#AFAFAF1A] h-[250px] w-[982px] flex flex-row content-center items-center justify-between px-10">
              
             <Quote />

              <div className="w-[145px] h-[150.83px]">
                  <div>
                      <img className="rounded-full" height="100px" width="100px" src={michel_sibel}></img>
                  </div>
                  <h3 className="font-bold text-lg">Michael Siebel</h3>
                  <p className="text-sm">CEO, Y COMBINATOR</p>
              </div>
          </div>
    </section>
  )
}
export default Feedback