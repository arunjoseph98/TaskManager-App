import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TaskBoards from './pages/TaskBoards'
import AllTasks from './pages/AllTasks'
import CompletedTasks from './pages/CompletedTasks'
import OverdueTasks from './pages/OverdueTasks'
import { ThemeProvider } from '@mui/material'
import { dashboardTheme } from './dashboardTheme'
function App() {
 

  return (
    <>
      <ThemeProvider theme={dashboardTheme}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/taskboards' element={<TaskBoards/>}/>
          <Route path='/:id/AllTasks' element={<AllTasks/>} />
          <Route path='/:id/CompletedTasks' element={<CompletedTasks/>} />
          <Route path='/:id/OverdueTasks' element={<OverdueTasks/>} />
        </Routes>
      </ThemeProvider>
    </>
  )
}


export default App
