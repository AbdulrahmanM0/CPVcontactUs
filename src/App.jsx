import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'reactstrap'
import './assets/style/style.css'
import ContactUs from './pages/ContactUs'
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/style/App.css'
import SQ from './components/SQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page-layout index-page'>
      <SQ />
      <Header />
      <ContactUs />
      {/* <Footer /> */}
    </div>
  )
}

export default App
