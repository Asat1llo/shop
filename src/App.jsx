import classes from './App.module.css'
import {Header, Content, Footer} from './components/index.jsx'


function App() {

  return (
    <div className={classes.layoutStyle}>
      <Header/>
      <Content/>
      <Footer />
    </div>
  )
}

export default App
