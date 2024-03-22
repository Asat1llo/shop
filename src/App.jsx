import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, Inner,Bin } from './pages/index.jsx'
import { Header,Footer } from './components/index.jsx'
import { useDispatch } from 'react-redux';
import { fetchLocal } from './store/localSlice.js';
import { useEffect } from 'react';
import { useSelector} from 'react-redux'

function App() {

 
  const dispatch = useDispatch()
  const {refresh} = useSelector(state=>state.local)
 
  function save(){
    if(localStorage.getItem('data')==null){
        localStorage.setItem('data','[]');
    }
  }

  save()
  useEffect(()=>{
    dispatch(fetchLocal())
  },[refresh])

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
