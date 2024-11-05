import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TechIcon = ({icon,name}) => {
  return (
    <div className="flex flex-col shadow-sm hover:shadow-lg h-20 w-20 justify-center items-center rounded-lg hover:mr-3   hover:shadow-secondary shadow-secondary">
        <FontAwesomeIcon icon={icon}/>
        <h1 className="text-sm text-center">{name}</h1>
    </div>
  )
}
TechIcon.propTypes={
    icon:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired
}

export default TechIcon