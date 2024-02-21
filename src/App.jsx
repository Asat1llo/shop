import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, Inner,Bin } from './pages/index.jsx'
import { Header,Footer } from './components/index.jsx'


function App() {

  return (
       <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inner' element={<Inner/>}/>
        <Route path='/bin' element={<Bin/>}/>
       </Routes>
       <Footer/>
       </>     
  )
}

export default App
