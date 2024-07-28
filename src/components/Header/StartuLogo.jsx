const StartuLogo = ({image, alt, height, width}) => {
  return (
    // <div className=" bg-red-500">
    <img
      className="bg-transparent"
        height={height}
        width={width}

        src={image} alt={alt} />
    //  </div>
  )
}
export default StartuLogo