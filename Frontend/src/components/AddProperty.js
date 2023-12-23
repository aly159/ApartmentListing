import { useState } from 'react'

const AddProperty = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [numberOfBedrooms, setNumberOfBedrooms] = useState('')
  const [numberOfBathrooms, setNumberOfBathrooms] = useState('')
  const [area, setArea] = useState('')
  const [ownerId, setOwner] = useState('123')
  const onSubmit = (e) => {
    e.preventDefault()
   
    if (!title  || !description|| !price|| !numberOfBedrooms|| !numberOfBathrooms|| !area) {
      alert('missing fields');
      return;
    }
   
    onAdd({ title, description, price,numberOfBedrooms,numberOfBathrooms,area,ownerId })

    setTitle('')
    setDesc('')
    setPrice('')
    setNumberOfBedrooms('')
    setNumberOfBathrooms('')
    setArea('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Apartment title</label>
        <input
          type='text'
          placeholder='Add Apartment'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input
          type='text'
          placeholder='description'
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Price</label>
        <input
          type='text'
          placeholder='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Number Of Bedrooms</label>
        <input
          type='number'
          placeholder='numberOfBedrooms'
          value={numberOfBedrooms}
          onChange={(e) => setNumberOfBedrooms(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Number Of Bathrooms</label>
        <input
          type='number'
          placeholder='numberOfBathrooms'
          value={numberOfBathrooms}
          onChange={(e) => setNumberOfBathrooms(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Area</label>
        <input
          type='number'
          placeholder='area'
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div hidden>
        <label>ownerId</label>
        <input
          type='number'
          placeholder='area'
          value={ownerId}
          onChange={(e) => setOwner(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddProperty
