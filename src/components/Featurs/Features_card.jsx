const Features_card = ({ height, width, discripton, logo, header, scale  }) => {
  // console.log(height, width)
  return (
    <div style={{ height, width,  transform: `scale(${scale})` }}
      className={`bg-white rounded-xl  font-plus-jakarta -ml-12 relative
       box-border items-center content-center shadow-sm `}>
      <div className="flex flex-col gap-10 p-10">
        <div className="flex flex-row gap-5">
          <img height="55px" width="42px" src={logo} />
          <h1 className="text-[32px] leading-[40.32px] tracking-2pct font-bold text-[#009EFF] ">{header}</h1>
        </div>
        <div className="text-center leading-[37px] text-[#263238] w-[470px] text-xl font-[400px] ">
          {discripton}
        </div>
      </div>
    </div>
  )
}
export default Features_card