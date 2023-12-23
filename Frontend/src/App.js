import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddProperty from './components/AddProperty'
import ApartmentDetails from './components/apartmentDetail'

const App = () => {
  const [showAddProperty, setShowAddProperty] = useState(false)
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setApartments(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch apartments
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3000/apartments')
    const data = await res.json();
    //console.log(data);
    return data
  }

  // Add apartment
  const addProperty = async (apartment) => {
    console.log(JSON.stringify(apartment));
    const res = await fetch('http://localhost:3000/apartments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apartment),
    })
    
    const data = await res.json()

    setApartments([...apartments, data])

  }

  // Delete apartment
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:3000/apartments`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setApartments(apartments.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }


  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddProperty(!showAddProperty)}
          showAdd={showAddProperty}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddProperty && <AddProperty onAdd={addProperty} />}
                {apartments.length > 0 ? (
                  <Tasks
                    tasks={apartments}
                    onDelete={deleteTask}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path="/apartmentDetail/:id" Component={ApartmentDetails}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
