import {useEffect} from 'react'
import Headers from './componants/Headers'
import Homepages from './componants/Homepages'
import Footer from './componants/Footer'
import Services from './componants/Services'
import Tracking from './componants/Tracking'
import Contact from './componants/Contact'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Headers/>
    <Router>
      <Routes>
      <Route exact path='/' element={<Homepages/>} />
        <Route exact path='/Services' element={<Services/>} />
        <Route exact path='/Tracking' element={<Tracking/>} />
        <Route exact path='/Contact/' element={<Contact/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
