import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Header from '././Layout/Header/Header'
import Footer from '././Layout/Footer/Footer'
import Error from './Pages/Error/Error'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />} error={<Error />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
