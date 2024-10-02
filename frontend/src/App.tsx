
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/Create'
import Home from './components/Home'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
