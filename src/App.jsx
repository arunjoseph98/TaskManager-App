import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TaskBoards from './pages/TaskBoards'
import AllTasks from './pages/AllTasks'
import Board from './components/View/View'
import { ThemeProvider } from '@mui/material'
import { dashboardTheme } from './dashboardTheme'
function App() {
 

  return (
    <>
      <ThemeProvider theme={dashboardTheme}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/taskboards' element={<TaskBoards/>}/>
          {/* <Route path='/board' element={<Board/>}/>   */}
          <Route path='/:id/view' element={<AllTasks/>} />
          {/* 
          <Route path='/:id/view' element={<CompletedTasks/>} />
          <Route path='/:id/view' element={<OverdueTasks/>} /> */}
        </Routes>
      </ThemeProvider>
    </>
  )
}


export default App
