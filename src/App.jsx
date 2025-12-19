import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Dashboard from './Pages/Dashboard'
import Tasks from './Pages/Tasks'
import Settings from './Pages/Settings'

const App = () => {
  return (
   <BrowserRouter>
     <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
     </MainLayout>
   </BrowserRouter>
  )
}

export default App