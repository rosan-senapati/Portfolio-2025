import {About, Footer, Header, Skills, Testimonials, Work} from './container/index.js'
import { Navbar } from './components/Index.js';
import './App.scss'
function App() {


  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <About />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}

export default App
