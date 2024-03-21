import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, Inner,Bin } from './pages/index.jsx'
import { Header,Footer } from './components/index.jsx'

function App() {

  

  function save(){
    if(localStorage.getItem('data')==null){
        localStorage.setItem('data','[]');
    }
  }

  save()

  return (
       <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inner/:cardId' element={<Inner/>}/>
        <Route path='/bin' element={<Bin/>}/>
       </Routes>
       <Footer/>
       </>     
  )
}

export default App
