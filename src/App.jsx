
import Hero from './components/Hero'
import Service from './components/Service'
import Platform from './components/Platform'
import Subscribe from './components/Subscribe'
import Community from './components/Community'
import Footer from './components/Footer'
import Lenis from '@studio-freight/lenis'
function App() {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div id="main">
      <main className='w-full'>
        <Hero />
        <Service />
        <Platform />
        <Subscribe />
        <Community />
        <Footer />
      </main>


    </div>
  )
}

export default App
