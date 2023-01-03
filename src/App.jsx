import './App.css'
import ProtectedRoud from './Componets/app/ProtectedRoud'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Purchases from './pages/Purchases'
import ProductID from './pages/ProductId'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProtectedRoutes from './Componets/app/ProtectedRoud'
import Header from './layout/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/products/:id' element= {<ProductID/>}/>

        < Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element= {<Purchases/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
