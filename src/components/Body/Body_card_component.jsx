const Body_card_component = ({ header, line, logo, alt, para }) => {
  
  return (
      <div className="flex flex-col w-[360px]   ml-10">
          <div className="flex flex-row gap-5 items-center">
              <div>
                  <i className={`fas ${logo}  text-4xl `}></i>
              </div>
              <div className="flex flex-col w-[299px] h-[92px] font-plus-jakarta gap-2">
                  <h2 className="text-lg font-extrabold leading-8  text-nowrap">{header}</h2>
                  <p className="text-sm leading-[16px] font-medium  ">{ para}</p>
              </div>
          </div>
          {line && <div className="w-full h-1 border-b  border-white border-dotted  "></div>}
    </div>
  )
}
export default Body_card_component