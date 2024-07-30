const Body_card_component = ({ header, line, logo, alt, para ,color}) => {
  
  return (
      <div className="flex flex-col w-[360px]   ml-10">
          <div className="flex flex-row gap-5 items-center font-plus-jakarta ">
              <div>
                  <img
                      
                      className="h-[40px] w-[34px] "
                      src={logo}
                  ></img>
              </div>
              <div className="flex flex-col w-[299px] h-[92px] font-plus-jakarta gap-2">
                  <h2 className="text-lg font-extrabold leading-[22.68px] ">{header}</h2>
                  <p className="text-sm leading-[18px] font-medium  ">{ para}</p>
              </div>
          </div>
          {line && <div className={`w-full h-[14px] font-[500] leading-[30px]  border-b-[2px]  border-[${color}] border-dotted `}></div>}
    </div>
  )
}
export default Body_card_component