import './App.css'
import { useDispatch, useSelector} from 'react-redux';
import { useEffect} from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, Inner,Bin, Conditions,Purches} from './pages/index.jsx'
import { Header,Footer } from './components/index.jsx'
import { fetchLocal} from './store/localSlice.js';

function App() {
 
  const {ref} = useSelector(state=>state.local)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchLocal())
  },[ref])


  return (
       <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inner/:cardId' element={<Inner/>}/>
        <Route path='/bin' element={<Bin/>}/>
        <Route path='/condition' element={<Conditions/>}/>
        <Route path='/purches' element={<Purches/>}/>
       </Routes>
       <Footer/>
       </>     
  )
}

export default App
