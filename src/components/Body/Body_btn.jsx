const Body_btn = ({ text, color }) => {
    console.log(text, color)
    return (
      
        <button 
            style={{ backgroundColor: color }}
            className={`text-white  font-[500] h-[78px] w-[332px] text-xl rounded-lg`}>
            {text}
            
            </button>
  )
}
export default Body_btn