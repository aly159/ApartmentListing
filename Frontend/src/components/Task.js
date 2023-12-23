import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath,faBuilding } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.area && 'reminder'}`}
      onDoubleClick={() => onToggle(task._id)}
    >
      <div className={`apartment-info`}>
      <Link to={`/apartmentDetail/${task._id}`}>
            <h2>{task.title}</h2>
        </Link>
      <p>Price: $<span className={`apartment-price`} >{task.price}</span></p>
      <p>Desciption: <span className={`desciption`} >{task.description}</span></p>
      <p><FontAwesomeIcon icon={faBed} size="1x" />   <span className={`bedrooms`} >{task.numberOfBedrooms}</span></p>
      <p><FontAwesomeIcon icon={faBath} size="1x" />   <span className={`bathrooms`} >{task.numberOfBathrooms}</span></p>
      <p><FontAwesomeIcon icon={faBuilding} size="1x" />   <span className={`area`} >{task.area} <b>㎡</b></span></p>
 </div>
    </div>
  )
}

export default Task
