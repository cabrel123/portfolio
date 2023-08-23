import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Header from '././Layout/Header/Header'
import Footer from '././Layout/Footer/Footer'
import Error from './Pages/Error/Error'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />} error={<Error />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
