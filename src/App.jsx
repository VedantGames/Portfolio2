import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="relative font-chakra w-screen h-screen text-white">
      <img src="/background2.jpg" className="absolute top-0 left-0 object-cover -z-10 size-full" />
      <Navbar />
      <Home />
    </div>
  )
}

export default App