import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="relative font-chakra w-full md:h-screen h-full text-white bg-black">
      <img src="/background2.jpg" className="absolute top-0 left-0 object-cover  size-full" />
      <Navbar />
      <Home />
    </div>
  )
}

export default App
