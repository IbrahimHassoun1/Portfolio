import PropTypes from "prop-types"


const BookIcon = ({icon,name}) => {
  return (
    <div className="flex flex-col shadow-sm hover:shadow-lg min-h-52 h-fit w-1/3 sm:w-1/6 justify-center items-center rounded-lg hover:mr-3   hover:shadow-secondary shadow-secondary transition-all duration-500">
        <div className="h-2/3"><img src={icon} alt="book picture" className="w-20 h-full mt-2" loading={"lazy"}/></div>
        <div className="h-1/3 flex justify-center items-center"><h1 className=" text-lg text-center mt-2">{name}</h1></div>
    </div>
  )
}
BookIcon.propTypes={
    icon:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
}

export default BookIcon