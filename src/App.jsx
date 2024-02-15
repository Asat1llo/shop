import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Header, Footer} from './components/index.jsx'
import { Home, Movie,Counter } from './pages/index.js'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element={<Movie/>} />
      </Routes>
      <Counter/>
      <Footer />
    </>
  )
}

export default App
