import { Link,useParams  } from 'react-router-dom'
import { useState, useEffect } from 'react'
const ApartmentDetails = () => {
  const [Details, setDetails] = useState([])
  let { id } = useParams();

  useEffect(() => {
  const getDetails = async () => {
    const details = await fetchDetails(id)
    setDetails(details)
  }
  getDetails()
}, [id])

if(Details.length>0)
  return (
    <div>
    <div className={`apartment-info`}>
    <p>Floor Number: <span className={`floorNumber`} >{Details.at(0).floorNumber}</span></p>
    <p>Has a balcony: <span className={`hasBalcony`} >{Details.at(0).hasBalcony? 'Yes' : 'No'}</span></p>
    <p>Apartment Furnished: <span className={`isFurnished`} >{Details.at(0).isFurnished? 'Yes' : 'No'}</span></p>
    <p>Has a Parking: <span className={`hasParking`} >{Details.at(0).hasParking? 'Yes' : 'No'}</span></p>
    </div>
    <Link to='/'>Go Back</Link>
  </div>
  )
}//.at(0)
const fetchDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/apartments/${id}`)
  const data = await res.json()
  return data
}
export default ApartmentDetails
