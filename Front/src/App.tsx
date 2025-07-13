
import { Route, Routes } from 'react-router'
import TaskList from './pages/TaskList/TaskList'
import TaskForm from './pages/TaskForm/TaskForm'
import TaskItem from './pages/TaskItem/TaskItem'
import { NavBar } from './components/navBar/NavBar'



function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='form' element={<TaskForm />} />
        <Route path='/task/:id' element={<TaskItem />} />
      </Routes>


    </>
  )
}

export default App
