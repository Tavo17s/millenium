import './App.css'
import { Navbar, Hero, Testimonials, Card, About, Footer } from './components'
import { img1 } from './assets'

function App() {

  return (
    <div className='overflow-hidden w-full'>
      <div className='flex justify-center items-center px-[40px] md:px-[140px]'>
        <div className='w-full xl:max-w-[1280px]'>
          <Navbar />
        </div>
      </div>

      <div className='flex justify-start items-center'>
        <div className='w-full xl:max-w-[1280px]'>
          <Hero />
        </div>
      </div>

      <div className='flex justify-start items-center px-[40px] md:px-[140px]'>
        <div className='w-full xl:max-w-[1280px]'>
          <Testimonials />
          <Card />
          <About />
        </div>
      </div>
      <img src={img1} alt="img" className='w-full' />
      <Footer />
    </div>
  )
}

export default App
