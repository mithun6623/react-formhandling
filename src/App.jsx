
import Navbar from './Navbar'
import Login from './Login'
import Register from './Register'
import Dasbord from './Dasbord'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Navbar/>

        <Routes>
            <Route path='/' element={<Dasbord/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </div>
  )
}

export default App