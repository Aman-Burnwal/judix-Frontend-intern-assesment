const Features_card = ({ height, width, discripton, logo, header}) => {
  return (
      <div className={`bg-white rounded-xl h-[${height}]  box-border items-center content-center shadow-sm relative`}>
          <div className="flex flex-col gap-10 p-10">
          <div className="flex flex-row gap-10">
              <img height="20px" src={logo} />
                  <h1 className="text-2xl font-bold text-[#009EFF] ">{ header}</h1>
          </div>
              <div className="text-center  text-xl font-[400px] ">{discripton}</div>
          </div>
    </div>
  )
}
export default Features_card