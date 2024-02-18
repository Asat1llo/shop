import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, Inner } from './pages/index.jsx'
import { Header,Footer } from './components/index.jsx'


function App() {

  return (
       <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inner' element={<Inner/>}/>
       </Routes>
       <Footer/>
       </>     
  )
}

export default App
