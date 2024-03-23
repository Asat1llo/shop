import './App.css'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, Inner,Bin } from './pages/index.jsx'
import { Header,Footer } from './components/index.jsx'
import { fetchLocal} from './store/localSlice.js';

function App() {
 
  const [refresh,setRefresh]= useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchLocal())
  },[refresh])


  return (
       <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inner/:cardId' element={<Inner setRefresh={setRefresh}/>}/>
        <Route path='/bin' element={<Bin/>}/>
       </Routes>
       <Footer/>
       </>     
  )
}

export default App
