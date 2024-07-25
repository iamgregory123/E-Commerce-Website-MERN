
import Hero from './components/Hero'
import Formsign from './components/Formsign'
import Formlogin from './components/Fornlogin'
import Loginhero from './components/Loginhero'
import Adminhome from './components/Adminhome'
import Adminlogin from './components/Adminlogin'
import Sellerlogin from './components/Sellerlogin'
import Userlist from './components/Userlist'
import Adpro from "./components/Adpro"; // Adjust the path and case if necessary
import PurchaseConfirmation from './components/PurchaseConfirmation'
import ProductDetail from './components/ProductDetail'

import Selladd from './components/Selladd'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
    
      <Route path='/' element={<Hero />} />
      <Route path='/signup' element={<Formsign />} />
      <Route path='/login' element={<Formlogin />} />
      <Route path='/loginhero' element={<Loginhero />} />
      <Route path='/adminlogin' element={<Adminlogin />} />
      <Route path='/userlist' element={<Userlist />} />
      <Route path='/selladd' element={<Selladd />} />
      <Route path='/adpro' element={<Adpro />} />
      <Route path="/confirm" element={<PurchaseConfirmation />} />
      
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='/sellogin' element={<Sellerlogin />} />
      
      <Route path='/adminhome' element={<Adminhome />} />



    </Routes>
    </>
  )
}

export default App
